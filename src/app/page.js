import Button from "@/components/buttons/Button";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative">
        <Image
          width={1000}
          height={900}
          src="/banners/banner2.jpg"
          alt="banner"
          className="object-cover w-full h-80 sm:h-[550px]"
        />
        <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] top-0 text-white flex items-center">
          <div className="w-1/2 ml-10 space-y-5">
            <h2 className="text-3xl font-bold">lorem ipsum dolor sit amet</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Button type="" variant="primary">
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
