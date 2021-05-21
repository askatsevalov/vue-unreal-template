<template>
  <table>
    <thead>
      <tr>
        <th v-for="({ label }, i) in columns" :key="i">
          {{ t(label || "") }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in data" :key="i">
        <td v-for="({ prop, type }, i) in columns" :key="i">
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
            <button @click="$emit('onEdit', item[prop] || item)">
              Edit
            </button>
            <button @click="$emit('onDelete', item[prop] || item)">
              Delete
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
import { TableColumn } from "./table-builder";

export default defineComponent({
  name: "UTableBuilder",
  props: {
    columns: {
      type: Array as PropType<TableColumn[]>,
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
