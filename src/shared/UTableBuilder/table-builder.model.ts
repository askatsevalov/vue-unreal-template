export default interface TableBuilderConfig {
  columns: TableColumn[];
}

interface TableColumn {
  type: string;
  sortable?: boolean;
  prop?: string;
  label?: string;
  props?: TableColumnProperties;
}

type TableColumnProperties =
  | TableColumnTagProperties
  | TableColumnActionsProperties;

interface TableColumnTagProperties {
  variant: string;
}

interface TableColumnActionsProperties {
  actions: {
    icon: string;
    variant?: string;
    callback(value: any): Promise<void>;
  }[];
}
