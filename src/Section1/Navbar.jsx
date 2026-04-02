import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-14">
      <h3 className="bg-black rounded-full text-white text-sm px-4 py-2 font-semibold">
        TARGET AUDIENCE
      </h3>
      <div className="flex gap-5 bg-gray-100  text-sm rounded-full px-4 py-2 font-semibold">
        <button>DIGITAL </button>
        <button>BANKING </button>
        <button>PLATFORM </button>
      </div>
    </div>
  );
};

export default Navbar;
