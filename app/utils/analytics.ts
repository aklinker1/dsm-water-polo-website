/** Wait for the globalThis.umami to be defined. Stop waiting after 5 seconds. Check every second. */
export function waitForUmami(cb: () => void): void {
  let tries = 1;
  const checkUmami = () => {
    if (globalThis.umami) return cb();
    if (tries >= 5) return;

    tries++;
    setTimeout(checkUmami, 1000);
  };

  checkUmami();
}
