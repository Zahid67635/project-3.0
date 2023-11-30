"use client";

import React from "react";
import Select from "react-select";
import { twMerge } from "tailwind-merge";

const defaultLabelClassNames =
  "flex items-center justify-between gap-2 text-sm font-medium text-gray-600 mb-1";

function SearchAndSelect({
  label = "",
  name = "",
  options = [],
  onChange = () => {},
  isClearable = false,
  labelClassName = "",
  placeholder = "",
  ...props
}) {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: !state.isFocused
        ? provided.borderColor
        : "rgba(117, 163, 163)",
      "&:hover": { borderColor: "none" },
      boxShadow: state.isFocused
        ? "0 0 0 2px rgba(117, 163, 163)"
        : provided.boxShadow,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor:
        (state.isFocused || state.isSelected) && !state.isMulti
          ? "rgb(217, 217, 217)"
          : provided.backgroundColor,
      color:
        (state.isFocused || state.isSelected) && !state.isMulti
          ? "black"
          : "black",
      "&:hover": {
        backgroundColor: "rgb(217, 217, 217)",
        color: "black",
        cursor: "pointer",
      },
      overflow: "hidden",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "rgb(15, 23, 42)",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "white",
    }),
    input: (provided) => ({
      ...provided,
      "input:focus": {
        boxShadow: "none",
      },
    }),
  };
  return (
    <section className="w-full">
      <div className={twMerge(defaultLabelClassNames, labelClassName)}>
        <label>{label}</label>
      </div>
      <Select
        name={name}
        id={name}
        isClearable={isClearable}
        styles={customStyles}
        placeholder={placeholder ? placeholder : "Search And Select Options"}
        options={options}
        onChange={onChange}
        noOptionsMessage={() => "No results were found"}
        {...(props.defaultValue && { defaultValue: props.defaultValue })}
      />
    </section>
  );
}

export default SearchAndSelect;
