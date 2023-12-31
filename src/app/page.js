"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import LinkButton from "@/components/buttons/LinkButton";
import CourseCard from "@/components/courseCard/CourseCard";

import { categories, courseCardData, responsive } from "@/data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative">
        <Image
          width={1000}
          height={900}
          src="/banners/banner2.jpg"
          alt="banner"
          priority
          className="object-cover w-full h-[40vh] xl:h-[90vh]"
        />
        <div className="absolute left-0 right-0 justify-center hidden gap-2 lg:flex bottom-10">
          {categories.slice(0, 6).map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-center w-48 px-2 py-10 font-medium duration-150 border border-white rounded-md shadow-2xl cursor-pointer bg-primary-500 backdrop-blur-2xl opacity-80 hover:translate-y-1 hover:opacity-100 shadow-neutral-800"
            >
              <h2 className="text-lg text-white">{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8 px-4 py-8 bg-white sm:p-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-2 sm:mx-[10%]">
          <div className="flex flex-col flex-1 gap-4">
            <h2 className="text-2xl font-bold md:text-4xl">
              Edu Wave <span className="text-violet-500">Specialty</span>
            </h2>
            <ul className="flex flex-col gap-3 px-4 text-base list-disc">
              <li>
                Unlimited access to 25,000+ top Edu Wave courses, anytime,
                anywhere
              </li>
              <li>International course collection in 14 languages</li>
              <li>Top certifications in tech and business</li>
            </ul>
          </div>
          <div className="flex-1">
            <Image
              width={1000}
              height={400}
              className="object-cover w-full"
              src="/images/learning-concept-illustration_11.png"
              alt="image"
            />
          </div>
        </div>
        <div className="space-y-4 w-[380px] sm:w-[464px] md:w-full ">
          <h2 className="text-2xl font-bold">Popular Courses</h2>
          <Carousel responsive={responsive} className="p-1">
            {courseCardData.map((item) => (
              <CourseCard key={item.id} cardDetails={item} />
            ))}
          </Carousel>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-2 sm:mx-[10%]">
          <div className="flex-1">
            <Image
              width={1000}
              height={400}
              className="object-cover w-full"
              src="/images/To do list-rafiki.png"
              alt="image"
            />
          </div>
          <div className="flex flex-col flex-1 gap-4">
            <h2 className="text-2xl font-bold sm:text-4xl">
              Become an <span className="text-violet-500">Instructor</span>
            </h2>
            <p className="text-base sm:text-lg">
              Instructors from around the world teach millions of learners on
              Edu wave. We provide the tools and skills to teach what you love.
            </p>
            <LinkButton href="/sign-up">Register Now</LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}
