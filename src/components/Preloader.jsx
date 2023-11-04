import { GridLoader } from "react-spinners";

const Preloader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen min-w-full bg-white fixed top-0 left-0 z-50 space-y-12">
      <GridLoader className="flex" color="#f98aff" loading={true} size={40} />
      <p className="flex mt-[20px] text-md italic">Loading...</p>
    </div>
  );
};

export default Preloader;
