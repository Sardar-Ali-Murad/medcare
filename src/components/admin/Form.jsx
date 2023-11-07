"use client";
import React from "react";
import "../../components/home/index.css";

const Form = ({ email, setEmail, password, setPassword, handleSubmit }) => {
  return (
    <section class="book" id="book">
      <div className="row min-h-[85vh] w-[350px] ml-[50%] translate-x-[-50%]">
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <h3 className="text-[24px] text-gray-900">Login As Admin</h3>
          <input
            type="email"
            placeholder="john@gmail.com"
            class="box"
            name="name"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="string"
            placeholder="Password"
            class="box"
            name="number"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          <input type="submit" value="Login" class="btn" />
        </form>
      </div>
    </section>
  );
};

export default Form;
