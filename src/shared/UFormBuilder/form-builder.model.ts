import ToolbarConfig from "../UToolbar/toolbar.model";
export interface FormBuilderConfig {
  fields: FormField[];
  rules?: { [k: string]: string };
  toolbar: ToolbarConfig;
  submitAction: (item: any) => Promise<void>;
}

interface FormField {
  type: string;
  props: FieldProperties;
}

type FieldProperties = FieldBaseProperties &
  (FieldSelectProperties | FieldTextareaProperties);

interface FieldBaseProperties {
  prop: string;
  label: string;
}

interface FieldSelectProperties {
  options: any[];
  optionKey?: string | number;
  optionLabel?: string;
}

interface FieldTextareaProperties {
  textareaRows?: number;
}
