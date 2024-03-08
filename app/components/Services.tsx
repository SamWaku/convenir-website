import Image from "next/image";
import pic1 from "../Assets/professional-architect-woman-standing-outdoors-NDAEJH5 (1).jpg";
import pic2 from "../Assets/crane-and-building-construction-site-on-background-BPZXL3M.png";
import pic3 from "../Assets/industrial-landscape-building-crane-against-the-bl-8T3EXGK.png";
import pic4 from "../Assets/new-build-houses-3HYUECX (1).png";

type Props = {};

const Services = (props: Props) => {
  return (
    <div className=" md:pt-6  pt-8 md:h-52 h-52 ">
      <div className=" md:flex">
        <div className=" ">
          <Image src={pic1} alt="photo" />
        </div>
        <div className=" relative ">
          <Image
            className=" md:h-full h-80 w-full object-fill"
            src={pic2}
            alt="photo"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#00215B] opacity-50"></div>
          <div className=" absolute md:top-40 top-32  md:px-4 px-4">
            <p className=" text-white md:text-3xl text-2xl font-semibold">
              Research & Analysis
            </p>
            <p className="mt-2 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              esse sapiente hic!
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            className="md:h-full h-80 w-full object-cover"
            src={pic3}
            alt="photo"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#D2153D] opacity-50"></div>
          <div className="absolute md:top-40 top-32 md:px-4 px-4  z-10">
            <p className="text-white md:text-3xl text-2xl font-semibold">
              Industry Development
            </p>
            <p className="mt-2 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              esse sapiente hic!
            </p>
          </div>
        </div>
        <div className=" relative ">
          <Image
            className=" md:h-full h-80 w-full object-cover"
            src={pic4}
            alt="photo"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#00215B] opacity-50"></div>
          <div className=" absolute md:top-40 top-32  md:px-4 px-4">
            <p className=" text-white md:text-3xl text-2xl font-semibold ">
              Product Launch
            </p>
            <p className="mt-2 text-white">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              esse sapiente hic!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
