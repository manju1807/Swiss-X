import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
const Testimonial = () => {
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
      className="min-h-[60vh] min-w-full flex flex-col md:space-y-6 items-center"
      id="testimonials"
    >
      <motion.h1
        ref={ref}
        className="inline-block text-md md:text-xl uppercase font-semibold border-t-[1px] border-pink-200 pt-2 tracking-widest mt-[5rem] md:mt-[7rem]"
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.8,
          delay: 0.6,
        }}
      >
        Testimonials
      </motion.h1>
      <motion.div
        className="flex flex-col md:max-w-[70vw] items-center w-full gap-4 p-8 mb-8 md:flex-row md:mb-0 flex-between"
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.8,
          delay: 0.6,
        }}
      >
        <div className="bg-white w-72 shadow-lg hover:shadow-xl mx-auto rounded-sm p-4">
          <p className="text-gray-600">
            <span className="text-lg font-bold text-indigo-500">“ </span>
            They are the best watches that one acquires, also they are always
            with the latest news and trends, with a very comfortable price and
            especially with the attention you receive.
            <span className="text-lg font-bold text-indigo-500"> ”</span>
          </p>
          <div className="flex items-center mt-4">
            <a href="#" className="relative block">
              <img
                alt="profil"
                src="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div className="flex flex-col justify-between ml-2">
              <span className="text-sm font-semibold text-indigo-500">
                Jean Miguel
              </span>
              <span className="flex items-center text-xs">Banker</span>
            </div>
          </div>
        </div>
        <div className="bg-white w-72 shadow-lg hover:shadow-xl mx-auto rounded-sm p-4">
          <p className="text-gray-600">
            <span className="text-lg font-bold text-indigo-500">“ </span>I
            can&apos;t recommend these watches enough. They&apos;re not only
            stylish and trendy, but they&apos;re also budget-friendly. The
            customer support is top-notch, they go above and beyond to help with
            any inquiries
            <span className="text-lg font-bold text-indigo-500"> ”</span>
          </p>
          <div className="flex items-center mt-4">
            <a href="#" className="relative block">
              <img
                alt="profil"
                src="https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div className="flex flex-col justify-between ml-2">
              <span className="text-sm font-semibold text-indigo-500">
                Ellie
              </span>
              <span className="flex items-center text-xs">Scholar</span>
            </div>
          </div>
        </div>
        <div className="bg-white w-72 shadow-lg hover:shadow-xl mx-auto rounded-sm p-4">
          <p className="text-gray-600 ">
            <span className="text-lg font-bold text-indigo-500">“ </span>I love
            my watches from this brand. They keep me in style with the latest
            trends, and the price won&apos;t break the bank. The customer
            service is fantastic;always responsive and attentive.
            <span className="text-lg font-bold text-indigo-500"> ”</span>
          </p>
          <div className="flex items-center mt-4">
            <a href="#" className="relative block">
              <img
                alt="profil"
                src="https://i.pinimg.com/originals/97/31/02/9731022f0be7c965e880505461643850.jpg"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div className="flex flex-col justify-between ml-2">
              <span className="text-sm font-semibold text-indigo-500">
                John cena
              </span>
              <span className="flex items-center text-xs">CEO WWE</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonial;
