import Image from "next/image";
import Footer from "../components/Footer";
import office from "../Assets/entrance.png";

type Props = {};

const Contacts = (props: Props) => {
  return (
    <div>
      <div>
        <div>
          <div className="md:w-full bg-gray-100 md:h-[12rem] ">
            <div className=" bg-service-img1 md:text-center  absolute md:top-32 md:left-[30rem] md:mx-36">
              {" "}
              <h2 className=" md:text-6xl text-slate-700 font-semibold">
                <span className="">Contact</span>
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div className=" md:px-52 md:py-8 ">
            <Image className=" rounded-md" src={office} alt="Office" />
          </div>
          <div>
            <div>
              <h2>Company Addresses</h2>
              <div></div>
              <div></div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contacts;
