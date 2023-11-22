import Link from "next/link";
import { twMerge } from "tailwind-merge";

function LinkButton({
  variant = "primary",
  size = "medium",
  children = "Button",
  type = "button",
  className: extraClasName = "",
  href = "",
}) {
  const sizes = {
    large: "px-6 py-4 font-semibold",
    medium: "px-4 py-3 font-medium",
    small: "px-3 py-2 font-normal",
  };

  const variants = {
    primary:
      "h-fit bg-primary-500 hover:opacity-90 text-white rounded-md focus:outline-none",
    secondary:
      "h-fit hover:bg-neutral-100 border border-primary-500 text-primary-500 rounded-md focus:outline-none",
    tertiary:
      "h-fit text-primary-500 hover:text-neutral-600 focus:outline-none",
  };

  const className = twMerge(
    variants[variant] + " " + sizes[size],
    extraClasName
  );

  return (
    <Link href={href}>
      <button type={type} className={className}>
        {children}
      </button>
    </Link>
  );
}

export default LinkButton;
