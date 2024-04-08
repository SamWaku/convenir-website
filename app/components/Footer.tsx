type Props = {};
import Image from "next/image";
import logo from "../Assets/convenirlogowhite.png";
import Link from "next/link";

const Footer = (props: Props) => {
  return (
    <div className=" bottom-0 md:h-80 md:flex w-full pt-10">
      {" "}
      <div className=" bg-[#4e4e4e] md:w-[34rem] md:h-0 h-[17rem] md:text-left text-center text-white  md:grid md:grid-cols-1 md:px-8  ">
        <div className=" md:px-0 px-20 pt-8  md:py-0 py-4 md:pl-10">
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
        <div className=" md:pl-10 pl-0">
          {" "}
          <p>Lusaka Branch: Stand No. 6085 Chituli Road Northmead.</p>
          <p> Choma Branch: No. 03 Chodort Estates</p>
        </div>
      </div>
      <div className=" bg-[#00215B] md:w-[60rem] md:h-0 h-[16rem] md:text-left text-center  text-white md:px-10 md:py-10 py-4 ">
        <div className=" md:grid md:grid-cols-3 ">
          <div>
            <h2 className=" md:text-base text-2xl">Quick Links</h2>
            <div className=" grid grid-cols-1 md:pt-4">
              <Link href={"/services"}>Services</Link>
              <Link href={"/works"}>Works</Link>
              <Link href={"/vacancies"}>Vacancies</Link>
              <Link href={"/contacts"}>Contacts</Link>
            </div>
          </div>
          <div>
            <h2 className=" md:text-base text-2xl">Supported Clients</h2>
            <div className=" md:grid md:grid-cols-1 md:pt-4"></div>
          </div>
          <div>
            <h2 className=" md:text-base text-2xl">Our News</h2>
            <div className=" md:grid md:grid-cols-1 md:pt-4"></div>
          </div>
        </div>
        <div className=" md:pt-8"> © 2024 Convenir Investments Limited</div>
      </div>
    </div>
  );
};

export default Footer;
