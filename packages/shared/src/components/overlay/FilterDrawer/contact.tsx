
export enum FilterOperator {
  Equal = "equal",
  NotEqual = "not_equal",
  Less = "less",
  LessOrEqual = "less_or_equal",
  Greater = "greater",
  GreaterOrEqual = "greater_or_equal",
  In = "in",
  NotIn = "not_in",
  Between = "between",
  NotBetween = "not_between",
  Contains = "contains",
  BeginsWith = "begins_with",
  EndsWith = "ends_with",
  IsNull = "is_null",
  IsNotNull = "is_not_null",
}

export enum FilterOperator {
  AND = "AND",
  OR = "OR",
}
// ✅ Centralized Operator Map
export const OPERATOR_MAP: Record<string, { label: string; value: string }[]> =
  {
    string: [
      { label: "Equals", value: FilterOperator.Equal },
      { label: "Not Equals", value: FilterOperator.NotEqual },
      { label: "Contains", value: FilterOperator.Contains },
      { label: "Begins With", value: FilterOperator.BeginsWith },
      { label: "Ends With", value: FilterOperator.EndsWith },
    ],
    number: [
      { label: "Equals", value: FilterOperator.Equal },
      { label: "Not Equals", value: FilterOperator.NotEqual },
      { label: "Less Than", value: FilterOperator.Less },
      { label: "Less or Equal", value: FilterOperator.LessOrEqual },
      { label: "Greater Than", value: FilterOperator.Greater },
      { label: "Greater or Equal", value: FilterOperator.GreaterOrEqual },
      { label: "Between", value: FilterOperator.Between },
      { label: "Not Between", value: FilterOperator.NotBetween },
    ],
    date: [
      { label: "Equals", value: FilterOperator.Equal },
      { label: "Not Equals", value: FilterOperator.NotEqual },
      { label: "Before", value: FilterOperator.Less },
      { label: "Before or On", value: FilterOperator.LessOrEqual },
      { label: "After", value: FilterOperator.Greater },
      { label: "After or On", value: FilterOperator.GreaterOrEqual },
      { label: "Between", value: FilterOperator.Between },
      { label: "Not Between", value: FilterOperator.NotBetween },
    ],
    boolean: [
      { label: "Is", value: "is" },
      { label: "Is Not", value: "is_not" },
    ],
  };