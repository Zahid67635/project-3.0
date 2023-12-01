"use client";
import { FaAngleLeft, FaBars } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

import { categories } from "@/data";
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
  const [desktopCategories, setDesktopCategories] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const handleTransform = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="flex w-full px-4 py-2 bg-white border-b border-neutral-500">
      {/* Logo */}
      <div className="flex items-center lg:w-1/5">
        <Logo />
      </div>

      <div className="items-center justify-end hidden gap-6 lg:w-4/5 lg:flex">
        <div className="w-1/3">
          <InputField
            extraClassName="rounded-full items-center hidden flex-end lg:flex"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center gap-6">
          {desktopCategories && (
            <div
              onMouseOver={() => setDesktopCategories(true)}
              onMouseOut={() => setDesktopCategories(false)}
              className="absolute z-10 flex flex-col px-6 py-4 bg-white shadow-2xl top-16 shadow-neutral-900"
            >
              {categories.map((item) => (
                <TertiaryLink key={item.id} extraClassName="w-full">
                  {item.name}
                </TertiaryLink>
              ))}
            </div>
          )}
          <div
            onMouseOver={() => setDesktopCategories((prev) => !prev)}
            onMouseOut={() => setDesktopCategories((prev) => !prev)}
            className="flex items-center gap-1 py-4 border-b-2 border-transparent cursor-pointer"
          >
            <p className="font-medium text-primary-500">Categories</p>
            <IoIosArrowDown className="font-medium" />
          </div>
          {navItems.map((item) => (
            <NavLink key={item.name} href={item.href}>
              {item.name}
            </NavLink>
          ))}
        </div>
        <Button>Login</Button>
        <Button variant="outline">Sign up</Button>
      </div>

      {/* Hamburger Icon */}
      <div className="flex items-center gap-6 lg:hidden">
        <IoSearch
          onClick={() => setShowSearch((prev) => !prev)}
          className="text-xl cursor-pointer"
        />
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

      {showSearch && (
        <div className="absolute top-0 bottom-0 left-0 right-0 z-50 h-screen bg-white">
          <div className="flex items-center gap-2 p-3 border-b-4 border-neutral-300">
            <GoArrowLeft
              className="text-lg font-bold"
              onClick={() => setShowSearch(false)}
            />
            <input
              type="text"
              placeholder="Search Courses"
              className="w-full py-1 border-none outline-none"
            />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
