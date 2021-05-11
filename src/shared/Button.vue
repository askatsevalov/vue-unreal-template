<template>
  <button :style="`background: ${color}`">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    color: {
      type: String,
      default: "#42b983"
    }
  }
});
</script>

<style scoped lang="scss"></style>
