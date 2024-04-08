import React from "react";
import PrimaryButton from "./PrimaryButton";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div className=" md:pt-40 md:mx-20 mx-4 pt-[20rem]">
      <div className=" md:grid md:grid-cols-2 flex-col gap-8">
        <div>
          <p className=" text-lg font-medium text-slate-800">ABOUT US</p>

          <p className=" md:py-4 py-4 text-justify">
            CONVENIR Investments Limited is a multidisciplinary company that was
            established in 2021 with a the goal to provide specialized services
            in the areas of General Dealing and Supply, Engineering and
            Construction, and Project Management.
          </p>
          <p className=" py-2 text-justify">
            {" "}
            Through collaboration, integrity, and relentless pursuit of
            excellence, we strive to make a meaningful difference in the world,
            one solution at a time
          </p>
          {/* <PrimaryButton
            label={"Learn More ->"}
            className=" bg-red-600 text-white md:text-lg md:font-medium md:p-2 p-2 rounded-md"
          /> */}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AboutUs;
