import NavBar from "../components/Navbar";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import New from "../components/New";
import Products from "../components/Products";
import Testimonial from "../components/Testimonial";
import Banner2 from "../components/Banner2";
import { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <NavBar />
          <Hero />
          <New />
          <Featured />
          <Products />
          <Testimonial />
          <Banner2 />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
