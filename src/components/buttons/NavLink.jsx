import Link from "next/link";
import { twMerge } from "tailwind-merge";

function NavLink({
  variant = "primary",
  size = "medium",
  children = "Link",
  className: extraClasName = "",
  href = "",
}) {
  const sizes = {
    large: "py-1 font-semibold",
    medium: "py-1 font-medium",
    small: "py-1 font-normal",
  };

  const variants = {
    primary:
      "border-b-2 border-transparent h-fit text-primary-500 hover:border-primary-500 hover:transition-colors focus:outline-none",
  };

  const className = twMerge(
    variants[variant] + " " + sizes[size],
    extraClasName
  );

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default NavLink;
