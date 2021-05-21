<template>
  <form class="form-builder" @submit="onSubmit">
    <div class="toolbar">
      <button type="submit" :disabled="isSubmitting">
        {{ t("common.save") }}
      </button>
    </div>
    <div class="fields">
      <div class="field" v-for="(field, i) in config.fields" :key="i">
        <UInput
          v-if="field.type === 'input'"
          :prop="field.prop"
          :label="field.label"
        />
        <USelect
          v-if="field.type === 'select'"
          :prop="field.prop"
          :label="field.label"
          :options="field.options"
          :optionKey="field.optionKey"
          :optionLabel="field.optionLabel"
        />
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";
import { defineComponent, PropType, toRefs } from "vue";
import { FormBuilderConfig } from "./form-builder";
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
  emits: ["update:item", "submited"],
  setup(props, { emit }) {
    // i18n
    const { t } = useI18n({ useScope: "global" });

    // Extract initial item value from props
    const { item } = toRefs(props);

    // Create a form context with the validation schema and initial value
    const { handleSubmit, isSubmitting } = useForm({
      validationSchema: props.config.rules,
      initialValues: item,
    });

    // Form submit action
    const onSubmit = handleSubmit(async (item) => {
      const { repository, method } = props.config.submit;
      try {
        if (method.toLowerCase() === "post") {
          await repository.post(item);
        } else if (method.toLowerCase() === "put") {
          const { id } = item;
          await repository.put(id, item);
        }
        emit("submited");
      } catch (err) {
        console.error(err);
      }
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
