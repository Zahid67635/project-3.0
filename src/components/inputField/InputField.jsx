///
"use client";
import React from "react";

const defaultLabelClassNames = "block text-sm font-semibold text-gray-600";
const defaultClassNames =
  "mt-1 block w-full font-medium appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-green-600 focus:outline-none focus:ring-green-600 sm:text-sm placeholder:font-normal text-gray-500";

function InputField({
  type = "",
  name = "",
  label = "",
  labelClassName = defaultLabelClassNames,
  placeholder = "Give an input field",
  className = defaultClassNames,
  value,
  onChange = () => {},
  onBlur = () => {},
  errors = {},
  autoComplete,
  readOnly,
  ...restProps
}) {
  return (
    <div className="w-full">
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={autoComplete}
        readOnly={readOnly}
        {...restProps}
      />
    </div>
  );
}

export default InputField;
