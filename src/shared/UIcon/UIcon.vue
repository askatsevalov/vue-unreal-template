<template>
  <svg aria-hidden="true">
    <use :href="`#icon-${name}`" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
@import "style";
</style>
