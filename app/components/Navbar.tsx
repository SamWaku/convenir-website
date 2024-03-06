"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

const Navbar = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-14 z-50 w-full lg:px-20 px-4 py-4 bg-[#ffe8e7] bg-opacity-80 backdrop-blur-md">
      <nav className=" flex justify-between w-full items-center">
        <div>
          <h2 className="text-[#ca2124] md:text-2xl">Convenir</h2>
        </div>
        <div className="">
          <ul className=" lg:flex gap-10 hidden font-semibold items-center">
            <li>Home</li>
            <li>Services</li>
            <li>Pages</li>
            <li>News</li>
            <li>Contacts</li>
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
                <a className="hover:text-[#dc3545] relative">
                  <a href="/dashboard">Home</a>
                </a>
              </li>
              <li>
                <div>
                  <button className=" hover:text-[#dc3545] peer">
                    <a href={"/home"}>Services</a>
                  </button>
                </div>
              </li>
              <li>
                <a className=" hover:text-[#dc3545]">
                  <a href={"/home"}>Pages</a>
                </a>
              </li>
              <li>
                <a className=" hover:text-[#dc3545]">
                  <a href={"/home"}>News</a>
                </a>
              </li>
              <li>
                <a className=" hover:text-[#dc3545]">
                  <a href={"/home"}>Contacts</a>
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
