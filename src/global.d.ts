declare module '*.png';
declare module '*.jpg';
declare module '*.svg' {
  export const ReactComponent: SvgrComponent;
}

declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}
