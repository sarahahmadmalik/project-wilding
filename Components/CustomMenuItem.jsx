import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const CustomMenuItem = ({ route, current }) => {
  return (
    <li
      className={` my-8  fontFamily text-[13px] font-[500]  ${
        current === route.path ? "active" : ""
      }`}
    >
      <Link className="icon" href={route.path}>
        <p>
          <div className="flex flex-col items-center">
          {route.icon}
            <span className="mt-1 text-white">{route.title}</span>
          </div>
        </p>
      </Link>
     
    </li>
  );
};

export default CustomMenuItem;
