---
title: My App
route: about
description: a simple test of this plugin
---

# {{title}}

This markdown file adds a _few_ markdown constructs and is used as a "sanity test" that the core plugin -- `vite-plugin-md` -- works as expected with all of the plugins which this repo combines
being used in their default configuration.

## Code Blocks

To test this we will need a code block:

```ts
const foo: number = 42
```

and then another which has some features used:

```ts heading="My Code", highlight=2
const foo: number = 42;
const bar: string = "foobar";
const baz = (foo: number, bar: string) => `${foo}${bar}`;
```

## Links

When we _link_ to another page [locally](./local-page) it should get a different class and the `href` should be made into a `router-link`. In contrast, [external links](https://google.com) will
remain as `href`'s' and have a different class applied to them.

## Meta

Our frontmatter should translate into meta tags for the `title`, `description`, and the `route`.
