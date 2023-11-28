import { BsArrowRight } from "react-icons/bs";
import TertiaryLink from "../buttons/TertiaryLink";

function CourseTitle({ courseTitle, courses, extraClassName }) {
  return (
    <div className={`flex justify-between items-center ${extraClassName}`}>
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-semibold">{courseTitle}</h2>
        {courses && (
          <p className="text-sm text-primary-500">({courses} courses)</p>
        )}
      </div>
      <div className="flex items-center justify-center">
        <TertiaryLink
          href=""
          size="small"
          variant="outline"
          className="flex items-center gap-3"
        >
          <span>See all</span>
          <BsArrowRight />
        </TertiaryLink>
      </div>
    </div>
  );
}

export default CourseTitle;
