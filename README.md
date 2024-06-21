# Microfrontend with Nx and Webpack

- This is a simple demostration of a micro-frontend app with Webpack Module federation and Nx.
- node version: v20.14.0

## References

- [Nx Module Federation with Angular](https://nx.dev/recipes/angular/dynamic-module-federation-with-angular)
- [Nx React](https://nx.dev/nx-api/react)
- [Upgrade Angular with Nx](https://medium.com/@marcelltech/update-guide-nx-workspace-to-angular-17-77af98c88895)
- [Article](https://javascript-conference.com/blog/microfrontends-in-the-monorepo/)
- [Microfrontends](https://javascript.plainenglish.io/its-time-to-talk-about-import-map-micro-frontend-and-nx-monorepo-0b8e2c07568a)
- [Nx Angular Monorepo](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial)

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
