import React from 'react';

const Banner = () => {
  return (
    <div className="bg-white py-8 text-black text-center">
      <p className="px-2 py-2 rounded-2xl bg-gray-200 w-44 mx-auto mb-4">
        personal growth
      </p>
      <h1 className="text-8xl font-extrabold">
        Feel more <br />
        human Everyday
      </h1>
      <button className="bg-[#D2F0A3] rounded-4xl px-6 py-4 my-6 hover:bg-[#92a870] cursor-default">
        Request demo
      </button>
    </div>
  );
};

export default Banner;