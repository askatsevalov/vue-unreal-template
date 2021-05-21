import { ComputedRef, computed } from "vue";

export default (
  errorMessage: ComputedRef<string | undefined>,
  handleChange: (e: unknown, shouldValidate?: boolean | undefined) => void
): ComputedRef<{
  blur: (e: unknown, shouldValidate?: boolean | undefined) => void;
  change: (e: unknown, shouldValidate?: boolean | undefined) => void;
  input: (e: unknown, shouldValidate?: boolean | undefined) => void;
}> =>
  computed(() => {
    if (!errorMessage.value) {
      return {
        blur: handleChange,
        change: handleChange,
        input: (e: unknown) => handleChange(e, false),
      };
    }

    return {
      blur: handleChange,
      change: handleChange,
      input: handleChange,
    };
  });
