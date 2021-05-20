export interface FormBuilderConfig {
  fields: FormField[];
  validation?: any;
}

interface FormField {
  // Common
  type: string;
  key: string;
  label: string;
  placeholder?: string;
  hide?: HideOptions;

  // Select
  options?: any[];
  optionKey?: string | number;
  optionLabel?: string;

  // Textarea
  textareaRows?: number;

  //Checkbox
}

interface HideOptions {
  key: string;
  invert?: boolean;
}
