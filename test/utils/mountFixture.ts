import { mount } from "@vue/test-utils";
import type { DefineComponent } from "vue";
import { createHead } from "@vueuse/head";
import { createRouter, createWebHistory } from "vue-router";
import type { Frontmatter } from "@yankeeinlondon/builder-api";

async function importFixture(fixture: string) {
  const assets = (await import(fixture)) as {
    default: DefineComponent;
    frontmatter: Frontmatter;
    excerpt?: string;
  };
  return {
    frontmatter: assets.frontmatter,
    component: assets.default,
    excerpt: assets.excerpt,
  };
}

/**
 * attempts to asynchronously import the Markdown file and returns
 * the `frontmatter` and `component`; it also provides the `sfc` object
 * for comparison purposes to aid in testing.
 */
export const mountFixture = async (fixture: string) => {
  try {
    // const sfc = await composeFixture(fixture)
    const assets = await importFixture(fixture);
    const wrapper = mount(assets.component, { global: { plugins: [] } });
    return {
      ...assets,
      wrapper,
    };
  } catch (error) {
    throw new Error(`Problem mounting "${fixture}" into DOM. The markdown of the file was:\n: ${error instanceof Error ? error.message : String(error)}`);
  }
};

export const mountFixtureWithRouter = async (fixture: string) => {
  try {
    const assets = await importFixture(fixture);
    const {component} = assets;
    const head = createHead();
    const router = createRouter({
      history: createWebHistory(),
      routes: [{
        path: "/",
        component,
      },
      {
        path: "/local-page",
        component
      }],
    });

    const wrapper = mount(component, { global: { plugins: [router, head],  } });
    const currentRoute = wrapper.vm.$router.currentRoute.value;
    return {
      ...assets,
      currentRoute,
      wrapper,
    };
  } catch (error) {
    throw new Error(`Problem mounting "${fixture}" into DOM. The markdown of the file was:\n: ${error instanceof Error ? error.message : String(error)}`);
  }
};
