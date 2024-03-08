import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <>
      <Hero />
      <AboutUs />
    </>
  );
};

export default Homepage;
