import React from "react";

type Props = {};

const Vacancies = (props: Props) => {
  return (
    <div>
      {" "}
      <div>
        <h2 className=" md:py-10 md:text-center md:text-slate-700 md:text-5xl md:font-semibold">
          Vacancies
        </h2>
        <div>
          <p className=" md:text-center">There are currently no vacancies</p>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
