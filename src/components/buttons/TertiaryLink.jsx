import Link from "next/link";
import { twMerge } from "tailwind-merge";

function TertiaryLink({
  variant = "primary",
  size = "medium",
  children = "Link",
  className: extraClassName = "",
  href = "",
}) {
  const sizes = {
    large: "py-1 font-semibold",
    medium: "py-1 font-medium",
    small: "py-1 font-normal",
  };

  const variants = {
    primary:
      "h-fit w-fit text-primary-500 hover:text-neutral-600 hover:transition-all",
  };

  const className = twMerge(
    variants[variant] + " " + sizes[size],
    extraClassName
  );

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default TertiaryLink;