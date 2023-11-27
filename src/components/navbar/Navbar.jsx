"use client";
import { FaAngleLeft, FaBars } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

import { useState } from "react";
import Button from "../buttons/Button";
import NavLink from "../buttons/NavLink";
import TertiaryLink from "../buttons/TertiaryLink";
import RightSideDrawer from "../drawer/RightSideDrawer";
import InputField from "../inputField/InputField";
import Logo from "../logo/Logo";

const navItems = [
  { name: "Courses", href: "/courses" },
  { name: "Instructors", href: "/instructors" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategories, setIsCategories] = useState(false);
  const handleTransform = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className="flex justify-between w-full p-4 bg-white">
      {/* Logo */}
      <div className="flex items-center w-1/5">
        <Logo />
      </div>
      {/* Hamburger Icon */}
      <div className="flex items-center lg:hidden">
        <FaBars onClick={handleTransform} className="cursor-pointer" />
      </div>

      <RightSideDrawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div
          onClick={() => setIsCategories((prev) => !prev)}
          className={`${isCategories ? "block" : "hidden"} flex flex-col gap-3`}
        >
          <div className="flex items-center gap-2 px-2">
            <FaAngleLeft />
            <h2>Categories</h2>
          </div>
        </div>

        <div className={`flex flex-col gap-2 ${isCategories && "hidden"}`}>
          <div
            onClick={() => setIsCategories((prev) => !prev)}
            className={`flex items-center justify-between ${
              isCategories && "hidden"
            }`}
          >
            <div>Categories</div>
            <div>
              <FaAngleRight />
            </div>
          </div>
          {navItems.map((item) => (
            <TertiaryLink key={item.name} href={item.href}>
              {item.name}
            </TertiaryLink>
          ))}
          <TertiaryLink extraClassName="text-violet-500" href="/login">
            Login
          </TertiaryLink>
          <TertiaryLink extraClassName="text-violet-500" href="/sign-up">
            Sign up
          </TertiaryLink>
        </div>
      </RightSideDrawer>

      <div className="items-center justify-end hidden w-4/5 gap-6 lg:flex">
        <div className="w-1/3">
          <InputField
            extraClassName="rounded-full items-center hidden flex-end lg:flex"
            placeholder="Search"
          />
        </div>
        {navItems.map((item) => (
          <NavLink key={item.name} href={item.href}>
            {item.name}
          </NavLink>
        ))}
        <Button>Login</Button>
        <Button variant="outline">Sign up</Button>
      </div>
    </nav>
  );
}

export default Navbar;
