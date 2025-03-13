FROM oven/bun:1
COPY .output .
CMD [ "bun", "run", "server-entry.js" ]
