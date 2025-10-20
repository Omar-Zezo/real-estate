"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => {
  const pathname = usePathname();

  const isActive = pathname === href;
  return (
    <Link
      href="#"
      className={`${
        isActive ? "px-5 py-3 bg-gray8 rounded-lg inner-stroke" : undefined
      } text-white text-sm font-medium`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
