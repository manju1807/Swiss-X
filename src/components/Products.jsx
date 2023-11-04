import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import ProductCard from "./ProductCard";
const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const productData = [
    {
      src: "https://m.media-amazon.com/images/I/61iADen7HML._SL1500_.jpg",
      title: "Cult sport Ranger XR",
      price: "$1500",
    },
    {
      src: "https://m.media-amazon.com/images/I/71FD+ohfJvL._SL1500_.jpg",
      title: "Noise Force Rugged & Sporty",
      price: "$500",
    },
    {
      src: "https://m.media-amazon.com/images/I/61y2VVWcGBL._SL1500_.jpg",
      title: "Fire-Boltt Phoenix",
      price: "$1900",
    },
    {
      src: "https://m.media-amazon.com/images/I/61-u85Od5TL._SL1500_.jpg",
      title: "Fire-Boltt Quest",
      price: "$700",
    },
    {
      src: "https://m.media-amazon.com/images/I/61LeyQw4qbL._SL1500_.jpg",
      title: "Amazfit GTR 3 Pro",
      price: "$1700",
    },
  ];

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
          {productData.map((product, index) => (
            <ProductCard
              key={index}
              src={product.src}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Products;
