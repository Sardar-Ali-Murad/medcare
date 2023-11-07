"use client";
import React from "react";
import "../../components/home/index.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setCookie } from "cookies-next";
import Form from "@/components/admin/Form";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Donars from "@/components/admin/Donars";
const admin = () => {
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [user, setUser] = React.useState(false);
  let [loading, setLoading] = React.useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        "https://medicare-nodejs.vercel.app/api/v1/auth/login",
        { email, password },
        {
          withCredentials: true,
        }
      );
      setCookie("user", "True");
      setUser(true);
      toast.success("Login Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      setLoading(false);
    } catch (error) {
      setUser(false);
      toast.error(error?.response?.data?.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const getAdmin = async () => {
      setLoading(true);
      try {
        await axios.get("https://medicare-nodejs.vercel.app/api/v1/auth/getCurrentUser", {
          withCredentials: true,
        });
        setCookie("user", "True");
        setUser(true);
        setLoading(false);
      } catch (error) {
        setUser(false);
        setLoading(false);
      }
    };
    getAdmin();
  }, []);

  return (
    <div>
      <ToastContainer />
      {loading && <Skeleton count={5}  />}
      {!user ? (
        <Form
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      ) : (
        <Donars/>
      )}
    </div>
  );
};

export default admin;
