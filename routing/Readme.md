# Nodejs server to validate the deployment configuration locally

## Prerequisites

- Add proper base prefix(/ui/shell/mfe3) in .env for mfe3 application

- From the root, build the frontend application

```sh
npm run build:staging
```

- Create symlink for the generated dist

```sh
ln -s <path>/ng-mf-example/dist/apps <path>/routing/public/ui
```

Once done, install the dependencies and run the server

```sh
npm install
npm run dev
```
