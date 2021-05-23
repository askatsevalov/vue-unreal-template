<template>
  <div class="toolbar-controls">
    <div class="control" v-for="({ type, props }, i) in controls" :key="i">
      <!-- <component :is="control.type" v-bind="control.props" /> Use this when there are your own components-->
      <button
        v-if="type === 'button'"
        :type="props.type"
        @click="props.callback"
      >
        {{ t(props.text) }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";
import { defineComponent, PropType } from "vue";
import ToolbarControl from "./toolbar-controls.model";

export default defineComponent({
  name: "UToolbarControls",
  props: {
    controls: Array as PropType<ToolbarControl[]>,
  },
  setup() {
    // i18n
    const { t } = useI18n({ useScope: "global" });

    return { t };
  },
});
</script>

<style lang="scss">
@import "style";
</style>
