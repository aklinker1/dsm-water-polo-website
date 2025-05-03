import { h, defineComponent, type Component } from "vue";

export default defineComponent({
  props: {
    component: {},
  },
  render() {
    return h(this.$props.component as Component);
  },
});
