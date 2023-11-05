"use client";
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import "../home/index.css"
import data  from "./data"


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
