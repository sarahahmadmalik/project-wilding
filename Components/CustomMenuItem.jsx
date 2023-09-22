import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const CustomMenuItem = ({ route, current }) => {
  return (
    <li
      className={` my-8  fontFamily text-[11px] font-[500]  ${
        current === route.path ? "active" : ""
      }`}
    >
      <Link href={route.path}>
        <p>
          <div className="flex flex-col items-center">
          {route.icon}
            <span className="mt-1 text-[#373738]">{route.title}</span>
          </div>
        </p>
      </Link>
     
    </li>
  );
};

export default CustomMenuItem;
