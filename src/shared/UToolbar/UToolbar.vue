<template>
  <div class="toolbar">
    <div class="left">
      <UToolbarControls :controls="config.controls.left" />
    </div>
    <div class="right">
      <UToolbarControls :controls="config.controls.right" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ToolbarConfig from "./toolbar.model";

export default defineComponent({
  name: "UToolbar",
  props: {
    config: Object as PropType<ToolbarConfig>,
  },
});
</script>

<style lang="scss">
@import "style";
</style>
