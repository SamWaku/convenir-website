"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../Assets/Logo Convenir_Vector File.pdf.png";
import Link from "next/link";

type Props = {};
export interface IImg {
  //   image: HTMLImageElement;
  src: string;
  className?: string;
}

const Navbar = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="  border-b fixed bg-white top-0 z-50 w-full lg:px-20 px-4 py-2  bg-opacity-80 backdrop-blur-md">
      <nav className=" flex justify-between w-full items-center md:pt-4 pt-2">
        <Link href={"/"}>
          <Image className=" md:w-full w-44 md:h-8" src={logo} alt="picture" />
        </Link>
        <div className="">
          <ul className=" lg:flex gap-10 hidden font-semibold items-center">
            <Link href={"home"}>Home</Link>
            <Link href={"services"}>Services</Link>
            <Link href={"works"}>Works</Link>
            <Link href={"vacancies"}>Vacancies</Link>
            <Link href={"contacts"}>Contacts</Link>
          </ul>
        </div>
        <div className=" lg:hidden pl-20 flex top-10">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </span>
            )}
          </button>
          <motion.div
            animate={
              open
                ? { translate: 0, opacity: 1 }
                : { translate: "100%", opacity: 0 }
            }
            transition={{ type: "tween" }}
            className=" absolute right-0 top-[100%] bg-[#ffe8e7] shadow-md h-screen w-2/3 bg-opacity-[95%] backdrop-blur-sm"
          >
            <ul className=" grid gap-4 mt-4 p-4 text-left items-start justify-start w-full">
              <li>
                <div className="hover:text-[#dc3545] relative">
                  <Link href="/dashboard">Home</Link>
                </div>
              </li>
              <li>
                <div>
                  <button className=" hover:text-[#dc3545] peer">
                    <Link href={"/services"}>Services</Link>
                  </button>
                </div>
              </li>
              <li>
                <a className=" hover:text-[#dc3545]">
                  <Link href={"/works"}>Works</Link>
                </a>
              </li>
              <li>
                <a className=" hover:text-[#dc3545]">
                  <Link href={"/vacancies"}>Vacanies</Link>
                </a>
              </li>
              <li>
                <a className=" hover:text-[#dc3545]">
                  <Link href={"/contacts"}>Contacts</Link>
                </a>
              </li>
              <li></li>
            </ul>
          </motion.div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
