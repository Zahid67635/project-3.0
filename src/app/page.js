"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CourseCard from "@/components/courseCard/CourseCard";
import Navbar from "@/components/navbar/Navbar";
import { courseCardData } from "@/data";
import Image from "next/image";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div>
        <Image
          width={1000}
          height={900}
          src="/banner/banner2.jpg"
          alt="banner"
          priority
          className="object-cover w-full max-w-[90rem] h-[60vh] xl:h-[80vh] mx-auto"
        />
      </div>
      <div className="pb-44">
        <h2 className="p-5 text-xl font-bold">Our Popular Courses</h2>
        <Carousel className="flex gap-2" responsive={responsive}>
          {courseCardData.map((item) => (
            <CourseCard key={item.id} cardDetails={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
