# vue-deno-compiler

compiler for sfc vue component

> Lower level utilities for compiling Vue Single File Components

This package contains lower level utilities that you can use if you are writing a plugin / transform for a bundler or module system that compiles Vue Single File Components (SFCs) into JavaScript.

## Browser Build Notes

The browser build relies on a browser-bundled build of `postcss` to be available under the global `postcss` (since it can't be properly bundled by Rollup).

## API

The API is intentionally low-level due to the various considerations when integrating Vue SFCs in a build system:

- Separate hot-module replacement (HMR) for script, template and styles

  - template updates should not reset component state
  - style updates should be performed without component re-render

- Leveraging the tool's plugin system for pre-processor handling. e.g. `<style lang="scss">` should be processed by the corresponding webpack loader.

- In some cases, transformers of each block in an SFC do not share the same execution context. For example, when used with `thread-loader` or other parallelized configurations, the template sub-loader in `vue-loader` may not have access to the full SFC and its descriptor.

The general idea is to generate a facade module that imports the individual blocks of the component. The trick is the module imports itself with different query strings so that the build system can handle each request as "virtual" modules:

```
                                  +--------------------+
                                  |                    |
                                  |  script transform  |
                           +----->+                    |
                           |      +--------------------+
                           |
+--------------------+     |      +--------------------+
|                    |     |      |                    |
|  facade transform  +----------->+ template transform |
|                    |     |      |                    |
+--------------------+     |      +--------------------+
                           |
                           |      +--------------------+
                           +----->+                    |
                                  |  style transform   |
                                  |                    |
                                  +--------------------+
```

example:
```ts
import { parse } from "https://deno.land/x/vue_sfc_compiler/mod.ts";


console.log(parse(`....`)); // component to parse.

```

output:
```js
{
  descriptor: {
    filename: "App.vue",
    source: `\n<template>\n  <div id="app">\n    <body v-if="displayedComponent === 'home'">\n      <Home />\n    </bo...`,
    template: {
      type: "template",
      content: `\n  <div id="app">\n    <body v-if="displayedComponent === 'home'">\n      <Home />\n    </body>\n    <bo...`,
      loc: {
        source: `\n  <div id="app">\n    <body v-if="displayedComponent === 'home'">\n      <Home />\n    </body>\n    <bo...`,
        start: [Object],
        end: [Object]
      },
      attrs: {},
      ast: {
        type: 1,
        ns: 0,
        tag: "template",
        tagType: 0,
        props: [Array],
        isSelfClosing: false,
        children: [Array],
        loc: [Object],
        codegenNode: undefined
      }
    },
    script: {
      type: "script",
      content: "\nimport Travel from './components/Travel';\nimport Lighthouse from './components/Lighthouse';\nimport ...",
      loc: {
        source: "\nimport Travel from './components/Travel';\nimport Lighthouse from './components/Lighthouse';\nimport ...",
        start: [Object],
        end: [Object]
      },
      attrs: {}
    },
    scriptSetup: null,
    styles: [
      {
        type: "style",
        content: "\nbody {\n  background-color: #34495e;\n}\n.header {\n  display: flex;\n  flex-flow: column;\n  align-items...",
        loc: [Object],
        attrs: [Object]
      }
    ],
    customBlocks: [],
    cssVars: []
  },
  errors: []
}
```

### High Level Workflow

1. In facade transform, parse the source into descriptor with the `parse` API and generate the above facade module code based on the descriptor;

2. In script transform, use `compileScript` to process the script. This handles features like `<script setup>` and CSS variable injection. Alternatively, this can be done directly in the facade module (with the code inlined instead of imported), but it will require rewriting `export default` to a temp variable (a `rewriteDefault` convenience API is provided for this purpose) so additional options can be attached to the exported object.

3. In template transform, use `compileTemplate` to compile the raw template into render function code.

4. In style transform, use `compileStyle` to compile raw CSS to handle `<style scoped>`, `<style module>` and CSS variable injection.

Options needed for these APIs can be passed via the query string.

For detailed API references and options, check out the source type definitions.
