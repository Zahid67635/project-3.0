import NavLink from "../buttons/NavLink";
import Logo from "../logo/Logo";
import facebook from "../../../public/icons/social-media/facebook.png";
import twitter from "../../../public/icons/social-media/twitter.png";
import instagram from "../../../public/icons/social-media/instagram.png";
import linkedIn from "../../../public/icons/social-media/linkedin.png";
import Image from "next/image";
import Link from "next/link";

const socialMedia = [facebook, twitter, instagram, linkedIn];

function Footer() {
  return (
    <footer>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="space-y-2">
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
            <NavLink href="/" size="small">
              Available Courses
            </NavLink>
            <NavLink href="/" size="small">
              Become an Instructor
            </NavLink>
            <NavLink href="/" size="small">
              Blogs ans News
            </NavLink>
            <NavLink href="/" size="small">
              Testimonials
            </NavLink>
          </div>
        </div>

        <div>
          <div className="mb-5">
            <h1 className="text-xl font-bold">Find Us On</h1>
            <hr className="w-1/4 h-1 text-black bg-black" />
          </div>
          <div className="flex gap-3">
            {socialMedia.map((media) => (
              <Link key={media} href="">
                <Image
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

      <hr className="h-[2px] text-black bg-black my-5" />

      <div className="flex flex-col items-center justify-between text-sm lg:flex-row">
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
