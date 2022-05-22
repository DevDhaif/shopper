import React from "react";

export const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div
      className={`${
        size === "large" ? "h-96" : "h-60"
      } min-w-[30%] relative overflow-hidden group flex items-center flex-auto  justify-center shadow-lg  mx-4 mt-0 mb-4`}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className={`absolute z-10 bg-contain bg-no-repeat group-hover:scale-125 transition-all duration-[2000ms] ease-in-out  bg-center  w-full h-full `}></div>
      <div className='z-20 flex flex-col justify-center h-20 px-12 py-12 text-center text-gray-700 bg-white border border-black cursor-pointer font-robert content bg-opacity-70 items -center'>
        <h1 className='mb-2 text-xl font-bold uppercase title '>{title}</h1>
        <span className='font-light uppercase'>Shop now</span>
      </div>
    </div>
  );
};

export default MenuItem;
