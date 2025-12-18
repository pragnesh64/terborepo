import CreditsDropdown from "@shared/components/overlay/CreditsDropdown";
import CustomInput from "@shared/components/form/Input";

import { useAlert } from "@shared/context";
import { useEffect, useState } from "react";
import FilterDrawer from './../../node_modules/@my-monorepo/shared/src/components/overlay/FilterDrawer';

function Dashboard() {
  // const [categoryLookUp, setCategoryLookUp] = useState<OptionType | null>(null);

  // const createCategory = async (data: { name: string }) => {
  //   const response = await axios.post(
  //     "https://api.salesbot.cloud/core/product_category/",
  //     data
  //   );
  //   return response;
  // };

  const showAlert = useAlert();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  //   const [selectedCountry, setSelectedCountry] = useState<optionType | null>(
  //     null
  //   );

  //   const countryOptions: optionType[] = [
  //     { Id: "1", Value: "India" },
  //     { Id: "2", Value: "Canada" },
  //     { Id: "3", Value: "Australia" },
  //     { Id: "4", Value: "Germany" },
  //   ];

  useEffect(() => {
    showAlert("No changes detected", "info");
  }, []);
  return (
    <>
      <button className="border m-10 p-5 cursor-pointer bg-blue-500 hover:bg-blue-700 rounded" onClick={showDrawer}>Open Filter Drawer</button>
      <FilterDrawer
        open={open}
        onClose={() => setOpen(false)}
        onApply={() => {
          console.log("Apply Filter");
          setOpen(false);
        }}
      />
      {/* <Box sx={{ width: 320, mb: 4 }}>
        <Dropdown
          formLabel="Country"
          placeholder="Select country"
          value={selectedCountry}
          onChange={(e, v) => setSelectedCountry(v)}
          options={countryOptions}
          isCreatable
        />
      </Box> */}

      <CustomInput formLabel="Name" required placeholder="Enter Name" />
      <CustomInput formLabel="Last Name" placeholder="Last Name" />

      {/* <Dropdown
        formLabel="Category"
        placeholder="Create or Select Category"
        apiUrl="https://api.salesbot.cloud/onboard/state/fetch_all"
        value={categoryLookUp}
        client={AuthClient}
        onChange={(option) => {
          if (option) {
            setCategoryLookUp(option as OptionType);
          } else {
            setCategoryLookUp(null);
          }
        }}
        isCreatable={true}
        onCreate={(value) => createCategory({ name: value })}
        isRequired={true}
        pageSize={10}
        mapResponseToOptions={(res) =>
          res.data.data?.map((item: any) => ({
            Id: item.id || item.value,
            Value: item.name || item.label,
          })) || []
        }
      /> */}
    </>
  );
}

export default Dashboard;
