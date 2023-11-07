"use client";
import React from "react";
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import "../home/index.css"
import axios from "axios";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Table = () => {
  let [loading,setLoading]=React.useState(false)
  let [data,setData]=React.useState([])
  React.useEffect(()=>{
    const getDonars=async ()=>{
      setLoading(true)
      try {
        let {data}=await axios.get("https://medicare-nodejs.vercel.app/api/v1/donar")
        setData(data?.donars.filter((all)=>all?.isVerified===true))
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    getDonars()
  },[])

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
        accessorKey: "state",
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
    <div className="py-[2rem] px-[9%] min-h-[80vh]">
      <div className="row ">
      <h1 class="heading">
          <span>FOUND YOUR POSSIBLE</span> DONAR
        </h1>
        {loading?
          <Skeleton />:
          <MaterialReactTable table={table} />
        }
      </div>
    </div>
  );
};

export default Table;
