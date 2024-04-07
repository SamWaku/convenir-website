/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import chinacorp from "../Assets/chinacorp.png";
import mulungushi from "../Assets/mulungushi.png";
import napsa from "../Assets/napsa.png";
import skytrail from "../Assets/skytrails.png";
import swasco from "../Assets/swasco.png";
import zesco from "../Assets/zesco.png";
import Footer from "../components/Footer";

type Props = {};

const Works = (props: Props) => {
  return (
    <div>
      <div>
        <h2 className=" md:py-10 md:text-center md:text-slate-700 md:text-5xl md:font-semibold">
          Completed Projects and Orders
        </h2>
      </div>
      <div className=" md:grid md:grid-cols-3 md:mx-20 md:gap-10 md:py-10">
        <div className=" md:text-center">
          <div>
            <Image src={zesco} alt="zesco" />
          </div>
          <div>
            <h2 className=" text-3xl md:font-medium text-slate-700">
              Zesco Ltd
            </h2>
            <p className=" md:text-center">Construction of Over-Head Lines</p>
          </div>
        </div>
        <div className=" text-center">
          <div className=" md:text-center md:items-center md:align-items-center ">
            <Image src={swasco} alt="swasco" />
          </div>
          <div>
            <h2 className=" md:text-center text-3xl md:font-medium text-slate-700">
              SWASCO
            </h2>
            <div className=" md:text-justify">
              <li>Supply & delivery of Chemicals</li>
              <li>Supply & delivery of Stationery</li>
              <li>Supply & delivery of Steel</li>
              <li>Supply & delivery of Tool, Spares,</li>
            </div>
          </div>
        </div>
        <div className=" md:text-center">
          <div>
            <Image src={napsa} alt="napsa" />
          </div>
          <div>
            <h2 className=" text-3xl md:font-medium text-slate-700">NAPSA</h2>
            <p>Supply & delivery of Stationery</p>
          </div>
        </div>
        <div className=" md:text-center">
          <div>
            <Image src={mulungushi} alt="mulungushi" />
          </div>
          <div>
            <h2 className=" text-3xl md:font-medium text-slate-700">
              Mulungushi Village Complex Ltd
            </h2>
            <p>Routine Repair & Maintenance</p>
          </div>
        </div>
        <div className=" md:text-center">
          <div>
            <Image src={chinacorp} alt="china" />
          </div>
          <div>
            {" "}
            <h2 className=" text-3xl md:font-medium text-slate-700">
              China Geo Engineering Corporation (CRGC)
            </h2>
            <p>Supply of Project Sign Boards</p>
          </div>
        </div>
        <div className=" md:text-center">
          <div>
            <Image src={skytrail} alt="skytrail" />
          </div>
          <div>
            {" "}
            <h2 className=" text-3xl md:font-medium text-slate-700">
              Sky Trails Ltd
            </h2>
            <p>Renovation & Repair Works</p>
          </div>
        </div>
      </div>
      <div>
        <p className=" md:px-20">
          Convenir Investments serves a diverse clientele, including businesses,
          government agencies, and non-protsi. Our tailored solutions and
          commitment to excellence have earned us their trust and loyalty. From
          small businesses to large corporations, we prioritize our clients'
          success in every service we provide.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Works;
