import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Banner2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <section className=" md:min-h-[40vh] max-w-screen min-w-full">
      <motion.div
        ref={ref}
        className=" md:min-h-[40vh] relative md:max-w-[70vw] top-0 left-0 md:left-[15vw]"
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.6,
          delay: 0.4,
        }}
      >
        <img
          src="https://www.gonoise.com/cdn/shop/files/image_2023_10_03T13_28_36_296Z_e998bd2a-abc7-42a9-9d5e-aad529923148_1900x.png?v=1696412226"
          alt="Featured img-1"
          className="w-[100%] lg:object-contain sm:object-none"
        />
      </motion.div>
    </section>
  );
};

export default Banner2;
