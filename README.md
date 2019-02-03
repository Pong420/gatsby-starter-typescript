## Gatsby Typescript Starter

## Features

- **Custom Script**

  - `yarn component ComponentName`, will create below files in `src/components`

  ```bash
  .
  ├── ComponentName
  │   ├── ComponentName.scss
  │   ├── ComponentName.tsx
  │   └── ComponentName.ts
  └── ...
  ```

  - `yarn page test`, will create a `test.tsx` file in `src/pages`

- **SCSS** mixin and variables in `scss` directory are prepended and hence they can use directly

- [object-fit-images](https://github.com/bfred-it/object-fit-images) as polyfill of **gatsby-image**. [Details](https://github.com/gatsbyjs/gatsby/issues/2470#issuecomment-338394370)

- **TSLint**
