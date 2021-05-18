<template>
  <div class="toast" :class="type">
    <div class="icon">
      <Icon :name="icon" />
    </div>
    <p>{{ text }}</p>
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
          return "check";
        case "error":
          return "cross";
        case "warning":
          return "alert";
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
