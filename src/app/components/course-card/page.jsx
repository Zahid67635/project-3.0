import CourseCard from "@/components/courseCard/CourseCard";
import courseImage from "../../../../public/images/demo/digital-marketing-demo-image.jpg";
import teacherImage from "../../../../public/images/demo/teacher-demo-image.jpg";

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
    <div>
      <h1 className="mb-3 text-lg text-center">Course Card</h1>
      <div className="sm:w-1/2 md:w-1/3 xl:w-1/4">
        <CourseCard cardDetails={cardDetails} />
      </div>
    </div>
  );
}

export default page;
