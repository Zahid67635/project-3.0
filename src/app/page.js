import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import banner from "/public/banner/banner2.jpg";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <Image
          width={1000}
          height={900}
          src={banner}
          alt="banner"
          className="object-cover w-full h-[550px]"
        />
      </div>
    </div>
  );
}
