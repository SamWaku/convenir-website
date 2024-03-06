import React from "react";

type Props = {};

const TopNavbar = (props: Props) => {
  return (
    <div className="fixed top-0 z-50 w-full lg:px-20 px-4 py-4 bg-white bg-opacity-80 backdrop-blur-md flex justify-between">
      <div className=" flex gap-1 text-sm md:text-base text-slate-700">
        <p>Support</p>
        <p>Partners</p>
        <p>Careers</p>
      </div>
      <div className=" flex gap-1 text-sm md:text-base ">
        <p>t</p>
        <p>f</p>
        <p>ln</p>
        <p>yt</p>
      </div>
    </div>
  );
};

export default TopNavbar;
