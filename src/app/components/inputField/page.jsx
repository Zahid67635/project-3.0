"use client";
import InputField from "@/components/inputField/InputField";
import React, { useState } from "react";

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  const handleBlur = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <h1 className="mb-3 text-center">Input Field</h1>
      <InputField
        type="text"
        name="exampleInput"
        label="Example Input"
        placeholder="Enter something..."
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete="off"
        setInputValue={setInputValue}
      />
    </div>
  );
}

export default page;
