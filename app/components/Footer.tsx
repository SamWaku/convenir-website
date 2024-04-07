type Props = {};
import Image from "next/image";
import logo from "../Assets/convenirlogowhite.png";

const Footer = (props: Props) => {
  return (
    <div className=" bottom-0 md:h-96 md:flex w-full pt-10">
      {" "}
      <div className=" bg-[#4e4e4e] text-white md:grid md:grid-cols-1 md:px-8 ">
        <div className=" pt-8 md:pl-10">
          <Image src={logo} className=" w-52" alt="logo" />
        </div>
        <div className=" md:pl-10">
          <p>Contact Us</p>
          <div>
            <p> Phone: +260 763 885 570</p>
            <p> Phone: +260 962 560 378</p>
            <p> Email: convenir@yahoo.com</p>
          </div>
        </div>
        <div className=" md:pl-10">
          {" "}
          <p>Lusaka Branch: Stand No. 6085 Chituli Road Northmead.</p>
          <p> Choma Branch: No. 03 Chodort Estates</p>
        </div>
      </div>
      <div className=" bg-[#00215B] md:px-[30.5rem] py-40 "></div>
    </div>
  );
};

export default Footer;
