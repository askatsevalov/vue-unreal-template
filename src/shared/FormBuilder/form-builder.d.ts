export interface FormBuilderConfig {
  fields: FormField[];
}

interface FormField {
  // Common
  type: string;
  key: string;
  label: string;
  placeholder?: string;
  validate?: string | string[] | ((value: any) => Promise<string>);
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
