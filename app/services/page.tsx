/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Footer from "../components/Footer";

type Props = {};

const Services = (props: Props) => {
  return (
    <div>
      <div className="">
        <h2 className=" md:text-center text-4xl text-slate-700 md:font-semibold">
          Our Services
        </h2>
        <p className=" md:mx-52 md:text-center md:py-8 md:text-lg">
          Whether it's supplying quality goods, executing engineering and
          construction projects with precision, or managing complex initiatives,
          Convenir Investments Limited is committed to exceeding expectations
          and delivering results that make a difference
        </p>
        <div className=" md:grid md:grid-cols-2 md:mx-52 md:gap-20">
          <div>
            <p className="  md:text-center md:text-2xl">
              {" "}
              General Dealing & Supply
            </p>
            <p className="  md:text-center">
              Your one-stop solution for seamless procurement and reliable
              supply chain management.
            </p>
          </div>
          <div>
            {" "}
            <p className="  md:text-center md:text-2xl">Project Management</p>
            <p className="  md:text-center">
              We ensure seamless project execution from inception to completion.
              We handle every aspect, ensuring effciency, quality, and timely
              delivery.
            </p>
          </div>
          <div>
            <p className="  md:text-center md:text-2xl">Construction</p>
            <p className="  md:text-center">
              We deliver excellence in every project. From design to execution,
              we ensure quality, effciency, and timely completion.
            </p>
          </div>
          <div>
            <p className="  md:text-center md:text-2xl">Engineering</p>
            <p className="  md:text-center">
              We offer innovative solutions for diverse projects. From design to
              implementation, we ensure excellence in every aspect of
              engineering.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
