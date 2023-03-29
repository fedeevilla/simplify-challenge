import { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";

import Logo from "../Logo";
import { breadcrumbs } from "./utils";

interface Props {
  children: ReactNode;
}

const NavBar = ({ children }: Props) => (
  <div>
    <div className="bg-[#1F2937] flex justify-between border-b border-b-gray-700 ">
      <div className="flex items-center gap-5">
        <div className="w-8 ml-6">
          <Logo />
        </div>
        <div className="flex items-center p-4 4gap-">
          {breadcrumbs.map(({ label, href }, index) => (
            <Link
              key={index}
              className="flex items-center px-4 py-2 text-white rounded-md hover:bg-[#374151]"
              href={href}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 p-2 pr-4">
        <svg
          fill="none"
          height="20px"
          stroke="gray"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          width="20px"
        >
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
        </svg>
        <Image
          alt="Avatar"
          className="w-10 h-10 rounded-full"
          height={40}
          src="https://res.cloudinary.com/dml0ec1xe/image/upload/v1680041227/zhwbrxrbmhe5xminqbb8.png"
          width={40}
        />
      </div>
    </div>
    <div className="bg-[#1F2937] h-60">
      <div className="px-8 py-4">
        <h1 className="py-4 text-3xl font-semibold text-white">Dashboard</h1>
      </div>
    </div>
    <div className="relative px-4 py-2 mx-8 bg-white -top-32 rounded-xl">
      {children}
    </div>
  </div>
);

export default NavBar;
