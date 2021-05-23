import { shallowMount } from "@vue/test-utils";
import OrganizationsDemo from "@/components/OrganizationsDemo/OrganizationsDemo.vue";

describe("OrganizationsDemo.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(OrganizationsDemo, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
