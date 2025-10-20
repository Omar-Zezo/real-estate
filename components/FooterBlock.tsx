import Link from "next/link";
import React from "react";

const FooterBlock = () => {
  return (
    <div className="flex flex-col gap-6 shrink-0 pb-5 max-md:border-b-1 border-[#262626]">
      <h5 className="text-gray60 text-lg font-medium">Home</h5>
      <ul className="flex flex-col gap-4 text-white text-base font-medium">
        <li>
          <Link href="#">Hero Section</Link>
        </li>
        <li>
          <Link href="#">Features</Link>
        </li>
        <li>
          <Link href="#">Properties</Link>
        </li>
        <li>
          <Link href="#">Testimonials</Link>
        </li>
        <li>
          <Link href="#">FAQ’s</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterBlock;
