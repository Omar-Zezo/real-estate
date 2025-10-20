import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import { navLinks } from "@/constans";

const Header = () => {
  return (
    <header>
      <div className="bg-[url('/Banner.png')] flex items-center gap-1.6 px-4 pb-5 pt-10 xl:px-20 xl:py-3.5">
        <p className="w-fit mx-auto text-xs xl:text-sm text-white font-medium">
          ✨ Discover Your Dream Property with Estatein{" "}
          <Link href="#" className="underline">
            Learn More
          </Link>
        </p>
        <div className="p-1 bg-white/10 rounded-full cursor-pointer">
          <img width={18} height={18} src="/svg/close.svg" alt="close" />
        </div>
      </div>
      <nav className="bg-gray10 px-4 py-5 max-md:shadow-[inset_0_1px_0_0_rgb(38,38,38),_inset_0_-1px_0_0_rgb(38,38,38)] xl:px-20 xl:py-3.5 flex items-center justify-between">
        <Link href="/">
          <div className="relative w-[94px] h-[28px] xl:w-[114px] xl:h-[34px]">
            <Image fill src="/logo.png" alt="logo" className="object-contain" />
          </div>
        </Link>
        <Image
          width={28}
          height={28}
          src="/svg/menu.svg"
          alt="menu"
          className="lg:hidden"
        />
        <menu className="hidden xl:w-fit xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </menu>
        <button className="hidden xl:block bg-gray8 px-5 py-3.5 text-sm text-white font-medium rounded-lg cursor-pointer inner-stroke">
          Contact Us
        </button>
      </nav>
    </header>
  );
};

export default Header;
