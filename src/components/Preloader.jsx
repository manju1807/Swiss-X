import { HashLoader } from "react-spinners";

const Preloader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen min-w-full bg-white fixed top-0 left-0 z-50 space-y-12">
      <HashLoader className="flex" color="#c304d1" loading={true} size={150} />
      <p className="flex mt-[20px] text-md italic">Loading...</p>
    </div>
  );
};

export default Preloader;
