// import { CreditsDropdown } from "@shared";
// import InfiniteDropdown, { OptionType } from "@shared/components/Dropdown";
// import CustomInput from "@shared/components/Input";
// import { useState } from "react";
// import axios from "axios";

// // Create Category API function
// const createCategory = async (data: {
//   name: string;
// }): Promise<{ id: string }> => {
//   try {
//     const response = await axios.post(
//       "https://api.salesbot.cloud/core/product_category/",
//       data
//     );

//     // Adjust this based on your API response structure
//     return {
//       id:
//         response.data.id ||
//         response.data.data?.id ||
//         response.data.category?.id,
//     };
//   } catch (error) {
//     console.error("Error creating category:", error);
//     throw error;
//   }
// };

// function Dashboard() {
//   const [country, setCountry] = useState<OptionType | null>(null);
//   const [category, setCategory] = useState<OptionType | null>(null);

//   return (
//     <>
//       <CreditsDropdown />

//       <CustomInput formLabel="Name" required placeholder="Enter Name" />
//       <CustomInput formLabel="Last Name" />

//       <InfiniteDropdown
//         formLabel="Country"
//         placeholder="Select Country"
//         apiUrl="https://api.salesbot.cloud/onboard/state/fetch_all"
//         value={country}
//         onChange={setCountry}
//         isCreatable
//         onCreate={async (value) => {
//           return createCategory({ name: value });
//         }}
//         isRequired
//       />
//     </>
//   );
// }

// export default Dashboard;

import { CreditsDropdown } from "@shared";
import InfiniteDropdown, { OptionType } from "@shared/components/Dropdown";
import CustomInput from "@shared/components/Input";
import axios from "axios";
import { useState } from "react";

function Dashboard() {
  const [categoryLookUp, setCategoryLookUp] = useState<OptionType | null>(null);

  // Create category function - returns the full axios response
  const createCategory = async (data: { name: string }) => {
    const response = await axios.post(
      "https://api.salesbot.cloud/core/product_category/",
      data
    );
    console.log("🚀 ~ createCategory ~ response:", response);
    return response; // Return the full response, not just { id }
  };

  return (
    <>
      <CreditsDropdown />

      <CustomInput formLabel="Name" required placeholder="Enter Name" />
      <CustomInput formLabel="Last Name" />

      <InfiniteDropdown
        formLabel="Category"
        placeholder="Create or Select Category"
        apiUrl="https://api.salesbot.cloud/onboard/state/fetch_all"
        value={categoryLookUp}
        onChange={(option) => {
          if (option) {
            setCategoryLookUp(option as OptionType);
          } else {
            setCategoryLookUp(null);
          }
        }}
        isCreatable={true}
        onCreate={(value) => {
          console.log("🚀 ~ Dashboard ~ value:", value);
          return createCategory({ name: value });
        }}
        isRequired={true}
        pageSize={10}
        mapResponseToOptions={(res) =>
          res.data.data?.map((item: any) => ({
            Id: item.id || item.value,
            Value: item.name || item.label,
          })) || []
        }
      />
    </>
  );
}

export default Dashboard;
