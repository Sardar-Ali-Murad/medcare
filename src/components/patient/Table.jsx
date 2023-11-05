"use client";
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import "../home/index.css"
import data  from "./data"

//nested data is ok, see accessorKeys in ColumnDef below
// const data = [
//   {
//     name: {
//       firstName: "John",
//       lastName: "Doe",
//     },
//     address: "261 Erdman Ford",
//     city: "Multan",
//     state: "Punjab",
//   },
//   {
//     name: {
//       firstName: "Jane",
//       lastName: "Doe",
//     },
//     address: "769 Dominic Grove",
//     city: "Columbus",
//     state: "Ohio",
//   },
//   {
//     name: {
//       firstName: "Joe",
//       lastName: "Doe",
//     },
//     address: "566 Brakus Inlet",
//     city: "South Linda",
//     state: "West Virginia",
//   },
//   {
//     name: {
//       firstName: "Kevin",
//       lastName: "Vandy",
//     },
//     address: "722 Emie Stream",
//     city: "Lincoln",
//     state: "Nebraska",
//   },
//   {
//     name: {
//       firstName: "Joshua",
//       lastName: "Rolluffs",
//     },
//     address: "32188 Larkin Turnpike",
//     city: "Charleston",
//     state: "South Carolina",
//   },
// ];

const Table = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "city",
        header: "City",
        size: 150,
      },
      {
        accessorKey: "country", //normal accessorKey
        header: "Country",
        size: 200,
      },
      {
        accessorKey: "group",
        header: "Blood Group",
        size: 150,
      },
      {
        accessorKey: "province",
        header: "State",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 150,
      },
      // {
      //   accessorKey: "phoneNo",
      //   header: "Phone",
      //   size: 150,
      // },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return (
    <div className="py-[2rem] px-[9%] min-h-full">
      <div className="row">
      <h1 class="heading">
          <span>FOUND YOUR POSSIBLE</span> DONAR
        </h1>
      <MaterialReactTable table={table} />;
      </div>
    </div>
  );
};

export default Table;
