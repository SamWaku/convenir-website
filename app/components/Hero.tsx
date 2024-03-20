import Image from "next/image";
import banner from "../Assets/Conenir cover.png";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className=" relative">
      <div className=" relative md:h-[28rem] h-80 ">
        <Image
          className=" md:object-cover absolute md:h-[30rem] h-80"
          src={banner}
          alt="banner"
        />
        <div className=" absolute md:text-7xl text-5xl font-bold md:pt-20 pt-12 md:pl-20 pl-6">
          <p className=" text-white">
            We are a partner that you can rely on. <br />
            <span className=" font-medium"> Your success is our success</span>
          </p>
        </div>
      </div>
      <div className=" absolute top-0 pt-72 md:flex md:px-72 mx-10">
        {" "}
        <div className=" flex md:pt-40 md:mx-0 mx-2 md:pb-0 pb-4">
          <div className="  text-center p-2 md:p-4 bg-[#00215B] text-white">
            <p className=" md:text-2xl md:font-semibold font-semibold">20+</p>
            <p className=" text-lg">Completed Projects and Orders</p>
          </div>
          <div className="  text-center p-2 md:p-4 bg-[#D2153D] text-white">
            <p className=" md:text-2xl md:font-semibold font-semibold">3+</p>
            <p className=" text-lg">Years of Experience</p>
          </div>
        </div>
        <div className=" shadow-lg bg-white md:p-4 p-2 border-red-600 border-t-4 md:py-2 ">
          <p className=" text-2xl md:text-left text-center">We offer</p>
          <div className=" md:py-6 py-2">
            <div>
              <h2 className=" text-lg font-medium md:text-left text-center">
                {" "}
                General Dealing & Supply{" "}
              </h2>
              <p></p>
            </div>
            <div className=" md:py-6 py-4">
              <h2 className=" text-lg font-medium md:text-left text-center">
                {" "}
                Engineering & Construction{" "}
              </h2>
              <p></p>
            </div>
            <div>
              <h2 className=" text-lg font-medium md:text-left text-center">
                Project Management
              </h2>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
