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
      <UFormBuilder :item="organization" :config="formConfig" />
    </p>
    <p>
      <UTableBuilder
        :data="organizations"
        :config="tableConfig"
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
import http from "@/services/http";

import TableBuilderConfig from "@/shared/UTableBuilder/table-builder.model";
import { FormBuilderConfig } from "@/shared/UFormBuilder/form-builder.model";

import OrganizationDto from "@/api/dto/organization";

export default defineComponent({
  name: "OrganizationsDemo",
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
          type: "UInput",
          props: {
            prop: "name",
            label: "dto.organization.name",
          },
        },
        {
          type: "UInput",
          props: {
            prop: "address",
            label: "dto.organization.address",
          },
        },
        {
          type: "USelect",
          props: {
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
        },
      ],
      rules: {
        name: "required|min:5|max:12",
      },
      toolbar: {
        controls: {
          left: [
            {
              type: "button",
              props: {
                type: "submit",
                text: "common.save",
                callback() {
                  console.log("after submit");
                },
              },
            },
          ],
          right: [],
        },
      },
      async submitAction(item: OrganizationDto) {
        console.log("🚀 > item", item);
        await http.organization.post(item);
      },
    });
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

    const tableConfig = ref<TableBuilderConfig>({
      columns: [
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
          props: {
            actions: [
              {
                icon: "alert",
                async callback(id: string) {
                  await http.organization.delete(id);
                },
              },
            ],
          },
        },
      ],
    });
    //#endregion

    return {
      t,
      success,
      warning,
      info,
      error,
      formConfig,
      organization,
      organizations,
      tableConfig,
    };
  },
});
</script>

<style scoped lang="scss">
@import "style";
</style>
