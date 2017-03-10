# Koa v2.1 API Skeleton

> Awesome KoaJS boilerplate to create APIs using a DDD based architecture

If you never worked with `Koa` before, please give a look in its **[docs](https://koajs.com)** first

## How this architecture works

The source code of your app will be in `src` folder and all tests will be in `test` folder.

This boilerplate uses a DDD based architecture, so the main folders you will be working with will be: `domains` and `modules` folders. Below I will talk a little about the folders inside `src`:

- `config:` Here you can find two files
  - `config.js.example:` File used to configure your application
  - `routes.js:` File used to define the **routes** of your application

- `core:` These are helper files that I created to make things simpler when working with this boilerplate, most likely that you don't need to change nothing here.

- `domains:` Here you will create the domains of your application, each domain will have one or more: `models`, `repositories`, `resources (like messages)`, `validators`. Here you will put only domains that can be used and shared by your **Modules**.

- `modules:` Here you will create the modules of your application, think in each module as an **micro service**, they're independent and can use one or many **Domains**. Each module will have one or more: `controllers`, `resources (like messages)`, `services`.

- `support:` Here you can put helper files that can be used by any of your **Modules** and **Domains**.

## How to use

- Clone this **repo** and enter it

- Install the **dependencies**

```
yarn
```

- Enter the `src/config` folder and copy the `config.js.example` file to `config.js` file

```
cp config.js.example config.js
```

## Commands available

To make things easier I created some scripts that you can run:

- To run the lint use

```
yarn lint
```

- To run the lint in **watch** mode use

```
yarn lint:watch
```

- To run the tests use

```
yarn test
```

- To run the tests in **watch** mode use

```
yarn test:watch
```

- To run the app in development mode use

```
yarn serve:dev
```

- To build the app for production use

```
yarn build
```

- To run the app in production mode use

```
yarn serve
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/WendellAdriel/koa-api-skeleton/. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.
