import img1 from "../assets/Fire-Boltt Talk 2 Pro Ultra.png";
import img2 from "../assets/Noise Force Rugged & Sporty 1.32.png";
import img3 from "../assets/Noise Halo Plus Elite Edition.png";
import img4 from "../assets/71QBKlOMCAL._SL1500_.png";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Featured = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="flex flex-col min-h-screen" id="featured">
      <div ref={ref} className="min-w-full flex flex-col mt-12 md:mt-16">
        <motion.div
          className="flex justify-center"
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >
          <h1 className="mt-8 inline-block text-xl uppercase font-semibold border-t-[1px] border-pink-200 pt-2 tracking-wider">
            Featured
          </h1>
        </motion.div>
        <motion.div
          className="relative flex flex-col md:gap-4 md:flex-row md:justify-center md:max-w-[70vw] top-0 left-0 md:left-[15vw] py-6 md:py-12 overflow-y-auto md:overflow-visible"
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
        >
          <div className="border-gray-50 border shadow-xl hover:shadow-2xl md:min-w-[20rem] min-h-fit md:max-h-[31rem] m-4 mx-8 px-2">
            <div className="uppercase text-sm rotate-270 absolute top-[8rem] left-[1.1rem] md:top-[10rem] md:left-[-1.1rem] md:text-[1rem] px-3 py-1 bg-pink-300 tracking-wider">
              Sale
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={img1}
                alt="Featured img-1"
                className="w-[16rem] rotate-12 lg:object-contain sm:object-none py-6"
              />
              <h1 className="py-6 font-semibold uppercase text-md tracking-tighter">
                Fire-Boltt Talk 2 Pro Ultra
                <span className="block text-center py-2">$250</span>
              </h1>
              <button className="text-white bg-gray-700 uppercase p-3 mb-6  md:mb-6 text-sm shadow-lg hover:bg-slate-600 hover:text-pink-200">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="border-gray-50 border shadow-xl hover:shadow-2xl md:min-w-[20rem] min-h-fit md:max-h-[31rem] m-4 mx-8 px-2">
            <div className="uppercase text-sm rotate-270 absolute top-[40rem] left-[1.1rem] md:top-[10rem] md:left-[23.9rem] md:text-[1rem] px-3 py-1 bg-pink-300 tracking-wider">
              Sale
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={img2}
                alt="Featured img-2"
                className="w-[16rem] rotate-6 lg:object-contain sm:object-none py-6"
              />
              <h1 className="py-6 font-semibold uppercase text-md tracking-tighter">
                Noise Force Rugged & Sporty
                <span className="block text-center py-2">$250</span>
              </h1>
              <button className="text-white bg-gray-700 uppercase p-3 mb-6 md:mb-6 text-sm shadow-lg hover:bg-slate-600 hover:text-pink-200">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="border-gray-50 border shadow-xl hover:shadow-2xl md:min-w-[20rem] min-h-fit md:max-h-[31rem] m-4 mx-8 px-2">
            <div className="uppercase text-sm rotate-270 absolute top-[72rem] left-[1.1rem] md:top-[10rem] md:left-[48.9rem] md:text-[1rem] px-3 py-1 bg-pink-300 tracking-wider">
              Sale
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={img3}
                alt="Featured img-3"
                className="w-[16rem] rotate-12 lg:object-contain sm:object-none py-6"
              />
              <h1 className="py-6 font-semibold uppercase text-md tracking-tighter">
                Noise Halo Plus Elite
                <span className="block text-center py-2">$350</span>
              </h1>
              <button className="text-white bg-gray-700 uppercase p-3 mb-6 md:mb-2 text-sm shadow-lg hover:bg-slate-600 hover:text-pink-200">
                Add to Cart
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col-reverse justify-center items-center min-h-[90vh] mt-6 md:mt-10">
        <div className="flex justify-center md:max-w-[70rem] md:min-w-[70rem] min-h-[90vh] flex-col-reverse gap-6 md:grid md:grid-cols-2 ">
          <motion.div
            className="px-6 py-14 flex items-center"
            variants={{
              hidden: { opacity: 0, x: -75 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: 0.8,
              delay: 2,
            }}
          >
            <div
              className="h-[15rem] w-[15rem] md:h-[28rem] md:w-[28rem] border border-gray-400 border-solid"
              style={{ backgroundColor: "hsl(306.9, 100%, 84.7%)" }}
            >
              <div className=" h-full w-full relative top-[-3rem] left-[3rem] bg-gray-50 md:left-[5rem] md:top-[-5rem] md:p-10 p-4 border border-gray-400 border-solid">
                <img
                  src={img4}
                  alt="Best seller"
                  className="w-full rotate-12 lg:object-contain sm:object-none"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col justify-center items-center space-y-8"
            variants={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: 0.8,
              delay: 2,
            }}
          >
            <h1 className="text-sm uppercase inline-block text-md md:text-xl font-semibold border-t-[1px] border-pink-300 pt-2 tracking-widest">
              Our Story
            </h1>
            <div className="space-y-4 md:space-y-10 py-4 px-7">
              <div className="md:space-y-4">
                <h1 className="text-2xl font-semibold md:text-3xl">
                  Best Selling Watch of
                  <span className="block"> this Year </span>
                </h1>
                <p className="text-[.9rem] md:text-[1rem] italic font-semibold text-gray-600 md:max-w-sm">
                  The latest Best Selling Watches of this year are available in
                  various locations all across the globe!
                </p>
              </div>
              <button
                className="text-white bg-gray-700 p-3 px-4 text-sm shadow-lg hover:bg-slate-600 hover:text-pink-200"
                onClick={() => scrollToSection("products")}
              >
                Discover
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
