import React, { useState } from "react";
import FilterDrawer from './../../node_modules/@my-monorepo/shared/src/components/overlay/FilterDrawer/index';
import { FilterModel, GridColumns } from './../../node_modules/@my-monorepo/shared/src/components/overlay/FilterDrawer/type';


  export const columnss = [
    {
      headerName: "#",
      flex: 1,
      field: "srNo",
      minWidth: 50,
      maxWidth: 80,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
    },
    {
      field: "name",
      headerName: "Product Name",
      flex: 3,
      minWidth: 150,
      filterOperators: [
        {
          label: "Contains",
          value: "contains",
        },
        {
          label: "Equals",
          value: "equal",
        },
        {
          label: "Not Equals",
          value: "not_equal",
        },
        {
          label: "Starts With",
          value: "begins_with",
        },
        {
          label: "Ends With",
          value: "ends_with",
        },
      ],
    },
    {
      field: "created_at",
      headerName: "Created Date",
      flex: 1,
      minWidth: 200,
      dataType: "date",
      filterOperators: [
        {
          label: "Before",
          value: "less",
        },
        {
          label: "Before or Equal",
          value: "less_or_equal",
        },
        {
          label: "After",
          value: "greater",
        },
        {
          label: "After or Equal",
          value: "greater_or_equal",
        },
        {
          label: "Between",
          value: "between",
        },
        {
          label: "Not Between",
          value: "not_between",
        },
      ],
    },
    {
      field: "category__name",
      headerName: "Category",
      flex: 3,
      minWidth: 150,
      filterOperators: [
        {
          label: "Contains",
          value: "contains",
        },
        {
          label: "Equals",
          value: "equal",
        },
        {
          label: "Not Equals",
          value: "not_equal",
        },
        {
          label: "Starts With",
          value: "begins_with",
        },
        {
          label: "Ends With",
          value: "ends_with",
        },
      ],
    },
    {
      field: "description",
      headerName: "Description",
      flex: 3,
      minWidth: 150,
      filterable: false,
    },
    {
      field: "kb_article_name",
      headerName: "KB Article",
      flex: 3,
      minWidth: 150,
      filterOperators: [
        {
          label: "Contains",
          value: "contains",
        },
        {
          label: "Equals",
          value: "equal",
        },
        {
          label: "Not Equals",
          value: "not_equal",
        },
        {
          label: "Starts With",
          value: "begins_with",
        },
        {
          label: "Ends With",
          value: "ends_with",
        },
      ],
    },
    {
      field: "created_at",
      headerName: "Created Date",
      flex: 3,
      minWidth: 150,
      dataType: "date",
      filterOperators: [
        {
          label: "Before",
          value: "less",
        },
        {
          label: "Before or Equal",
          value: "less_or_equal",
        },
        {
          label: "After",
          value: "greater",
        },
        {
          label: "After or Equal",
          value: "greater_or_equal",
        },
        {
          label: "Between",
          value: "between",
        },
        {
          label: "Not Between",
          value: "not_between",
        },
      ],
    },
    {
      field: "id",
      headerName: "Actions",
      flex: 1,
      minWidth: 150,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
    },
  ];

 export const columns : GridColumns[]= [
    {
      headerName: "#",
      flex: 1,
      field: "srNo",
      minWidth: 50,
      maxWidth: 80,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 200,
      filterOperators: [
        {
          label: "Contains",
          value: "contains",
        },
        {
          label: "Equals",
          value: "equal",
        },
        {
          label: "Not Equals",
          value: "not_equal",
        },
        {
          label: "Starts With",
          value: "begins_with",
        },
        {
          label: "Ends With",
          value: "ends_with",
        },
      ],
    },
    {
      field: "products__name",
      headerName: "Products",
      flex: 1,
      minWidth: 200,
      filterOperators: [
        {
          label: "Contains",
          value: "contains",
        },
        {
          label: "Equals",
          value: "equal",
        },
        {
          label: "Not Equals",
          value: "not_equal",
        },
        {
          label: "Starts With",
          value: "begins_with",
        },
        {
          label: "Ends With",
          value: "ends_with",
        },
      ],
    },
    {
      field: "etlstatus",
      headerName: "Status",
      flex: 1,
      minWidth: 200,
      filterable: false,
    },
    {
      field: "created_at",
      headerName: "Created Date",
      flex: 1,
      minWidth: 200,
      dataType: "date",
      filterOperators: [
        {
          label: "Before",
          value: "less",
        },
        {
          label: "Before or Equal",
          value: "less_or_equal",
        },
        {
          label: "After",
          value: "greater",
        },
        {
          label: "After or Equal",
          value: "greater_or_equal",
        },
        {
          label: "Between",
          value: "between",
        },
        {
          label: "Not Between",
          value: "not_between",
        },
      ],
    },
    {
      field: "Actions",
      headerName: "Actions",
      flex: 0.7,
      minWidth: 150,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
    },
  ];

const DemoFilterDrawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button
        className="border m-10 p-5 cursor-pointer bg-blue-500 hover:bg-blue-700 rounded"
        onClick={showDrawer}
      >
        Open Filter Drawer
      </button>
      <FilterDrawer
        onClear={() => console.log("Clear Filter")}
        open={open}
        onClose={() => setOpen(false)}
        onApply={() => {
          console.log("Apply Filter");
          setOpen(false);
        }}
        onChangeFilter={(newModel: FilterModel) => console.log(newModel)}
        columns={columns}
      />
    </>
  );
};

export default DemoFilterDrawer;
