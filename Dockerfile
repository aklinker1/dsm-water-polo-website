FROM oven/bun:1-alpine
COPY .output .
CMD [ "bun", "run", "server-entry.js" ]
