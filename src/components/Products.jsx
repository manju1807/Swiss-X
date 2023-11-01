import { AiOutlineShopping } from "react-icons/ai";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <section
      className="min-h-screen max-w-screen min-w-full overflow-auto"
      id="products"
    >
      <motion.div
        ref={ref}
        className="flex flex-col md:space-y-6 items-center relative md:max-w-[70vw] top-0 left-0 md:left-[15vw] mt-12 md:mt-16"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.8,
          delay: 0.4,
        }}
      >
        <h1 className="mt-8 inline-block text-md md:text-xl uppercase font-semibold border-t-[1px] border-pink-200 pt-2 tracking-widest">
          Products
        </h1>
        <div className="w-full md:px-[10rem] md:gap-12 p-6 grid gap-8 grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 max-h-[100vh]">
          <div className="relative border-gray-200 border shadow-xl hover:shadow-2xl  flex flex-col items-center justify-center p-5">
            <img
              src="https://m.media-amazon.com/images/I/61iADen7HML._SL1500_.jpg"
              alt="Featured img-1"
              className="w-[80%] rotate-6 lg:object-contain sm:object-none py-6"
            />
            <h1 className="text-sm font-semibold">
              cult.sport Ranger XR 1.43&quot;
              <span className="block text-center text-pink-300">$1500</span>
            </h1>
            <div className="bg-gray-700 py-2 px-[0.40rem] relative top-[0.8rem] left-[4.3rem] md:top-[1.3rem] md:left-[6.4rem] text-white">
              <AiOutlineShopping />
            </div>
          </div>
          <div className="relative border-gray-200 border shadow-xl hover:shadow-2xl  flex flex-col items-center justify-center p-5">
            <img
              src="https://m.media-amazon.com/images/I/71FD+ohfJvL._SL1500_.jpg"
              alt="Featured img-1"
              className="w-[80%] rotate-6 lg:object-contain sm:object-none py-6"
            />
            <h1 className="text-sm font-semibold">
              Noise Force Rugged & Sporty
              <span className="block text-center text-pink-300">$500</span>
            </h1>
            <div className="bg-gray-700 py-2 px-[0.40rem] relative top-[0.8rem] left-[4.3rem] md:top-[1.3rem] md:left-[6.4rem] text-white">
              <AiOutlineShopping />
            </div>
          </div>
          <div className="relative border-gray-200 border shadow-xl hover:shadow-2xl  flex flex-col items-center justify-center p-5">
            <img
              src="https://m.media-amazon.com/images/I/61y2VVWcGBL._SL1500_.jpg"
              alt="Featured img-1"
              className="w-[80%] rotate-6 lg:object-contain sm:object-none py-6"
            />
            <h1 className="text-sm font-semibold">
              Fire-Boltt Phoenix
              <span className="block text-center text-pink-300">$1900</span>
            </h1>
            <div className="bg-gray-700 py-2 px-[0.40rem] relative top-[1.4rem] left-[4.3rem] md:top-[1.3rem] md:left-[6.4rem] text-white">
              <AiOutlineShopping />
            </div>
          </div>
          <div className="relative border-gray-200 border shadow-xl hover:shadow-2xl  flex flex-col items-center justify-center p-5">
            <img
              src="https://m.media-amazon.com/images/I/61-u85Od5TL._SL1500_.jpg"
              alt="Featured img-1"
              className="w-[80%] rotate-6 lg:object-contain sm:object-none py-6"
            />
            <h1 className="text-sm font-semibold">
              Fire-Boltt Quest
              <span className="block text-center text-pink-300">$700</span>
            </h1>
            <div className="bg-gray-700 py-2 px-[0.40rem] relative top-[1.4rem] left-[4.3rem] md:top-[1.3rem] md:left-[6.4rem] text-white">
              <AiOutlineShopping />
            </div>
          </div>
          <div className="relative border-gray-200 border shadow-xl hover:shadow-2xl  flex flex-col items-center justify-center p-5">
            <img
              src="https://m.media-amazon.com/images/I/61LeyQw4qbL._SL1500_.jpg"
              alt="Featured img-1"
              className="w-[80%] rotate-6 lg:object-contain sm:object-none py-6"
            />
            <h1 className="text-sm font-semibold">
              Amazfit GTR 3 Pro
              <span className="block text-center text-pink-300">$1700</span>
            </h1>
            <div className="bg-gray-700 py-2 px-[0.40rem] relative top-[1.4rem] left-[4.3rem] md:top-[1.3rem] md:left-[6.4rem] text-white">
              <AiOutlineShopping />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Products;
