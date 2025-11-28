FROM oven/bun:1.3.3-alpine
RUN apk update
RUN apk add curl
COPY .output .
RUN bun install --production --frozen-lockfile
CMD [ "bun", "run", "server-entry.ts" ]
