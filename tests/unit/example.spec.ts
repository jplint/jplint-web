import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg =
      "For a guide and recipes on how to configure / customize this project, check out the vue-cli documentation. Installed CLI Pluginsbabeltypescriptpwaeslintunit-jeste2e-cypressEssential LinksCore DocsForumCommunity ChatTwitterNewsEcosystemvue-routervuexvue-devtoolsvue-loaderawesome-vue";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
