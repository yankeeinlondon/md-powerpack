import { describe, it, expect } from "vitest";
import type { BuilderRegistration } from "@yankeeinlondon/builder-api";
import { code, meta, link, CodeOptions, MetaOptions, LinkOptions } from "../dist/index.js";
import { ExpectTrue,  Equal } from "@type-challenges/utils";

describe("exports are importable", () => {
  it("Builder objects are all functions", () => {
    expect(typeof code).toBe("function");
    expect(typeof meta).toBe("function");
    expect(typeof link).toBe("function");
  });

  it("Type returned from calling builders is a BuilderRegistration", () => {
    const c = code()();
    const m = meta()();
    const l = link()();

    type cases = [
      ExpectTrue<Equal<typeof c, BuilderRegistration<Partial<CodeOptions>, "parser">>>,
      ExpectTrue<Equal<typeof m, BuilderRegistration<Partial<MetaOptions>, "metaExtracted">>>,
      ExpectTrue<Equal<typeof l, BuilderRegistration<Partial<LinkOptions>, "parser">>>
    ];

    const cases: cases = [true, true, true];
  });
});