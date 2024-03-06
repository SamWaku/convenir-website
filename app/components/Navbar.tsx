"use client";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="fixed top-0 z-50 w-full lg:px-20 px-4 py-5 bg-[#ffe8e7] bg-opacity-80 backdrop-blur-md">
      <nav className=" flex justify-between w-full items-center">
        <h2 className="text-[#ca2124]">Convenir</h2>
      </nav>
    </div>
  );
};

export default Navbar;
