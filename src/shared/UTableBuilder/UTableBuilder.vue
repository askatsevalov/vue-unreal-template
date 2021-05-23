<template>
  <table>
    <thead>
      <tr>
        <th v-for="({ label }, i) in config.columns" :key="i">
          {{ t(label || "") }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in data" :key="i">
        <td v-for="({ prop, type, props }, i) in config.columns" :key="i">
          <span v-if="type === 'text'">
            {{ item[prop] || item }}
          </span>
          <span
            v-if="type === 'tag'"
            style="background: darkgrey; padding: 3px;"
          >
            {{ item[prop] || item }}
          </span>
          <div v-if="type === 'actions'">
            <button
              v-for="(action, i) in props.actions"
              :key="i"
              @click="action.callback(item[prop] || item)"
            >
              <UIcon :name="action.icon" />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";
import { defineComponent, PropType } from "vue";
import TableBuilderConfig from "./table-builder.model";

export default defineComponent({
  name: "UTableBuilder",
  props: {
    config: {
      type: Object as PropType<TableBuilderConfig>,
      required: true,
    },
    data: {
      type: Array as PropType<any[]>,
      required: true,
    },
  },
  emits: ["onDelete", "onEdit"],
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
