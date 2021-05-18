<template>
  <svg aria-hidden="true">
    <use :href="`#icon-${name}`" />
  </svg>
</template>

<script lang="ts">
export default {
  name: "Icon",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
svg {
  fill: currentColor;
  height: 1em;
  width: 1em;
  vertical-align: -0.15em;
  overflow: hidden;
}
</style>
