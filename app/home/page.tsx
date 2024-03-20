import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div className=" ">
      <Hero />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Homepage;
