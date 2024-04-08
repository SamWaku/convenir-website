import Image from "next/image";
import Footer from "../components/Footer";
import office from "../Assets/entrance.png";
import contactimg from "../Assets/1.png";
import phone from "../Assets/12.png";
import email from "../Assets/13.png";

type Props = {};

const Contacts = (props: Props) => {
  return (
    <div>
      <div>
        <div>
          <div className="md:w-full w-full bg-gray-100 md:h-[12rem]  ">
            <div className=" relative md:text-center md:w-full w-full">
              <div>
                <Image
                  src={contactimg}
                  className=" md:w-full w-[300rem] md:h-[20rem] h-40 object-cover object-center"
                  alt="image"
                />
              </div>
              <h2 className=" md:top-32 top-16 md:left-[36.7rem] left-[8rem] text-center absolute md:text-6xl text-4xl text-slate-700 font-semibold">
                <span className=" text-white">Contact Us</span>
              </h2>
            </div>
          </div>
        </div>

        <div className=" md:pt-40 pt-2">
          <h2 className=" text-center md:text-3xl md:font-semibold text-slate-800 ">
            Company Addresses
          </h2>
          <div className=" md:py-8 py-4 md:grid md:grid-cols-2 md:mx-24">
            <div>
              <p className=" text-center text-lg">Lusaka</p>
              <div>
                <iframe
                  className=" rounded-md"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3846.576291239119!2d28.297087079439038!3d-15.39941677513717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDIzJzU3LjkiUyAyOMKwMTgnMDcuMSJF!5e0!3m2!1sen!2szm!4v1712459538219!5m2!1sen!2szm"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div>
              <h2 className=" text-center text-lg">Choma </h2>
              <div>
                <iframe
                  className=" rounded-md"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3819.2744233103845!2d26.987374079656682!3d-16.812736807525088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDQ4JzQ1LjkiUyAyNsKwNTknMzIuMSJF!5e0!3m2!1sen!2szm!4v1712459853823!5m2!1sen!2szm"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>

        <div>
          <div className=" md:px-52 md:py-8 ">
            <Image className=" rounded-md" src={office} alt="Office" />
          </div>
        </div>

        <div className=" md:grid flex-col md:grid-cols-2 md:gap-8 md:px-20">
          <div className=" border-l-8 border-l-[#dc3545] border md:p-4 shadow-md">
            <p>Address</p>
            <p className="  text-2xl">
              Lusaka Branch: Stand No. 6085 Chituli Road Northmead.
            </p>
            <p className="  text-2xl"> Choma Branch: No. 03 Chodort Estates</p>
          </div>
          <div className=" md:grid md:grid-cols-2">
            <div className=" flex md:gap-2">
              <div className=" md:pt-2 md:w-10 md:h-10">
                <Image src={phone} alt="phone" />
              </div>
              <div>
                {" "}
                <p>Phones</p>
                <div>
                  <p className="  text-lg"> +260 763 885 570</p>
                  <p className="  text-lg"> +260 962 560 378</p>
                </div>
              </div>
            </div>

            <div className=" ">
              <div className=" items-center flex md:gap-2">
                <div>
                  <Image className=" md:w-10 md:h-8" src={email} alt="phone" />
                </div>
                <div>
                  {" "}
                  <p>Email</p>
                  <div>
                    <p className="  text-lg">convenir@yahoo.com</p>
                  </div>
                </div>
              </div>
            </div>
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
