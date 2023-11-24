import Link from "next/link";
import { twMerge } from "tailwind-merge";

function NavLink({
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
      "h-fit text-primary-500 hover:border-b-2 hover:transition-all hover:border-b-primary-500 focus:outline-none focus:transition-none",
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

export default NavLink;
