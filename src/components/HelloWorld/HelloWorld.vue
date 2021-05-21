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
        :item="organization"
        :config="formConfig"
        @onSubmit="submit"
      />
    </p>
    <p>
      <UTableBuilder
        :data="organizations"
        :columns="tableColumns"
        @onDelete="remove"
        @onEdit="edit"
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
import { TableColumn } from "@/shared/UTableBuilder/table-builder";

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
      typeId: "1",
    });

    // Form Builder config
    const formConfig = ref<FormBuilderConfig>({
      fields: [
        {
          type: "input",
          prop: "name",
          label: "dto.organization.name",
        },
        {
          type: "input",
          prop: "address",
          label: "dto.organization.address",
        },
        {
          type: "select",
          prop: "typeId",
          label: "dto.organization.type",
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
    });

    // Submit action
    function submit(item: OrganizationDto) {
      console.log("🚀 > item", item);
      http.organization.post(item);
    }
    //#endregion

    //#region Table Builder
    // Table data
    const organizations = ref<OrganizationDto[]>([
      {
        id: 1,
        name: "Inter ID",
        address: "Ул. Волкова, д. 19",
        typeId: "1",
        type: "Внутренняя",
      },
      {
        id: 2,
        name: "ООО Солнце",
        address: "Ул. Лисьева, д. 20",
        typeId: "1",
        type: "Внутренняя",
      },
      {
        id: 3,
        name: "АО КАМАЗ",
        address: "Ул. Зайцева, д. 18",
        typeId: "2",
        type: "Внешняя",
      },
    ]);

    const tableColumns = ref<TableColumn[]>([
      {
        type: "text",
        prop: "name",
        label: "dto.organization.name",
      },
      {
        type: "text",
        prop: "address",
        label: "dto.organization.address",
      },
      {
        type: "tag",
        prop: "type",
        label: "dto.organization.type",
      },
      {
        type: "actions",
        prop: "id",
      },
    ]);

    function edit(id: string | number) {
      console.log("open edit organization page with id ", id);
    }

    async function remove(id: string | number) {
      await http.organization.delete(id);
      console.log("removed");
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
      submit,
      organizations,
      tableColumns,
      remove,
      edit,
    };
  },
});
</script>

<style scoped lang="scss">
@import "style";
</style>
