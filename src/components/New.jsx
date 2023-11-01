import img1 from "../assets/img.jpg";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const New = () => {
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
        <img
          src={img1}
          alt="Featured img-1"
          className="w-[100%] lg:object-contain sm:object-none"
        />
      </motion.div>
    </section>
  );
};

export default New;
