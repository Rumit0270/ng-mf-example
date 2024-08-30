# Microfrontend with Nx and Webpack

- This is a simple demostration of a micro-frontend app with Webpack Module federation and Nx.
- node version: v20.14.0

## Prerequisutes

- Add .env file for mfe3 application
- You can add .env file to the root of directory to use Nx Cloud. More in connecting workspace to Nx cloud can be read [here](https://nx.dev/ci/intro/connect-to-nx-cloud). An example to make use of distributed caching without Nx Cloud is added [here](https://github.com/Rumit0270/ng-mf-example/tree/feat/use-nx-s3-cache).
- You can add `APP_ENV` github secret for the application environments to connect with NX Cloud in CI environment

## Steps

- Create Nx workspace

```sh
npx create-nx-workspace ng-mf-example
```

- Create shell application

```sh
nx g @nx/angular:host apps/shell --dynamic
```

- Create Angular mfe apps

```sh
nx g @nx/angular:remote apps/mfe1 --host=shell
nx g @nx/angular:remote apps/mfe2 --host=shell
```

- Create shared package and relevant services

```sh
nx g @nx/angular:lib libs/shared-lib
nx g @nx/angular:service log --project=shared-lib
nx g @nx/angular:component button --project=shared-lib
```

```sh
nx g @nx/angular:component home --project=mfe1
```

- Install Nx React Plugin Create react remote

```sh
nx add @nx/react
nx g @nx/react:remote mfe3 --directory=apps/mfe3
```

- Integrate React remote into Angular host. Note we have exported a `mount` function from our remote app to allow our host app to just invoke and mount the React app.

- Serve the host

```sh
nx serve shell
```

- Build the application. Additinal flags can be provided in a similar fashion to ng command.

```sh
nx build mfe1
nx build mfe1 --deploy-url=/ui/mfe1/ --output-hashing=all --aot
```

## For running tests

- Run test for a application

```sh
npm run test:mfe1
nx run mfe1:test --watchAll
```

- To run test for a specific file

```sh
nx run mfe1:test --testFile=apps/mfe1/src/app/remote-entry/home/home.component.spec.ts
nx run mfe1:test --testFile=apps/mfe1/src/app/remote-entry/home/home.component.spec.ts --watch
```

- Check Nx project configuration

```sh
npx nx show project [PROJECT_NAME] --web
npx nx show project mfe1 --web
```

## Sharing state with ngRx

- [Docs](https://nx.dev/nx-api/angular/generators/ngrx-root-store)

- Create new shared library for state management

```sh
nx g @nx/angular:lib libs/data-store
```

- Create new feature store and add relevant logic

```sh
nx g @nx/angular:ngrx-feature-store count
```

- Now, configure the feature store in relevant apps

## E2E test with Cypress

- https://nx.dev/nx-api/cypress
- https://docs.cypress.io/guides/guides/network-requests

## I18n with ngx-translate

- Language change is propagated from shell to sub application via shared service

- Each app maintains its own set of translations

- Translations for shared UI elements are maintained under shared lib and then the configuration on subapps are updated to include the shared translations in bundle. Micro apps will then load both set of translations initially.

- An example of how translations can be placed in shared location is added [here](https://github.com/Rumit0270/ng-mf-example/tree/feat/shared-translations)

## Deployment

- A Github action script is used to deploy the project to S3 with Cloudfront.
  [Auth GA with AWS](https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services)

- It uses [Paths filter](https://github.com/dorny/paths-filter) action to deploy only the sub project is has changed

- Add following action secrets

```
REACT_APP_ENV=
IAM_ROLE_ARN=
BUCKET_NAME=
CLOUDFRONT_DISTRIBUTION_ID=
```

![Demo](ng-mf-example-demo.gif)

## References

- [Nx Module Federation with Angular](https://nx.dev/recipes/angular/dynamic-module-federation-with-angular)
- [Nx React](https://nx.dev/nx-api/react)
- [Upgrade Angular with Nx](https://medium.com/@marcelltech/update-guide-nx-workspace-to-angular-17-77af98c88895)
- [Article](https://javascript-conference.com/blog/microfrontends-in-the-monorepo/)
- [Microfrontends](https://javascript.plainenglish.io/its-time-to-talk-about-import-map-micro-frontend-and-nx-monorepo-0b8e2c07568a)
- [Nx Angular Monorepo](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial)
- [Handle Translations](https://stackoverflow.com/questions/76219437/share-ngx-translate-translation-files-across-multiple-apps-in-a-nx-workspace)
