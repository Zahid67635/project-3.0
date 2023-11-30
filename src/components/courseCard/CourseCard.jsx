"use client";

import Image from "next/image";
import {
  FaStar,
  FaBookOpen,
  FaUsers,
  FaRegBookmark,
  FaRegStar,
  FaBookmark,
} from "react-icons/fa";
import Link from "next/link";
import LinkButton from "../buttons/LinkButton";

function CourseCard({ cardDetails }) {
  const {
    title,
    teacherImage,
    courseImage,
    teacherName,
    price,
    stars,
    reviews,
    lessons,
    students,
    bookmarked,
  } = cardDetails;

  const emptyStars = 5 - stars;

  return (
    <div className="w-full border border-gray-200 shadow group">
      <div className="relative mb-12">
        <div className="w-full overflow-hidden">
          <Link href="">
            <Image
              src={courseImage}
              alt="course image"
              width={500}
              height={500}
              className="object-cover w-full duration-300 h-52 group-hover:scale-105"
            />
          </Link>
        </div>
        <div className="absolute flex gap-3 -bottom-9 left-5">
          <div className="p-1 bg-white rounded-full ">
            <Image
              src={teacherImage}
              alt="teacher image"
              width={500}
              height={500}
              className="object-cover w-16 h-16 rounded-full"
            />
          </div>
          <div className="flex items-end pb-2">
            <Link href="">
              <h4 className="font-semibold text-gray-500">{teacherName}</h4>
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-5 divide-y-2 divide-gray-200">
        <div className="mb-3 space-y-3">
          <div className="flex justify-between gap-10">
            <Link href="">
              <h1 className="text-lg font-bold">{title}</h1>
            </Link>
            <h2 className="text-lg font-semibold text-violet-600">${price}</h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(stars).keys()].map((item) => (
                <FaStar key={item} className="text-lg text-yellow-500" />
              ))}
              {[...Array(emptyStars).keys()].map((item) => (
                <FaRegStar key={item} className="text-lg text-yellow-500" />
              ))}
            </div>

            <Link href="">
              <p className="text-sm text-gray-500">({reviews} reviews)</p>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between py-3">
          <div className="flex gap-5">
            <div className="flex items-center gap-2 text-gray-500">
              <FaBookOpen />
              <p className="text-sm">{lessons} Lessons</p>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <FaUsers />
              <p className="text-sm">{students} Students</p>
            </div>
          </div>
          <div className="cursor-pointer">
            {bookmarked ? (
              <FaBookmark className="stroke-2 text-violet-600" />
            ) : (
              <FaRegBookmark className="stroke-2 text-violet-600" />
            )}
          </div>
        </div>

        <div className="py-3">
          <LinkButton href="" size="small" variant="primary">
            Enroll Now
          </LinkButton>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
