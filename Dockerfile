FROM oven/bun:1
WORKDIR /app
COPY .output .
CMD [ "bun", "run", ".output/server-entry.js" ]
