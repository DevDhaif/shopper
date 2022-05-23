import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();

  const handleNavigate = () => {
    navigate(`${location.pathname}${linkUrl}`);
    console.log(location.pathname);
  };
  return (
    <div
      onClick={handleNavigate}
      className={`${
        size === "large" ? "h-96" : "h-60"
      } min-w-[30%] relative overflow-hidden group flex items-center flex-auto  justify-center shadow-lg  mx-4 mt-0 mb-4`}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className={`absolute z-10 bg-contain bg-no-repeat group-hover:scale-125 transition-all duration-[2000ms] ease-in-out  bg-center  w-full h-full `}></div>
      <div className='z-20 flex flex-col justify-center h-20 px-12 py-12 text-center text-gray-700 transition-all duration-1000 bg-white border border-black cursor-pointer group-hover:bg-opacity-80 font-robert content bg-opacity-70 items -center'>
        <h1 className='mb-2 text-xl font-bold uppercase title '>{title}</h1>
        <span className='font-light uppercase'>Shop now</span>
      </div>
    </div>
  );
};

export default MenuItem;
