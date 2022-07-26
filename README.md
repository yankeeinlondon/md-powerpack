# `md-powerpack`

> An aggregation of useful "builder APIs" which can be used with the `vite-plugin-md` pipeline

## Included Builders

- **code** - [@yankeeinlondon/code-builder](https://github.com/yankeeinlondon/link-builder) adds code highlighting to pages with light/dark themes out of the box.
- **link** - [@yankeeinlondon/link-builder](https://github.com/yankeeinlondon/link-builder) adds useful classes to enhance ability to style link types, switches local links to use VueJS router, and more.
- **meta** - [@yankeeinlondon/meta-builder](https://github.com/yankeeinlondon/meta-builder) adds more control over setting page and route meta properties

## Example Configuration

To use the core `vite-plugin-md` along with the powerpack's builders you would create a `vite.config.ts` / `vite.config.js` file similar to the following:

```ts
import { defineConfig } from "vite";
import Markdown from "vite-config-md";
import Vue from "@vitejs/vue";
import { code, meta, link } from "md-powerpack";

export default defineConfig({
    plugins: [
        Vue({
            include: [/\.vue$/, /\.md$/],
        }),
        Markdown({
            builders: [code(), meta(), link()]
        })
    ]
})
```

Every builder API will provide good defaults out of the box but you may also add configuration (all strongly typed) if you want to modify behavior.
