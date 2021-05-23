<template>
  <div class="panel">
    <div class="panel-header">
      <slot name="header" />
    </div>
    <div class="panel-body">
      <slot />
    </div>
    <div class="panel-extra" v-if="$slots.extra">
      <slot name="extra" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UPanel",
});
</script>

<style lang="scss">
@import "style";
</style>
