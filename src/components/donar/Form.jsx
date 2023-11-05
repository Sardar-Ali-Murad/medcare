"use client"
import React from "react";
import "../../components/home/index.css";
import { provinces, cities, bloodGroups } from "./data";
const Donar = () => {
  return (
    <div>
      <section class="book" id="book">
        <h1 class="heading">
          <span>BECOME A</span> DONAR
        </h1>

        <div class="row">
          <form  onSubmit={(e)=>e.preventDefault()}>
            <h3 className="text-[25px] text-gray-900">Save A Life</h3>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 box dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected className="font-[20px]">
                Choose a country
              </option>
              <option value="US" className="font-[20px]">
                Pakistan
              </option>
            </select>

            <select
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
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 box dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected className="font-[20px]">
                Choose a Blood City
              </option>
              {cities?.map((item) => {
                return (
                  <option value={item} className="font-[20px]">
                    {item}
                  </option>
                );
              })}
            </select>
            <input type="text" placeholder="your name" class="box" />
            <input type="number" placeholder="your number" class="box" />
            <input type="email" placeholder="your email" class="box" />
            <input type="date" class="box" />

            
            <input type="submit" value="Save" class="btn" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Donar;
