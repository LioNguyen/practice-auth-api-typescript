# Authentication REST API with Node.js, TypeScript, Typegoose & Zod

[Build an Authentication API with Node.js, TypeScript, Typegoose, ExpressJS & Zod](https://youtu.be/qylGaki0JhY?si=JGKvUCQMk8CNekS2)

[Auth Api Tutorial Repo](https://github.com/TomDoesTech/auth-api-tutorial)

[Typescript paths with ts-node, ts-node-dev, and jest](https://medium.com/@fmoessle/typescript-paths-with-ts-node-ts-node-dev-and-jest-671deacf6428)

[Install & run mongodb local](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/#run-mongodb-community-edition)

## Features

1. Register a user
2. Verify user's email address
3. Send forgot password email
4. Reset password
5. Get current user
6. Login
7. Access token
8. Refresh tokens

## What technology are we using?

- [TypeScript](https://www.typescriptlang.org/) - Static tye checking
- [Express@5](https://expressjs.com/en/5x/api.html) - Web server
- [Typegoose](https://typegoose.github.io/typegoose/) - Mongoose wrapper for creating TypeScript interfaces and models
- [argon2](https://github.com/ranisalt/node-argon2#readme) - Password hashing (more securer than bcrypt)
- [Zod](https://github.com/colinhacks/zod) - Validation
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - Signing and verifying JSON web tokens
- [Nodemailer](https://nodemailer.com/about/) - Sending emails
- [Pino](https://github.com/pinojs/pino) - Logging
- [config](https://github.com/lorenwest/node-config) - Managing configuration

## SETUP

### Init project

```bash
yarn init
```

### Install TypeScript

```bash
yarn add typescript --dev
tsc --init
```

### Install dev dependencies

```bash
yarn add typescript ts-node-dev tsconfig-paths @types/express @types/config pino-pretty @types/nodemailer @types/lodash @types/jsonwebtoken -D
```

### Install Express

```bash
yarn add express@5
```

### Install dependencies

```bash
yarn add mongoose @typegoose/typegoose config argon2 pino dayjs nanoid nodemailer lodash jsonwebtoken dotenv zod
```

### Add scripts in package.json

```json
{
  "scripts": {
    "dev": "ts-node-dev -r tsconfig-paths/register --respawn --transpile-only src/app.ts"
  }
}
```
