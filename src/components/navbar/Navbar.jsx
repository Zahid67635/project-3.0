"use client";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import { useState } from "react";
import Button from "../buttons/Button";
import NavLink from "../buttons/NavLink";
import TertiaryLink from "../buttons/TertiaryLink";
import InputField from "../inputField/InputField";
import Logo from "../logo/Logo";

const navItems = [
  { name: "Courses", href: "/courses" },
  { name: "Instructors", href: "/instructors" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleTransform = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex justify-between w-full p-4 bg-white">
      <div className="flex items-center w-1/5">
        <Logo />
      </div>
      <div className="flex items-center md:hidden">
        <FaBars onClick={handleTransform} className="cursor-pointer" />
      </div>

      {isOpen && (
        <div className="absolute top-0 bottom-0 right-0 z-10 flex flex-col w-2/3 gap-2 px-6 py-8 transition-transform ease-in-out translate-x-1 bg-neutral-300">
          <div className="flex justify-end w-full">
            <RxCross2
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-3xl cursor-pointer text-primary-500"
            />
          </div>
          <InputField
            extraClassName="bg-neutral-300 border-primary-500"
            placeholder="Search"
          />
          {navItems.map((item) => (
            <TertiaryLink key={item.name} href={item.href}>
              {item.name}
            </TertiaryLink>
          ))}
          <div className="flex flex-col gap-4">
            <Button>Login</Button>
            <Button variant="outline">Sign up</Button>
          </div>
        </div>
      )}
      <div className="items-center justify-end hidden w-4/5 gap-6 md:flex">
        <div className="items-center hidden w-1/2 md:flex">
          <InputField placeholder="Search" />
        </div>
        <div
          className={`absolute top-0 bottom-0 right-0 z-10 flex flex-col w-2/3 gap-2 px-6 py-8 bg-neutral-300 transform md:hidden ${
            !isOpen ? "translate-x-full" : ""
          } transition duration-200 ease-in md:translate-x-full`}
        >
          <div className="flex justify-end w-full">
            <RxCross2
              onClick={handleTransform}
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

        <div className="items-center hidden gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.name} href={item.href}>
              {item.name}
            </NavLink>
          ))}
          <Button>Login</Button>
          <Button variant="outline">Sign up</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
