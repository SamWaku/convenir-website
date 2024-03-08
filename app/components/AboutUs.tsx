import React from "react";
import PrimaryButton from "./PrimaryButton";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div className=" md:pt-40 md:mx-20 mx-4 pt-[30rem]">
      <div className=" md:grid md:grid-cols-2 flex-col gap-8">
        <div>
          <p className=" md:text-lg font-medium text-slate-800">ABOUT US</p>
          <p className=" md:py-4 py-2 md:text-4xl text-2xl font-semibold ">
            With our knowledge we guarentee success
          </p>
          <p className=" md:py-2 py-2">Lorem ipsum dolor sit amet.</p>
          <p className=" md:py-4 py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
            laboriosam explicabo sit dicta aliquam ut, saepe maxime esse, soluta
            nihil officiis perferendis dolorem magni non debitis aspernatur enim
            obcaecati velit?
          </p>
          <PrimaryButton
            label={"Learn More ->"}
            className=" bg-red-600 text-white md:text-lg md:font-medium md:p-2 p-2 rounded-md"
          />
        </div>
        <div>1</div>
      </div>
    </div>
  );
};

export default AboutUs;
