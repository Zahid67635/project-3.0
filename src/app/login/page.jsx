/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
"use client";

import InputField from "@/components/inputField/InputField";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import { FaAt, FaGraduationCap, FaKey } from "react-icons/fa";
import { loginSchema } from "./loginSchema";
import Image from "next/image";

function page() {
  const initialValues = {
    email: "",
    password: "",
  };
  const { values, handleChange, handleSubmit, touched, errors, handleBlur } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        action.resetForm();
      },
    });
  return (
    <div className="flex flex-col items-center min-h-screen gap-5 py-10 md:justify-center md:py-0">
      <Link href={`/`} className="flex items-center justify-center">
        <FaGraduationCap className="w-20 h-12" fill="#7c3aed" />
        <span className="text-4xl font-bold text-gray-600">eduwave</span>
      </Link>
      <div className="relative w-full bg-transparent rounded-xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center max-w-lg gap-5 px-4 pb-2 mx-auto"
        >
          <h1 className="text-3xl font-bold text-center text-primary-600">
            Sign in
          </h1>

          <div className="relative w-full ">
            <label className="flex p-1" htmlFor="email">
              Email
              <span className="text-red-500">*</span>
            </label>
            <InputField
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Type email.."
              className="w-full py-2 pl-8 border border-slate-400 focus:outline-slate-500"
            >
              <FaAt className="absolute top-[13px] left-2 opacity-50" />
            </InputField>
            {errors.email && touched.email ? (
              <p className="pl-2 text-red-500">{errors.email}</p>
            ) : null}
          </div>

          <div className="relative w-full ">
            <label className="flex p-1" htmlFor="password">
              Password
              <span className="text-negative-500">*</span>
            </label>
            <InputField
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Type password.."
              className="w-full py-2 pl-8 border border-slate-400 focus:outline-slate-500"
            >
              <FaKey className="absolute top-[13px] left-2 opacity-50" />
            </InputField>
            {errors.password && touched.password ? (
              <p className="pl-2 text-negative-500">{errors.password}</p>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full p-1 py-2 mx-auto font-semibold text-white transition duration-300 outline outline-1 outline-black bg-primary-500 hover:bg-white hover:text-black hover:outline-primary-500 text-semibold"
          >
            Login
          </button>
        </form>
      </div>
      <p className="text-center text-slate-600">
        Don't have an Account?
        <Link href="/sign-up" className="font-semibold ">
          {" "}
          Sign-up
        </Link>
      </p>
    </div>
  );
}

export default page;
