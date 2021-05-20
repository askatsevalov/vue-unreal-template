<template>
  <div class="hello">
    <LanguageSelector />
    <h1>{{ t(msg) }}</h1>
    <button @click="success">success toast</button>
    <button @click="warning">warning toast</button>
    <button @click="info">info toast</button>
    <button @click="error">error toast</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import LanguageSelector from "@/components/LanguageSelector/LanguageSelector.vue";
import $toast from "@/services/toast";

export default defineComponent({
  name: "HelloWorld",
  components: { LanguageSelector },
  props: {
    msg: String,
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });

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

    return { t, success, warning, info, error };
  },
});
</script>

<style scoped lang="scss">
@import "style";
</style>
