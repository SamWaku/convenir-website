type Props = {};
import Image from "next/image";
import logo from "../Assets/convenirlogowhite.png";
import Link from "next/link";

const Footer = (props: Props) => {
  return (
    <div className=" bottom-0 md:h-80 md:flex w-full pt-10">
      {" "}
      <div className=" bg-[#4e4e4e] md:w-[34rem] text-white md:grid md:grid-cols-1 md:px-8 ">
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
      <div className=" bg-[#00215B] md:w-[60rem]  text-white md:px-10 md:py-10 ">
        <div className=" md:grid md:grid-cols-3">
          <div>
            <h2>Quick Links</h2>
            <div className=" md:grid md:grid-cols-1 md:pt-4">
              <Link href={"/services"}>Services</Link>
              <Link href={"/works"}>Works</Link>
              <Link href={"/vacancies"}>Vacancies</Link>
              <Link href={"/contacts"}>Contacts</Link>
            </div>
          </div>
          <div>
            <h2>Supported Clients</h2>
            <div className=" md:grid md:grid-cols-1 md:pt-4"></div>
          </div>
          <div>
            <h2>Our News</h2>
            <div className=" md:grid md:grid-cols-1 md:pt-4"></div>
          </div>
        </div>
        <div className=" md:pt-8"> © 2024 Convenir Investments Limited</div>
      </div>
    </div>
  );
};

export default Footer;
