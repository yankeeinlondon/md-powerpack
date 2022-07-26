import {describe, expect, it} from "vitest";
import { mountFixtureWithRouter } from "./utils/mountFixture";


describe("basic loading", () => {
  it("imported markdown fixture provides frontmatter", async () => {
    const t = await mountFixtureWithRouter("../fixtures/together.md");
    expect(t.frontmatter).toBeDefined();
    expect(t.frontmatter).toEqual({
      title: "My App",
      layout: "about",
      routeName: "About",
      description: "a simple test of this plugin"
    });
  });

  it("imported markdown can be rendered as a component", async () => {
    const { wrapper } = await mountFixtureWithRouter("../fixtures/together.md");
    const h1 = wrapper.find("h1");
    expect(h1.element.innerHTML).toBe("My App");
  });
});


describe("link builder", () => {

  it("internal link converted correctly",async() => {
    const { wrapper } = await mountFixtureWithRouter("../fixtures/together.md");
    const links = wrapper.findAll("a.internal-link");
    expect(links.length, "only one internal link should be present").toBe(1);
  });
  it("external link converted correctly",async() => {
    const { wrapper } = await mountFixtureWithRouter("../fixtures/together.md");
    const links = wrapper.findAll("a.external-link");
    expect(links.length, "only one external link should be present").toBe(1);
  });
});


describe("meta builder", () => {
  // TODO: need to find a strategy for testing this
  it.todo("meta tags are present for title and description",async() => {
    const { wrapper } = await mountFixtureWithRouter("../fixtures/together.md");
    const meta = wrapper.findAll("meta");
    expect(meta.length).toBe(2);
  });

  it("route meta is applied to the routers meta prop",async() => {
    const { currentRoute } = await mountFixtureWithRouter("../fixtures/together.md");
    expect(currentRoute.name).toBe("About");
    expect(currentRoute.meta.layout).toBe("about");
  });
});

describe("code builder", () => {
  it("both code blocks identified in DOM",async() => {
    const { wrapper } = await mountFixtureWithRouter("../fixtures/together.md");
    const blocks = wrapper.findAll(".code-block");
    expect(blocks.length).toBe(2);
  });
  it("a single line was highlighted",async() => {
    const { wrapper } = await mountFixtureWithRouter("../fixtures/together.md");
    const highlighted = wrapper.findAll(".highlight");
    expect(highlighted.length).toBe(1);
  });
});
