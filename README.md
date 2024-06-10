# Microfrontend with Nx and Webpack

- This is a simple demostration of a micro-frontend app with Webpack Module federation and Nx.
- node version: v20.14.0

## References

- [Nx Module Federation with Angular](https://nx.dev/recipes/angular/dynamic-module-federation-with-angular)
- [Nx React](https://nx.dev/nx-api/react)
- [Upgrade Angular with Nx](https://medium.com/@marcelltech/update-guide-nx-workspace-to-angular-17-77af98c88895)

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
