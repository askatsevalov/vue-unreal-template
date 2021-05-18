<template>
  <div class="toast" :class="type">
    <Icon :name="icon" />
    {{ text }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Icon from "@/shared/Icon/Icon.vue";

export default defineComponent({
  name: "Toast",
  components: { Icon },
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "info",
    },
  },
  computed: {
    icon(): string {
      switch (this.type) {
        case "success":
          return "plus"; // "check";
        case "error":
          return "cross";
        case "warning":
          return "exclamation";
        case "info":
          return "info";
        default:
          return "info";
      }
    },
  },
});
</script>

<style lang="scss">
@import "style";
</style>
