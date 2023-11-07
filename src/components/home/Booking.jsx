"use client"
import React from "react";
import "./index.css";
import Img1 from "../../assets//book-img.svg";
import Image from "next/image";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = () => {
  let [obj,setObj]=React.useState({
    name:"",
    email:"",
    number:"",
    message:""
  })

  function handleChange(event){
    setObj((pre)=>{
      return {
        ...pre,
        [event.target.name]:event.target.value
      }
    })
  }

  const handleSubmit=async (event)=>{
    event.preventDefault()
    try {
      await axios.post("https://medicare-nodejs.vercel.app/api/v1/message",obj)
      toast.success("Message Received Successsfully!", {
        position: toast.POSITION.TOP_CENTER
    });
    setObj({
      name:"",
      email:"",
      number:"",
      message:""
    })
    } catch (error) {
      toast.error(error?.response?.data?.msg, {
        position: toast.POSITION.TOP_CENTER
    });
      
    }
  }

  return (
    <section class="book" id="book">
      <ToastContainer/>
      <h1 class="heading">
        <span>Have Some</span> Query?
      </h1>

      <div class="row">
        <div class="image">
          <Image src={Img1} alt="" height={100} width={100} />
        </div>

        <form action="" onSubmit={(e)=>handleSubmit(e)}>
          <h3 className="text-[24px] text-gray-900">Details</h3>
          <input type="text" placeholder="your name" class="box" name="name" onChange={(event)=>handleChange(event)} value={obj?.name}/>
          <input type="string" placeholder="your number" class="box" name="number"  onChange={(event)=>handleChange(event)} value={obj?.number}/>
          <input type="email" placeholder="your email" class="box" name="email"  onChange={(event)=>handleChange(event)} value={obj?.email} />
          <textarea className="min-h-[100px] w-[100%]" placeholder="Message" name="message"  onChange={(event)=>handleChange(event)} value={obj?.message}></textarea>
          <input type="submit" value="Save" class="btn" />
        </form>
      </div>
    </section>
  );
};

export default Booking;
