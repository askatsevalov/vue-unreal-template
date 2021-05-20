<template>
  <select v-model="locale">
    <option v-for="(option, i) in locales" :key="i" :value="option">
      {{ localeCodeToName(option) }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";
import localeCodeToName from "@/pipes/locale-code-to-name";

export default defineComponent({
  name: "LanguageSelector",
  setup() {
    const { locale } = useI18n({ useScope: "global" });
    const locales = ref(process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(","));

    return { locales, locale, localeCodeToName };
  },
});
</script>

<style scoped lang="scss">
@import "style";
</style>
