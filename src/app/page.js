import Button from "@/components/buttons/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative w-full">
        <Image
          width={1550}
          height={900}
          src="/banners/banner2.jpg"
          alt="banner"
          className="object-cover h-[60vh] xl:h-[90vh]"
        />
        <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] top-0 text-white flex items-center">
          <div className="w-full mx-5 space-y-2 md:space-y-5 md:ml-10 md:mr-0 md:w-1/2">
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
