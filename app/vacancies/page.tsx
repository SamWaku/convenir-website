import React from "react";
import Footer from "../components/Footer";

type Props = {};

const Vacancies = (props: Props) => {
  return (
    <div>
      {" "}
      <div>
        <h2 className=" md:py-10 py-6 text-center md:text-slate-700 md:text-5xl text-4xl md:font-semibold">
          Vacancies
        </h2>
        <div>
          <p className=" text-center">There are currently no vacancies</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Vacancies;
