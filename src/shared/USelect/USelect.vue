<template>
  <label>
    {{ t(label) }}
    <select :value="inputValue" v-on="validationListeners">
      <option
        v-for="option in options"
        :key="option[optionKey] || option"
        :value="option[optionKey] || option"
      >
        {{ option[optionLabel] || option }}
      </option>
    </select>
    <p v-show="errorMessage">{{ errorMessage }}</p>
  </label>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";
import { defineComponent, PropType } from "vue";
import { useField } from "vee-validate";
import createValidationListeners from "@/utils/validation-listeners";

export default defineComponent({
  name: "USelect",
  props: {
    label: {
      type: String,
    },
    prop: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    },
    options: {
      type: Array as PropType<any[]>,
      required: true,
    },
    optionKey: {
      type: String,
    },
    optionLabel: {
      type: String,
    },
  },
  setup(props) {
    // i18n
    const { t } = useI18n({ useScope: "global" });

    // Declare component as a form field
    const { value: inputValue, errorMessage, handleChange } = useField(
      props.prop,
      undefined,
      {
        type: "select",
        initialValue: props.value,
        validateOnValueUpdate: false,
      }
    );

    // Declare validation behaviour
    const validationListeners = createValidationListeners(
      errorMessage,
      handleChange
    );

    return {
      t,
      inputValue,
      errorMessage,
      validationListeners,
    };
  },
});
</script>

<style lang="scss">
@import "style";
</style>
