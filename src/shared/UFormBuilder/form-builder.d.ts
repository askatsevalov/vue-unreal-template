import { CrudRepository } from "@/api/interfaces/crud-repository";
export interface FormBuilderConfig {
  fields: FormField[];
  rules?: any;
  submit: SubmitOptions;
}

interface FormField {
  // Common
  type: string;
  prop: string;
  label: string;
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
  prop: string;
  invert?: boolean;
}

interface SubmitOptions {
  repository: CrudRepository;
  method: string;
}