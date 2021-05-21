import { defineRule } from "vee-validate";
import i18n from "@/i18n";

export default (): void => {
  const { t } = i18n.global;
  defineRule("required", (value: string) => {
    if (!value || !value.length) {
      return t("validation.required");
    }
    return true;
  });

  defineRule("min", (value: string, [limit]: number[]) => {
    if (!value || !value.length) {
      return true;
    }

    if (value.length < limit) {
      return t("validation.min", { limit });
    }

    return true;
  });

  defineRule("max", (value: string, [limit]: number[]) => {
    if (!value || !value.length) {
      return true;
    }

    if (value.length > limit) {
      return t("validation.max", { limit });
    }

    return true;
  });
};
