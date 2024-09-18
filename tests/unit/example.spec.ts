import { mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import { installQuasarPlugin } from "@quasar/quasar-app-extension-testing-unit-jest";
import { QBtn } from "quasar";

installQuasarPlugin({ components: { QBtn } });

describe("HelloWorld.vue", () => {
  it("QBtn correct render and emit click-btn event", () => {
    const wrapper = mount(HelloWorld);

    const btnElement = wrapper.find("button.q-btn");

    expect(btnElement.exists()).toBe(true);
    expect(wrapper.findComponent(QBtn).exists()).toBe(true);

    expect(wrapper.emitted()).not.toHaveProperty("click-btn");

    btnElement.trigger("click");

    expect(wrapper.emitted()).toHaveProperty("click-btn");
  });
});
