/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />

declare module '*.svg' {
  import { DefineComponent } from 'vue'
  // eslint ignore next line because it's a type definition
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const component: DefineComponent<object, object, any>
  export default component
}
