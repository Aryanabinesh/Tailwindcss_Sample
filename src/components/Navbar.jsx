import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="mt-5">
      <div className="flex justify-between max-w-7xl mx-auto ">
      <div className=" ">
        <span className="font-semibold text-4xl text-green-500 font-body ">fruit</span>
        <span className="font-thin text-4xl text-slate-400">shop</span>
      </div>
      <div>
        <ul className="flex space-x-8">
          <li>
            <a href="#">fruits</a>
          </li>
          <li>
            <a href="#">vegetables</a>
          </li>
          <li>
            <a href="#">cart</a>
          </li>
          <li>
            <HiOutlineShoppingCart />
          </li>
        </ul>
      </div>
    </div>
    </nav>
    
  );
};

export default Navbar;
