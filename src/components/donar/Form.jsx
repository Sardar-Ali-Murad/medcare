"use client";
import React from "react";
import "../../components/home/index.css";
import { provinces, cities, bloodGroups } from "./data";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Donar = () => {
  let [obj, setObj] = React.useState({
    country: "",
    group: "",
    state: "",
    city: "",
    name: "",
    number: "",
    email: "",
    date: "",
  });

  function handleChange(event) {
    setObj((pre) => {
      return {
        ...pre,
        [event.target.name]: event.target.value,
      };
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://medicare-nodejs.vercel.app/api/v1/donar", obj);
      toast.success("We have received your information. We will confirm it first before addding it to the listing!", {
        autoClose: 10000,
      });
      setObj({
        country: "",
        group: "",
        state: "",
        city: "",
        name: "",
        number: "",
        email: "",
        date: "",
      });
    } catch (error) {
      toast.error(error?.response?.data?.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      <section class="book" id="book">
        <h1 class="heading">
          <span>BECOME A</span> DONAR
        </h1>

        <div class="row">
          <form onSubmit={(event) => handleSubmit(event)}>
            <h3 className="text-[25px] text-gray-900">Save A Life</h3>
            <select
              id="countries"
              name="country"
              value={obj?.country}
              onChange={(event) => handleChange(event)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 box dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected className="font-[20px]">
                Choose a country
              </option>
              <option value="Pakistan" className="font-[20px]">
                Pakistan
              </option>
            </select>

            <select
              name="group"
              value={obj?.group}
              onChange={(event) => handleChange(event)}
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 box dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected className="font-[20px]">
                Choose a Blood group
              </option>
              {bloodGroups?.map((item) => {
                return (
                  <option value={item} className="font-[20px]">
                    {item}
                  </option>
                );
              })}
            </select>

            <select
              id="countries"
              name="state"
              value={obj?.state}
              onChange={(event) => handleChange(event)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 box dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected className="font-[20px]">
                Choose a Blood Province
              </option>
              {provinces?.map((item) => {
                return (
                  <option value={item} className="font-[20px]">
                    {item}
                  </option>
                );
              })}
            </select>
            <select
              name="city"
              value={obj?.city}
              onChange={(event) => handleChange(event)}
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 box dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected className="font-[20px]">
                Choose a City
              </option>
              {cities?.map((item) => {
                return (
                  <option value={item} className="font-[20px]">
                    {item}
                  </option>
                );
              })}
            </select>
            <input
              type="text"
              placeholder="your name"
              class="box"
              name="name"
              value={obj?.name}
              onChange={(event) => handleChange(event)}
            />
            <input
              type="string"
              placeholder="your number"
              class="box"
              name="number"
              value={obj?.number}
              onChange={(event) => handleChange(event)}
            />
            <input
              type="email"
              placeholder="your email"
              class="box"
              name="email"
              value={obj?.email}
              onChange={(event) => handleChange(event)}
            />
            <input
              type="date"
              class="box"
              name="date"
              value={obj?.date}
              onChange={(event) => handleChange(event)}
            />

            <input type="submit" value="Save" class="btn" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Donar;
