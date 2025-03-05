import React, { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {


  const [open,setOpen] = useState(false)
  const menuclicked = () => {    
    console.log("menuclicked");
    setOpen(!open)
    
  }
  return (
    <nav className="mt-5">
      <div className="md:flex justify-between w-5/6 md:max-w-7xl mx-auto ">
        <div className="flex items-center justify-between mt-2">
          <div>
            <span className="font-semibold text-4xl text-green-500 font-body ">
              fruit
            </span>
            <span className="font-thin text-4xl text-slate-400">shop</span>
          </div>
          <div className="md:hidden mt-2">
            <button onClick={menuclicked}>
              <HiBars3 />
            </button>
          </div>
        </div>
        <div className={`flex md:block justify-center ${open ? "block" : "hidden"}`}>
          <ul className="md:flex md:space-x-8 space-y-8 md:space-y-0">
            <li className="menu border-b-4 border-green-500">
              <a href="#" className="">
                Fruits
              </a>
            </li>
            <li className="menu">
              <a href="#">Vegetables</a>
            </li>
            <li className="menu">
              <a href="#">More</a>
            </li>
            <li className="text-green-500 px-4 py-2">
              <HiOutlineShoppingCart />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
