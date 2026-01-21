///
/// USAGE:
///   bun run scripts/to-webp.ts <path-to-image>
///

import sharp from "sharp";
import { extname } from "node:path";

const path = process.argv[2];
const ext = extname(path);
const webpPath = path.replace(ext, ".webp");

await sharp(path).webp({ preset: "picture" }).toFile(webpPath);
