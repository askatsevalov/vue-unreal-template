<template>
  <svg aria-hidden="true">
    <use :href="`#icon-${name}`" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Icon",
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
