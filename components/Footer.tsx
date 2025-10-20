import Image from "next/image";
import Link from "next/link";
import FooterBlock from "./FooterBlock";
import Icon from "./Icon";
import Journey from "./Journey";

const Footer = () => {
  return (
    <footer className="lg:mt-[72px] mt-20">
      <Journey />
      <div className="container max-lg:px-4 py-[50px] xl:py-20 flex max-xl:flex-col gap-[50px] xl:gap-20 ">
        <div className="xl:w-[326px] flex flex-col gap-5 xl:gap-6">
          <Link href="#">
            <Image width={114} height={34} src="/logo.png" alt="logo" />
          </Link>
          <div className="md:w-[305px] flex items-center gap-1.5 px-5 py-3.5 rounded-lg inner-stroke">
            <Image width={20} height={20} src="/svg/mail.svg" alt="icon" />
            <input
              type="text"
              placeholder="Enter Your Email"
              className="placeholder:text-gray60 text-sm outline-none border-none font-medium flex-1"
            />
            <Image
              width={24}
              height={24}
              src="/svg/send.svg"
              alt="icon"
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="flex-1 flex max-xl:flex-wrap max-xl:gap-5 justify-evenly xl:justify-between">
          <FooterBlock />
          <FooterBlock />
          <FooterBlock />
          <FooterBlock />
          <FooterBlock />
        </div>
      </div>
      <div className="bg-gray10">
        <div className="container px-4 py-5 xl:py-3 flex max-md:flex-col items-center justify-between">
          <div className="flex max-md:flex-col items-center gap-2.5 xl:gap-5 py-2.5 text-white text-sm font-medium max-xl:order-2">
            <p>@2023 Estatein. All Rights Reserved.</p>
            <Link href="#">Terms & Conditions</Link>
          </div>

          <div className="flex items-center gap-2">
            <Icon icon="/svg/facebook.svg" name="facebook" link="#" />
            <Icon icon="/svg/linkedin.svg" name="linkedin" link="#" />
            <Icon icon="/svg/twitter.svg" name="twitter" link="#" />
            <Icon icon="/svg/youtube.svg" name="youtube" link="#" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
