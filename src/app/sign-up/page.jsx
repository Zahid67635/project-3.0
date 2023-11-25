/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Footer from "@/components/footer/Footer";
import InputField from "@/components/inputField/InputField";
import Navbar from "@/components/navbar/Navbar";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaAt, FaKey, FaUser } from "react-icons/fa";
import { signUpSchema } from "./signUpSchema";

function page() {
  const [userImg, setUserImg] = useState("");
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUserImg(imageUrl);
    } else {
      setUserImg("");
    }
  };

  //formik setup start
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const { values, handleChange, handleSubmit, touched, errors, handleBlur } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        action.resetForm();
      },
    });
  return (
    <div className="p-1">
      <Navbar />
      <div className="flex justify-center">
        <div className="relative flex flex-col justify-center w-full max-w-lg my-4 bg-transparent rounded-xl">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center w-full px-4 pb-2"
          >
            <h1 className="mb-8 text-3xl font-bold text-center text-primary-600">
              SignUp
            </h1>

            <label className="flex p-1" htmlFor="name">
              Username
              <span className="text-red-500">*</span>
            </label>
            <div className="relative w-full mb-5 ">
              <FaUser className="absolute top-[13px] left-2 opacity-50" />
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                placeholder="Your full Name"
                className="w-full py-2 pl-8 border border-slate-400 focus:outline-slate-500"
              />
              {errors.name && touched.name ? (
                <p className="pl-2 text-red-500">{errors.name}</p>
              ) : null}
            </div>
            <label className="flex p-1" htmlFor="email">
              Email
              <span className="text-red-500">*</span>
            </label>
            <div className="relative w-full mb-5 ">
              <FaAt className="absolute top-[13px] left-2 opacity-50" />
              <input
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                placeholder="Your Email"
                className="w-full py-2 pl-8 border border-slate-400 focus:outline-slate-500"
              />
              {errors.email && touched.email ? (
                <p className="pl-2 text-red-500">{errors.email}</p>
              ) : null}
            </div>
            <label className="flex p-1" htmlFor="password">
              Password
              <span className="text-red-500">*</span>
            </label>
            <div className="relative w-full mb-5 ">
              <FaKey className="absolute top-[13px] left-2 opacity-50" />
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                placeholder="Your Password"
                className="w-full py-2 pl-8 border border-slate-400 focus:outline-slate-500"
              />
              {errors.password && touched.password ? (
                <p className="pl-2 text-red-500">{errors.password}</p>
              ) : null}
            </div>
            <label className="flex p-1" htmlFor="confirm_password">
              Confirm Password
              <span className="text-red-500">*</span>
            </label>
            <div className="relative w-full mb-5 ">
              <FaKey className="absolute top-[13px] left-2 opacity-50" />
              <input
                type="password"
                name="confirm_password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                placeholder="Confirm Password"
                className="w-full py-2 pl-8 border border-slate-400 focus:outline-slate-500"
              />
              {errors.confirm_password && touched.confirm_password ? (
                <p className="pl-2 text-red-500">{errors.confirm_password}</p>
              ) : null}
            </div>
            <div className="w-full mb-4 text-slate-600">
              <span className="mb-4">Upload Your Image </span>
              <div className="flex items-center">
                <div className="mr-3 ">
                  <Image
                    src={`${
                      userImg ? userImg : "/src/assets/images/profile.jpg"
                    }`}
                    alt=""
                    width={60}
                    height={70}
                    className="object-cover rounded-lg"
                  />
                </div>
                <input
                  name="user_image"
                  value={values.user_image}
                  onChange={handleImageUpload}
                  onBlur={handleBlur}
                  id="userImage"
                  type="file"
                  className="block w-full mt-2 text-sm cursor-pointer text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-primary-500 hover:file:bg-violet-100 hover:file:cursor-pointer "
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full p-1 py-2 mx-auto mt-4 font-semibold text-white transition duration-300 outline outline-1 outline-black bg-primary-500 hover:bg-white hover:text-black hover:outline-primary-500 text-semibold"
            >
              SignUp
            </button>
          </form>
          <p className="text-center text-slate-600">
            Already Have an Account?
            <Link href="/login" className="font-semibold ">
              {" "}
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
