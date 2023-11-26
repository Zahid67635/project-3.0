import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <Image
          width={1000}
          height={900}
          src="/banners/banner2.jpg"
          alt="banner"
          className="object-cover w-full h-80 sm:h-[550px]"
        />
      </div>
    </div>
  );
}
