<template>
  <label>
    {{ t(label) }}
    <input :value="inputValue" v-on="validationListeners" />
    <p v-show="errorMessage">{{ errorMessage }}</p>
  </label>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";
import { defineComponent } from "vue";
import { useField } from "vee-validate";
import createValidationListeners from "@/utils/validation-listeners";

export default defineComponent({
  name: "UInput",
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
  },
  setup(props) {
    // i18n
    const { t } = useI18n({ useScope: "global" });

    // Declare component as a form field
    const { value: inputValue, errorMessage, handleChange } = useField(
      props.prop,
      undefined,
      {
        initialValue: props.value,
        validateOnValueUpdate: false,
      }
    );

    // Declare validation behaviour
    const validationListeners = createValidationListeners(
      errorMessage,
      handleChange
    );

    return { t, inputValue, errorMessage, validationListeners };
  },
});
</script>

<style lang="scss">
@import "style";
</style>
