import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/eduwave.png";
function Logo() {
  return (
    <Link href={`/`}>
      <Image
        src={logo}
        width={1000}
        height={1000}
        alt="eduWave"
        className="object-fill w-32 h-10"
      />
    </Link>
  );
}

export default Logo;
