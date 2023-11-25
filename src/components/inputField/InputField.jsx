"use client";
import { HiMiniXCircle } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

const defaultLabelClassNames = "block text-sm font-semibold text-gray-600";
const defaultClassNames =
  "mt-1 block w-full font-medium appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-green-600 sm:text-sm placeholder:font-normal text-gray-500";
const clearButtonStyle =
  "absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-500";

function InputField({
  type = "",
  name = "",
  label = "",
  labelClassName = "",
  placeholder = "",
  extraClassName = "",
  value,
  onChange = () => {},
  onBlur = () => {},
  errors = {},
  autoComplete,
  readOnly,
  setInputValue,
  ...props
}) {
  const clearInput = () => {
    setInputValue("");
    onBlur({ target: { name, value: "" } });
  };

  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className={twMerge(defaultLabelClassNames, labelClassName)}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          className={twMerge(defaultClassNames, extraClassName)}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete={autoComplete}
          readOnly={readOnly}
          {...props}
        />
        {value && (
          <div className={clearButtonStyle} onClick={clearInput}>
            <HiMiniXCircle />
          </div>
        )}
      </div>
    </div>
  );
}

export default InputField;
