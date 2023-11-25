import { twMerge } from "tailwind-merge";

function DisableButton({
  variant = "primary",
  size = "medium",
  children = "Button",
  type = "button",
  className: extraClassName = "",
}) {
  const sizes = {
    large: "px-6 py-3 font-semibold",
    medium: "px-4 py-2 font-medium",
    small: "px-3 py-1 font-normal",
  };

  const variants = {
    primary:
      "h-fit bg-primary-500 text-white focus:outline-none opacity-50 cursor-not-allowed",
  };

  const className = twMerge(
    variants[variant] + " " + sizes[size],
    extraClassName
  );

  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}

export default DisableButton;
