<template>
  <div class="hello">
    <LanguageSelector />
    <h1>{{ t(msg) }}</h1>
    <p>
      <button @click="success">success toast</button>
      <button @click="warning">warning toast</button>
      <button @click="info">info toast</button>
      <button @click="error">error toast</button>
    </p>
    <p>
      <UFormBuilder v-model:config="formConfig" v-model:item="person" />
    </p>
    <div>
      <h3>Person:</h3>
      <p>Name: {{ person.name }}</p>
      <p>Gender: {{ person.gender }}</p>
      <p>Description: {{ person.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";
import LanguageSelector from "@/components/LanguageSelector/LanguageSelector.vue";
import $toast from "@/services/toast";
import { FormBuilderConfig } from "@/shared/UFormBuilder/form-builder";

export default defineComponent({
  name: "HelloWorld",
  components: { LanguageSelector },
  props: {
    msg: String,
  },
  setup() {
    // i18n
    const { t } = useI18n({ useScope: "global" });

    // Toast methods
    function success(): void {
      $toast.success("Success");
    }
    function warning(): void {
      $toast.warning("Warning");
    }
    function info(): void {
      $toast.info("Info");
    }
    function error(): void {
      $toast.error("Error");
    }

    // Form Builder model
    const person = ref({
      name: "John Trevor",
      gender: "M",
      description: "A very handsome young man",
      hasGender: true,
    });

    // Form Builder config
    const formConfig = ref<FormBuilderConfig>({
      fields: [
        {
          type: "input",
          key: "name",
          label: "person-form.name",
          placeholder: "person-form.name-placeholder",
        },
        {
          type: "textarea",
          key: "description",
          label: "person-form.description",
          placeholder: "person-form.description-placeholder",
        },
        {
          type: "select",
          key: "gender",
          label: "person-form.gender",
          options: [
            {
              id: 1,
              name: "M",
            },
            {
              id: 2,
              name: "F",
            },
          ],
          optionKey: "id",
          optionLabel: "name",
          hide: {
            key: "hasGender",
            invert: true,
          },
        },
        {
          type: "checkbox",
          key: "hasGender",
          label: "person-form.has-gender",
        },
      ],
    });

    return {
      t,
      success,
      warning,
      info,
      error,
      formConfig,
      person,
    };
  },
});
</script>

<style scoped lang="scss">
@import "style";
</style>
