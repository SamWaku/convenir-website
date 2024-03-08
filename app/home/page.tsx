import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import Services from "../components/Services";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div className=" ">
      <Hero />
      <AboutUs />
      <Services />
    </div>
  );
};

export default Homepage;
