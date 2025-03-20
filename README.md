![Image](https://github.com/user-attachments/assets/23285380-8536-4a15-87dd-bb54d16c30db)

# DSM Water Polo Website

## Contributing

First, install [`bunv`](https://github.com/aklinker1/bunv). This will ensure your version of [Bun](https://bun.sh) matches the project's requirements:

```sh
curl -sL https://raw.githubusercontent.com/aklinker1/bunv/main/install.sh | sh
```

Then install dependencies:

```sh
bun i
```

Duplicate and fill out the template `.env` file:

```sh
cp .env.template .env
```

And start up the app in dev mode!

```sh
bun dev
```

### Building For Production

Build the app to the `.output` folder:

```sh
bun run build
```

Preview the production build:

```sh
bun preview
```
