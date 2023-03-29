import { ReactNode } from "react";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import Logo from "../Logo";
import { breadcrumbs } from "./utils";

interface Props {
  children: ReactNode;
}
const SideBar = ({ children }: Props) => {
  return (
    <div className="fixed flex w-full h-screen">
      <aside className="top-0 left-0 z-40 w-72">
        <div className="flex flex-col justify-between h-full pt-5 overflow-y-auto bg-[#1F2937]">
          <div>
            <div className="w-8 ml-6">
              <Logo />
            </div>
            <ul className="p-4 space-y-4">
              {breadcrumbs.map(({ label, href, icon }, index) => (
                <li key={index}>
                  <Link
                    className="flex items-center px-4 py-2 text-white rounded-md hover:bg-[#374151] gap-4"
                    href={href}
                  >
                    <FontAwesomeIcon
                      className="w-4 text-[#5E6673]"
                      icon={icon as IconProp}
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 bg-[#374151] flex gap-4 text-sm items-center">
            <Image
              alt="Avatar"
              className="w-10 h-10 rounded-full"
              height={40}
              src="https://res.cloudinary.com/dml0ec1xe/image/upload/v1680041227/zhwbrxrbmhe5xminqbb8.png"
              width={40}
            />
            <div>
              <p className="font-semibold text-[#FFFFFF]">Federico Villa</p>
              <p className="font-extralight text-[#D1D5DB]">View profile</p>
            </div>
          </div>
        </div>
      </aside>
      <div className="p-4 bg-[#F3F4F6] flex-1 overflow-scroll">{children}</div>
    </div>
  );
};

export default SideBar;
