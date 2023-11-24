import { twMerge } from "tailwind-merge";

function Button({
  variant = "primary",
  size = "medium",
  children = "Button",
  type = "button",
  className: extraClassName = "",
  onClick = () => {},
  onSubmit = () => {},
}) {
  const sizes = {
    large: "px-6 py-4 font-semibold",
    medium: "px-4 py-3 font-medium",
    small: "px-3 py-2 font-normal",
  };

  const variants = {
    primary:
      "h-fit bg-primary-500 hover:opacity-90 text-white focus:outline-none",
    outline:
      "h-fit border border-primary-500 hover:bg-primary-500 text-primary-500 hover:text-white focus:outline-none transition-all",
    tertiary:
      "h-fit text-primary-500 hover:text-neutral-600 focus:outline-none",
  };

  const className = twMerge(
    variants[variant] + " " + sizes[size],
    extraClassName
  );

  return (
    <button
      onSubmit={onSubmit}
      onClick={onClick}
      type={type}
      className={className}
    >
      {children}
    </button>
  );
}

export default Button;
