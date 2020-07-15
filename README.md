## Description

This is repro of the [issue](https://github.com/mswjs/msw/issues/279) with `statusText` in MSW.

There are two routes:

```
GET /hello

GET /error
```

You will see the value of `statusText` in a response. `HttpService` used in this project is based on [Axios](https://github.com/axios/axios).

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

Server will be running on `http://localhost:3000`
