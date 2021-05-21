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
      <UFormBuilder
        v-model:item="organization"
        :config="formConfig"
        @submited="submited"
      />
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";
import LanguageSelector from "@/components/LanguageSelector/LanguageSelector.vue";
import $toast from "@/services/toast";
import { FormBuilderConfig } from "@/shared/UFormBuilder/form-builder";
import http from "@/services/http";
import OrganizationDto from "@/api/dto/organization";

export default defineComponent({
  name: "HelloWorld",
  components: { LanguageSelector },
  props: {
    msg: String,
  },
  setup() {
    // i18n
    const { t } = useI18n({ useScope: "global" });

    //#region Toast methods
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
    //#endregion

    // #region Form Builder
    // Form model
    const organization = ref<OrganizationDto>({
      id: null,
      name: "Inter ID",
      address: "Ул. Волкова, д. 19",
      type: "1",
    });

    // Form Builder config
    const formConfig = ref<FormBuilderConfig>({
      fields: [
        {
          type: "input",
          prop: "name",
          label: "organization-form.name",
        },
        {
          type: "input",
          prop: "address",
          label: "organization-form.address",
        },
        {
          type: "select",
          prop: "type",
          label: "organization-form.type",
          options: [
            {
              id: "1",
              name: "Внутренняя",
            },
            {
              id: "2",
              name: "Внешняя",
            },
          ],
          optionKey: "id",
          optionLabel: "name",
        },
      ],
      rules: {
        name: "required|min:7|max:12",
      },
      submit: {
        repository: http.organization,
        method: "post",
      },
    });

    // After submit action
    function submited() {
      console.log("organization submited");
    }
    //#endregion

    return {
      t,
      success,
      warning,
      info,
      error,
      formConfig,
      organization,
      submited,
    };
  },
});
</script>

<style scoped lang="scss">
@import "style";
</style>
