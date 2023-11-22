"use client";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import { useState } from "react";
import Button from "../buttons/Button";
import NavLink from "../buttons/NavLink";

const navItems = [
  { name: "Courses", href: "/courses" },
  { name: "Instructors", href: "/instructors" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between w-full">
      <div className="flex items-center">
        <h1 className="font-semibold">Edu Wave</h1>
      </div>
      <div className="flex items-center md:hidden">
        <FaBars
          onClick={() => setIsOpen((prev) => !prev)}
          className="cursor-pointer"
        />
      </div>
      {isOpen && (
        <div className="absolute top-0 bottom-0 right-0 z-10 flex flex-col w-2/3 gap-2 px-6 py-8 transition-transform ease-in-out translate-x-1 bg-neutral-300">
          <div className="flex justify-end w-full">
            <RxCross2
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-3xl cursor-pointer text-primary-500"
            />
          </div>
          {navItems.map((item) => (
            <NavLink key={item.name} href={item.href}>
              {item.name}
            </NavLink>
          ))}
          <div className="flex flex-col gap-4">
            <Button>Login</Button>
            <Button variant="secondary">Sign up</Button>
          </div>
        </div>
      )}
      <div className="items-center hidden gap-6 md:flex">
        {navItems.map((item) => (
          <NavLink key={item.name} href={item.href}>
            {item.name}
          </NavLink>
        ))}
        <Button>Login</Button>
        <Button variant="secondary">Sign up</Button>
      </div>
    </nav>
  );
}

export default Navbar;
