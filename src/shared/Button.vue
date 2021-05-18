<template>
  <button :class="`${variant} ${size}`">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    variant: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "normal",
    },
  },
});
</script>

<style scoped lang="scss"></style>
