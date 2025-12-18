
export type FilterValue =
  | string
  | number
  | boolean
  | (string | number)[];

export interface FilterItem {
  field: string;
  operator: string;
  value?: FilterValue;
}

export interface FilterModel {
  items: FilterItem[];
}


export interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
  onApply: () => void;
  title?: string;
  placement?: "left" | "right" | "top" | "bottom";
  width?: number;
  columns: GridColumns[];
  filterModel?: any;
  onChangeFilter: (model: any) => void;
  // onChangeFilter?: any;
  onClear: () => void;
}

// ================ Types ================
export type DataType = "string" | "number" | "date" | "boolean";


export interface ErrorState {
  column: string;
  operator: string;
  value: string;
  range: string;
}


export interface ColumnFilterOperator {
  label: string;
  value: string;
}


export interface GridColumns {
  field: string;
  headerName: string;
  flex?: number;
  minWidth?: number;
  maxWidth?: number;
  sortable?: boolean;
  filterable?: boolean;
  disableColumnMenu?: boolean;
  dataType?: "string" | "number" | "date" | "boolean";
  filterOperators?: ColumnFilterOperator[];
}
