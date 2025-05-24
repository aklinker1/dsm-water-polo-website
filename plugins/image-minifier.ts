import * as svgo from "svgo";
import sharp from "sharp";
import type { Plugin, Rollup } from "vite";
import { extname, basename } from "node:path";
import bytes from "bytes";

/**
 * Minimize, convert, and optimize assets:
 *
 * - JPEG &rarr; (Sharp) &rarr; WEBP (Lossy)
 * - PNG &rarr; (Sharp) &rarr; WEBP (Lossless)
 * - SVG &rarr; (SVGO) &rarr; Optimized SVG
 *
 * Size savings are printed at the end of the build.
 *
 * > !! Public files are not optimized.
 */
export function imageMinifier(): Plugin {
  const minifiers: Partial<Record<string, Minifier>> = {
    png: PNG_MINIFIER,
    jpg: JPEG_MINIFIER,
    jpeg: JPEG_MINIFIER,
    svg: SVG_MINIFIER,
  };

  return {
    name: "aklinker1:image-optimizer",
    apply: "build",
    async generateBundle(_, bundle) {
      // Find images to optimize

      const toOptimize: Array<{
        path: string;
        extension: string;
        minifier: Minifier;
        entry: Rollup.OutputAsset;
      }> = [];

      for (const path of Object.keys(bundle)) {
        const extension = extname(path).substring(1);
        const minifier = minifiers[extension];
        if (minifier) {
          toOptimize.push({
            path,
            extension,
            minifier,
            entry: bundle[path] as Rollup.OutputAsset,
          });
        }
      }

      // Optimize images

      console.log(
        `\x1b[32m[image-optimizer]\x1b[0m Optimizing \x1b[1m\x1b[35m${toOptimize.length}\x1b[0m images...`,
      );

      const optimized = await Promise.all(
        toOptimize.map(async (image) => {
          const filename = basename(image.path);
          const { newFilename, newSource } = await image.minifier(
            filename,
            image.extension,
            image.entry.source,
          );
          const newPath = replaceSuffix(image.path, filename, newFilename);
          return {
            ...image,
            size: image.entry.source.length,
            newPath,
            newSource,
            newSize: newSource.length,
            wasOptimized: newSource.length < image.entry.source.length,
          };
        }),
      );

      // Update bundle before files are written to the disk

      let totalOriginalSize = 0;
      let totalNewSize = 0;

      for (const image of optimized) {
        totalOriginalSize += image.size;
        totalNewSize += image.newSize;
        if (image.wasOptimized) {
          image.entry.source = image.newSource;
          image.entry.fileName = image.newPath;
          bundle[image.newPath] = image.entry;
          if (image.newPath !== image.path) delete bundle[image.path];
        }
      }

      console.table([
        ...optimized.map((image) => ({
          File: image.newPath,
          "Original Size": bytes.format(image.size),
          "New Size": bytes.format(image.newSize),
          Change: bytes.format(image.newSize - image.size),
          "Percent Change":
            (((image.newSize - image.size) / image.size) * 100).toFixed(0) +
            "%",
        })),
        {
          File: "Total",
          "Original Size": bytes.format(totalOriginalSize),
          "New Size": bytes.format(totalNewSize),
          Change: bytes.format(totalNewSize - totalOriginalSize),
          "Percent Change":
            (
              ((totalNewSize - totalOriginalSize) / totalOriginalSize) *
              100
            ).toFixed(0) + "%",
        },
      ]);

      // Update file references in other files

      const replacements = optimized.filter(
        (image) => image.wasOptimized && image.path !== image.newPath,
      );

      const replacePaths = (source: string): string =>
        replacements.reduce(
          (source, image) => source.replaceAll(image.path, image.newPath),
          source,
        );

      for (const entry of Object.values(bundle)) {
        if (entry.type === "asset" && typeof entry.source === "string") {
          entry.source = replacePaths(entry.source);
        } else if (entry.type === "chunk") {
          entry.code = replacePaths(entry.code);
        }
      }
    },
  };
}

type Minifier = (
  filename: string,
  extension: string,
  source: string | Uint8Array,
) => Promise<{ newFilename: string; newSource: string | Uint8Array }>;

const PNG_MINIFIER: Minifier = async (filename, extension, source) => {
  return {
    newFilename: replaceSuffix(filename, extension, "webp"),
    newSource: await sharp(source).webp({ lossless: true }).toBuffer(),
  };
};

const JPEG_MINIFIER: Minifier = async (filename, extension, source) => {
  return {
    newFilename: replaceSuffix(filename, extension, "webp"),
    newSource: await sharp(source).webp({ lossless: false }).toBuffer(),
  };
};

const _enc = new TextEncoder();
const _dec = new TextDecoder();
const SVG_MINIFIER: Minifier = async (filename, extension, source) => {
  const sourceText = typeof source === "string" ? source : _dec.decode(source);
  const optimizedText = svgo.optimize(sourceText).data;

  return {
    newFilename: filename,
    newSource: _enc.encode(optimizedText),
  };
};

function replaceSuffix(
  string: string,
  existingSuffix: string,
  newSuffix: string,
): string {
  return string.substring(0, string.length - existingSuffix.length) + newSuffix;
}
