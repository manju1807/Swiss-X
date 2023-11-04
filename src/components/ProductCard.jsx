import { AiOutlineShopping } from "react-icons/ai";
const ProductCard = ({ src, title, price }) => {
  return (
    <>
      <div className="relative border-gray-100 border shadow-xl hover:shadow-2xl  flex flex-col items-center justify-center p-5">
        <img
          src={src}
          alt="Featured img-1"
          className="w-[80%] rotate-6 lg:object-contain sm:object-none py-6"
        />
        <h1 className="text-sm font-semibold">
          {title}
          <span className="block text-center text-pink-300 ">{price}</span>
        </h1>
        <div className="bg-gray-700 py-2 px-[0.40rem] absolute top-[12.9rem] left-[9.6rem] md:top-[15.65rem] md:left-[12.7rem] text-white">
          <AiOutlineShopping />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
