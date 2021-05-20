<template>
  <div class="form-builder">
    <div class="field" v-for="(field, i) in config.fields" :key="i">
      <!-- REPLACE NEXT CONTROLS WITH YOUR OWN COMPONENTS -->
      <label
        v-show="!field.hide || field.hide.invert == localItem[field.hide.key]"
      >
        {{ t(field.label) }}
        <input
          v-if="field.type === 'input'"
          v-model="localItem[field.key]"
          :placeholder="t(field.placeholder)"
        />
        <input
          v-if="field.type === 'checkbox'"
          type="checkbox"
          v-model="localItem[field.key]"
        />
        <select v-if="field.type === 'select'" v-model="localItem[field.key]">
          <option
            v-for="option in field.options"
            :key="option[field.optionKey]"
          >
            {{ option[field.optionLabel] }}
          </option>
        </select>
        <textarea
          v-if="field.type === 'textarea'"
          v-model="localItem[field.key]"
          :placeholder="t(field.placeholder)"
          :rows="field.textareaRows"
        />
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";
import { defineComponent, PropType, ref } from "vue";
import { FormBuilderConfig } from "./form-builder";

export default defineComponent({
  name: "FormBuilder",
  props: {
    config: {
      type: Object as PropType<FormBuilderConfig>,
      required: true,
    },
    item: {
      type: Object as PropType<any>,
      required: true,
    },
  },
  emits: ["update:item", "update:config"],
  setup(props) {
    // i18n
    const { t } = useI18n({ useScope: "global" });

    const localItem = ref(props.item);

    return { t, localItem };
  },
});
</script>

<style lang="scss">
@import "style";
</style>
