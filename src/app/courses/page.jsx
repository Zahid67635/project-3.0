"use client";

import CourseCard from "@/components/courseCard/CourseCard";
import CourseTitle from "@/components/courses/CourseTitle";
import courseImage from "../../../public/images/demo/digital-marketing-demo-image.jpg";
import teacherImage from "../../../public/images/demo/teacher-demo-image.jpg";
import Button from "@/components/buttons/Button";
import { BsFilter } from "react-icons/bs";
import InputField from "@/components/inputField/InputField";
import Image from "next/image";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import TertiaryLink from "@/components/buttons/TertiaryLink";
import { useState } from "react";
import { FaHome, FaAngleRight } from "react-icons/fa";

const navItems = [
  { name: "Courses", href: "/courses" },
  { name: "Instructors", href: "/instructors" },
];

function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const handleTransform = () => {
    setIsOpen(!isOpen);
  };

  const cardDetails = {
    title: "Learn Complete Digital Marketing",
    teacherName: "MD. Soyeb Chondoni",
    courseImage,
    teacherImage,
    price: 500,
    stars: 3,
    reviews: 5,
    lessons: 10,
    students: 100,
    bookmarked: false,
  };

  return (
    <div className="space-y-10">
      <div className="relative">
        <Image
          src="https://img.freepik.com/free-photo/book-with-green-board-background_1150-3837.jpg?w=826&t=st=1701254398~exp=1701254998~hmac=7afd51dd03ab52f09376f165d097ecafb6f4dfe950c189086e321bafadafee14"
          width={1000}
          height={500}
          className="object-cover w-full h-36"
        />
        <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-transparent top-0 text-white">
          <h1 className="text-3xl font-bold text-center mt-14">Courses</h1>
          <div className="flex items-center gap-2 mt-3 ml-5 font-medium">
            <div className="flex items-center gap-2">
              <FaHome />
              <Link href="/">Home</Link>
            </div>
            <FaAngleRight />
            <Link href="/courses">Courses</Link>
          </div>
        </div>
      </div>

      <section className="flex flex-col justify-between gap-3 md:items-center md:flex-row">
        <p className="text-sm text-neutral-500">
          Showing 1-12 results of 100 results
        </p>
        <div className="flex items-center gap-5">
          <InputField
            placeholder="Search Courses"
            extraClassName="rounded-none mt-0 bg-transparent border border-primary-500  text-primary-500 focus:outline-none transition-all py-1 sm:py-1.5"
          />
          <Button
            size="small"
            variant="outline"
            className="flex items-center gap-2"
          >
            <span onClick={handleTransform}>Filters</span> <BsFilter />
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <CourseTitle courseTitle="Language Learning" courses={10} />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(4).keys()].map((item) => (
            <CourseCard key={item} cardDetails={cardDetails} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <CourseTitle courseTitle="Graphic Design" courses={8} />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(4).keys()].map((item) => (
            <CourseCard key={item} cardDetails={cardDetails} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <CourseTitle courseTitle="Digital Marketing" courses={5} />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(4).keys()].map((item) => (
            <CourseCard key={item} cardDetails={cardDetails} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <CourseTitle
          courseTitle="Our Popular Teachers"
          extraClassName="justify-center"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(4).keys()].map((item) => (
            <Link key={item} href="">
              <div className="relative">
                <Image
                  src="https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?w=826&t=st=1701178529~exp=1701179129~hmac=8ce831d53fce52b4fcd7ccd05c25327ef4415af2df01f18f37c5aa7232e124f9"
                  width={500}
                  height={500}
                />
                <div className="absolute w-full h-full bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)] top-0 text-white flex justify-center items-end">
                  <h1 className="mb-8 text-xl font-bold">Jhankar Mahbub</h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Page;
