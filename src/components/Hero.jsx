import img1 from "../assets/img.png";
import { motion } from "framer-motion";
const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      className="min-h-screen max-h-screen max-w-screen min-w-full top-0 left-0"
    >
      <div className="flex flex-col-reverse items-start md:items-center md:grid md:grid-cols-5 md:max-w-[70vw] md:min-w-[70vw] min-w-[100vw] md:mx-auto">
        <motion.div
          className="min-w-full px-6 py-8 md:px-[6rem] md:pt-[8rem] md:grid md:col-span-3"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >
          <h1 className="text-3xl font-bold uppercase">
            Noise Nova 1.46&quot;
            <span className="block">smartwatch</span>
          </h1>
          <p className="text-sm py-6 md:text-[1rem] md:max-w-md">
            Latest arrival of the new imported watches of the B720 series with a
            modern and resistant design.{" "}
            <span
              className="block py-6 text-xl font-semibold"
              style={{ color: "hsl(306.9, 100%, 84.7%)" }}
            >
              $1245
            </span>
          </p>
          <div className="flex flex-row gap-4 py-3">
            <button
              className="text-white bg-gray-700 p-3 px-4 text-sm shadow-lg hover:bg-slate-600 hover:text-pink-200"
              onClick={() => scrollToSection("products")}
            >
              Discover
            </button>
            <button className="text-white bg-gray-700 uppercase p-3 text-sm shadow-lg hover:bg-slate-600 hover:text-pink-200">
              Add to Cart
            </button>
          </div>
        </motion.div>
        <motion.div
          className="min-w-full flex justify-end flex-row md:grid md:col-span-2"
          variants={{
            hidden: { opacity: 0, y: -75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >
          <div className=" absolute flex flex-row text-sm rotate-270 text-gray-500 top-[16rem] md:top-[20rem] md:left-[9.5rem] left-[-3.7rem] cursor-pointer">
            <motion.div
              className="flex flex-row gap-2 md:gap-4"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.4,
              }}
            >
              <p className="hover:text-pink-200">Facebook</p>
              <p className="hover:text-pink-200">Twitter</p>
              <p className="hover:text-pink-200">Instagram</p>
            </motion.div>
          </div>
          <div
            className=" md:min-h-[42.5rem] min-h-[27rem] md:max-w-md basis-3/5 md:basis-4/5 flex items-end justify-center "
            style={{ backgroundColor: "hsl(306.9, 100%, 84.7%)" }}
          >
            <img
              src={img1}
              alt="homeimg"
              className="w-[35rem] md:w-[25rem] rotate-2 lg:object-contain sm:object-none md:pb-16 pb-12"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
