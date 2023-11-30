import NavLink from "../buttons/NavLink";
import Logo from "../logo/Logo";
import facebook from "../../../public/icons/social-media/facebook.png";
import twitter from "../../../public/icons/social-media/twitter.png";
import instagram from "../../../public/icons/social-media/instagram.png";
import linkedIn from "../../../public/icons/social-media/linkedin.png";
import Image from "next/image";
import Link from "next/link";
import TertiaryLink from "../buttons/TertiaryLink";

const socialMedia = [facebook, twitter, instagram, linkedIn];

function Footer() {
  return (
    <footer>
      <div className="grid gap-5 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="space-y-5">
            <Logo />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea atque
              architecto totam possimus nisi suscipit earum, modi fuga laborum
              quas.
            </p>
          </div>
        </div>

        <div>
          <div className="mb-5">
            <h1 className="text-xl font-bold">Contact Us</h1>
            <hr className="w-1/4 h-1 text-black bg-black" />
          </div>
          <div className="space-y-4">
            <h3>
              <b>Address : </b>Unisco university Albany, NY, USA. 11001
            </h3>
            <h3>
              <b>Phone : </b>+91 555 668 986
            </h3>
            <h3>
              <b>Email : </b>info@eduwave.com
            </h3>
          </div>
        </div>

        <div>
          <div className="mb-5">
            <h1 className="text-xl font-bold">Quick Links</h1>
            <hr className="w-1/4 h-1 text-black bg-black" />
          </div>
          <div className="flex flex-col">
            <TertiaryLink href="/" size="small" className="inline">
              Available Courses
            </TertiaryLink>
            <TertiaryLink href="/" size="small">
              Become an Instructor
            </TertiaryLink>
            <TertiaryLink href="/" size="small">
              Blogs ans News
            </TertiaryLink>
            <TertiaryLink href="/" size="small">
              Testimonials
            </TertiaryLink>
          </div>
        </div>

        <div>
          <div className="mb-5">
            <h1 className="text-xl font-bold">Find Us On</h1>
            <hr className="w-1/4 h-1 text-black bg-black" />
          </div>
          <div className="flex gap-3">
            {socialMedia.map((media, index) => (
              <Link key={index} href="">
                <Image
                  alt="img"
                  src={media}
                  width={500}
                  height={500}
                  className="w-8 h-8"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <hr className="h-[2px] text-black bg-black" />

      <div className="flex flex-col items-center justify-between my-5 text-sm lg:flex-row">
        <p className="text-center">
          Copyright &copy; 2023 Edu Wave | Developed by Code House. All Rights
          Reserved
        </p>
        <div className="flex gap-3">
          <NavLink href="" size="small">
            Privacy
          </NavLink>
          <NavLink href="" size="small">
            Terms
          </NavLink>
          <NavLink href="" size="small">
            Pricing
          </NavLink>
          <NavLink href="" size="small">
            Events
          </NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
