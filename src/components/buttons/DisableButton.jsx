import { twMerge } from "tailwind-merge";

function DisableButton({
  variant = "primary",
  size = "medium",
  children = "Button",
  type = "button",
  className: extraClasName = "",
}) {
  const sizes = {
    large: "px-6 py-4 font-semibold",
    medium: "px-4 py-3 font-medium",
    small: "px-3 py-2 font-normal",
  };

  const variants = {
    primary:
      "h-fit bg-primary-500 text-white rounded-md focus:outline-none opacity-50 cursor-not-allowed",
    secondary:
      "h-fit border border-primary-500 text-primary-500 rounded-md focus:outline-none",
    tertiary: "h-fit text-primary-500 focus:outline-none",
  };

  const className = twMerge(
    variants[variant] + " " + sizes[size],
    extraClasName
  );

  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}

export default DisableButton;
