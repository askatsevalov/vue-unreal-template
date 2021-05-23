<template>
  <form class="form-builder" @submit="onSubmit">
    <UPanel>
      <template #header>
        <UToolbar class="toolbar" :config="config.toolbar"></UToolbar>
      </template>
      <div class="field" v-for="(field, i) in config.fields" :key="i">
        <component :is="field.type" v-bind="field.props" />
      </div>
    </UPanel>
  </form>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";
import { defineComponent, PropType, toRefs } from "vue";
import { FormBuilderConfig } from "./form-builder.model";
import { useForm } from "vee-validate";

export default defineComponent({
  name: "UFormBuilder",
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
  setup(props) {
    // i18n
    const { t } = useI18n({ useScope: "global" });

    // Extract initial item value from props
    const { item: initialValues } = toRefs(props);

    // Create a form context with the validation schema and initial value
    const { handleSubmit, isSubmitting } = useForm({
      validationSchema: props.config.rules,
      initialValues,
    });

    // Form submit action after validation
    const onSubmit = handleSubmit(async (item) => {
      await props.config.submitAction(item);
    });

    return {
      t,
      onSubmit,
      isSubmitting,
    };
  },
});
</script>

<style lang="scss">
@import "style";
</style>
