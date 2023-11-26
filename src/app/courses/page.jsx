import CourseCard from "@/components/courseCard/CourseCard";
import CourseTitle from "@/components/courses/CourseTitle";
import courseImage from "../../../public/images/demo/digital-marketing-demo-image.jpg";
import teacherImage from "../../../public/images/demo/teacher-demo-image.jpg";
import SearchAndSelect from "@/components/searchAndSelect/SearchAndSelect";
import Button from "@/components/buttons/Button";
import { BsFilter, BsArrowRight } from "react-icons/bs";
import LinkButton from "@/components/buttons/LinkButton";

function page() {
  const courseCategories = [
    { id: 1, name: "Language Learning", courses: 10 },
    { id: 2, name: "Skill & IT", courses: 12 },
    { id: 3, name: "Career Readiness", courses: 20 },
    { id: 4, name: "Freelancing", courses: 18 },
    { id: 5, name: "Design & Creative", courses: 8 },
    { id: 6, name: "Kids (Age : 7-14)", courses: 11 },
    { id: 8, name: "Professional", courses: 14 },
    { id: 9, name: "Free", courses: 5 },
  ];

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

      <section className="space-y-4">
        <CourseTitle courseTitle="Explore Course Categories" />
        <div className="flex gap-3">
          {courseCategories.map((course) => (
            <div
              key={course.id}
              className="px-3 py-2 border border-primary-500"
            >
              <h3>{course.name}</h3>
              <p>Courses : {course.courses}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex items-center justify-between">
        <p className="text-sm text-neutral-500">
          Showing 1-6 results of 100 results
        </p>
        <div className="flex items-center gap-5">
          <SearchAndSelect placeholder="Search courses" />
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
        <div className="flex items-center justify-center">
          <LinkButton
            href=""
            size="small"
            variant="outline"
            className="flex items-center gap-3"
          >
            <span>See all</span>
            <BsArrowRight />
          </LinkButton>
        </div>
      </section>

      <section className="space-y-4">
        <CourseTitle
          courseTitle="Our Popular Teachers"
          extraClassName="justify-center"
        />
        <div className="flex gap-5">
          {[...Array(4).keys()].map((item) => (
            <div key={item} className="w-1/4 h-40 border">
              <p>image</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <LinkButton
            href=""
            size="small"
            variant="outline"
            className="flex items-center gap-3"
          >
            <span>See all</span>
            <BsArrowRight />
          </LinkButton>
        </div>
      </section>
    </div>
  );
}

export default page;
