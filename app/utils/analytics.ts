/** Wait for the globalThis.umami to be defined. Stop waiting after 5 seconds. Check every second. */
export function waitForUmami(): Promise<typeof umami> {
  return new Promise((resolve, reject) => {
    let tries = 1;
    const checkUmami = () => {
      if (globalThis.umami) return resolve(globalThis.umami);
      if (tries >= 5) return reject(new Error("Umami not found"));

      tries++;
      setTimeout(checkUmami, 1000);
    };

    checkUmami();
  });
}
