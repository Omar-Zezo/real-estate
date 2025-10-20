import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  title: string;
  desc: string;
  link: string;
  linkTxt: string;
  children: ReactNode;
}

interface Item {
  img: string;
  title: string;
  des: string;
  link: string;
  options: [{ icon: string; title: string }];
  price: string;
}

const Section = ({ title, desc, link, linkTxt, children }: Props) => {
  return (
    <section className="relative container mt-20 lg:mt-[120px] flex flex-col gap-10 lg:gap-[60px]">
      <img
        src="/stars.png"
        alt="stars"
        className="absolute -left-2 lg:-left-2.5 -top-[19px] lg:-top-[30px] max-lg:w-[45px]"
      />
      <div className="flex max-lg:flex-col justify-between gap-1.5 lg:gap-[150px]">
        <div className="flex flex-col gap-2.5">
          <h2 className="text-white text-[28px] lg:text-[38px] font-semibold">
            {title}
          </h2>
          <p className="text-gray60 text-sm lg:text-base font-medium">{desc}</p>
        </div>
        <Link
          href={link}
          className="hidden lg:block self-end shrink-0 px-5 py-3.5 bg-gray10 text-white text-sm font-medium rounded-lg inner-stroke"
        >
          {linkTxt}
        </Link>
      </div>

      <div className="flex flex-col gap-10">
        <div>{children}</div>
      </div>
    </section>
  );
};

export default Section;
