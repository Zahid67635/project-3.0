import CourseCard from "@/components/courseCard/CourseCard";
import CourseTitle from "@/components/courses/CourseTitle";
import courseImage from "../../../public/images/demo/digital-marketing-demo-image.jpg";
import teacherImage from "../../../public/images/demo/teacher-demo-image.jpg";
import Button from "@/components/buttons/Button";
import { BsFilter } from "react-icons/bs";
import InputField from "@/components/inputField/InputField";
import Image from "next/image";
import Link from "next/link";

function page() {
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
      <div className="flex items-center justify-center h-32 text-3xl font-bold text-white bg-primary-500">
        Courses
      </div>

      <section className="flex items-center justify-between">
        <p className="text-sm text-neutral-500">
          Showing 1-12 results of 100 results
        </p>
        <div className="flex items-center gap-5">
          <InputField
            placeholder="Search Courses"
            extraClassName="rounded-none mt-0 bg-transparent border border-primary-500  text-primary-500 focus:outline-none transition-all py-1.5"
          />
          <Button
            size="small"
            variant="outline"
            className="flex items-center gap-2"
          >
            <span>Filters</span> <BsFilter />
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <CourseTitle courseTitle="Language Learning" courses={10} />
        <div className="flex gap-5">
          {[...Array(4).keys()].map((item) => (
            <CourseCard key={item} cardDetails={cardDetails} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <CourseTitle courseTitle="Graphic Design" courses={8} />
        <div className="flex gap-5">
          {[...Array(4).keys()].map((item) => (
            <CourseCard key={item} cardDetails={cardDetails} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <CourseTitle courseTitle="Digital Marketing" courses={5} />
        <div className="flex gap-5">
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
        <div className="grid grid-cols-4 gap-5">
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

export default page;
