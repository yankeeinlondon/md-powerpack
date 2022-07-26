// export API
import type { BuilderApi as BA, BuilderOptions, IPipelineStage } from "@yankeeinlondon/builder-api";
/**
 * A Builder API.
 * 
 * Generics indicate the shape of the options and which state of the pipeline the
 * API is hooking into.
 */
export type BuilderApi<O extends BuilderOptions, S extends IPipelineStage> = BA<O,S>;

// export builders
export { default as meta } from "@yankeeinlondon/meta-builder";
export { default as link } from "@yankeeinlondon/link-builder";
export { default as code } from "@yankeeinlondon/code-builder";

// export option hashes (and any other useful symbols)
export type { MetaOptions } from "@yankeeinlondon/meta-builder";
export type { LinkOptions } from "@yankeeinlondon/link-builder";
export type { CodeOptions, CodeBlockMeta } from "@yankeeinlondon/code-builder";

