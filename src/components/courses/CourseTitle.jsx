function CourseTitle({ courseTitle, courses, extraClassName }) {
  return (
    <div className={`flex items-center gap-3 ${extraClassName}`}>
      <h2 className="text-xl font-semibold">{courseTitle}</h2>
      {courses && (
        <p className="text-sm text-primary-500">({courses} courses)</p>
      )}
    </div>
  );
}

export default CourseTitle;
