import Image from "next/image";
import React from "react";
import logo from "../../assets/eduwave.png";
import Link from "next/link";
function Logo() {
  return (
    <Link href={`/`}>
      <Image
        src={logo}
        width={1000}
        height={1000}
        alt="eduWave"
        className="object-fill h-10 w-28"
      />
    </Link>
  );
}

export default Logo;
