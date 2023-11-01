import { useState, useEffect } from "react";
import { IoWatch } from "react-icons/io5";
import { BiSolidMoon } from "react-icons/bi";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`bg-${
        scrolled ? "white" : "transparent"
      }fixed flex flex-row min-w-full max-w-[100vw] z-50 text-[1.1rem] md:min-h-[5rem] min-h-[3.5rem] md:text-lg md:flex md:flex-row justify-between items-center md:px-[15rem] px-[1.5rem] shadow-sm`}
    >
      <motion.div
        className="flex flex-row space-x-6"
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.8,
          delay: 0.4,
        }}
      >
        <div className="flex items-center space-x-2">
          <a
            href="#home"
            className="flex flex-row items-center space-x-2"
            onClick={() => scrollToSection("home")}
          >
            <IoWatch />
            <span className="font-heading">Swiss-X</span>
          </a>
        </div>
        <div className="md:flex md:items-center">
          {!menuOpen && (
            <ul className="md:flex flex-row space-x-4 cursor-pointer hidden">
              <li
                className="hover:text-pink-300 hover:font-semibold"
                onClick={() => scrollToSection("home")}
              >
                Home
              </li>
              <li
                className="hover:text-pink-300 hover:font-semibold"
                onClick={() => scrollToSection("featured")}
              >
                Featured
              </li>
              <li
                className="hover:text-pink-300 hover:font-semibold"
                onClick={() => scrollToSection("products")}
              >
                Products
              </li>
              <li
                className="hover:text-pink-300 hover:font-semibold"
                onClick={() => scrollToSection("testimonials")}
              >
                Testimonials
              </li>
            </ul>
          )}
        </div>
      </motion.div>
      <div className="flex flex-row items-center space-x-4 pr-2 cursor-pointer">
        <BiSolidMoon />
        <PiShoppingBagOpenFill />
        <div className="md:hidden">
          {menuOpen ? (
            <>
              <IoClose
                onClick={toggleMenu}
                className="transition-all duration-500"
              />
              <div className="bg-white min-w-full min-h-screen flex flex-col justify-center items-center absolute top-[3.5rem] right-0">
                <ul className="flex flex-col space-y-6 text-xl cursor-pointer md:hidden">
                  <li
                    className="hover:text-pink-300 hover:font-semibold"
                    onClick={() => scrollToSection("home")}
                  >
                    Home
                  </li>
                  <li
                    className="hover:text-pink-300 hover:font-semibold"
                    onClick={() => scrollToSection("featured")}
                  >
                    Featured
                  </li>
                  <li
                    className="hover:text-pink-300 hover:font-semibold"
                    onClick={() => scrollToSection("products")}
                  >
                    Products
                  </li>
                  <li
                    className="hover:text-pink-300 hover:font-semibold"
                    onClick={() => scrollToSection("testimonials")}
                  >
                    Testimonials
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <LuMenu
              onClick={toggleMenu}
              className="transition-all duration-500"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
