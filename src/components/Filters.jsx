import React from "react";
import { useState } from "react";

const Filters = () => {
  const [filter, setFilter] = useState(1);
  return (
    <section className="my-10 py-3 w-3/5  md:w-4/6 mx-auto flex flex-col md:flex-row justify-around">
      <button
        onClick={() => {
          setFilter(1);
        }}
        className= {`px-16 py-2  border rounded-full border-slate-400 transform hover:scale-110 duration-100 my-3 md:my-0 m-2 ${filter === 1 ? 'bg-green-400 text-white' : 'text-slate-500'} `}
      >
        Latest
      </button>
      <button
        onClick={() => {
          setFilter(2);          
        }}
        className= {`px-16 py-2  border rounded-full border-slate-400 transform hover:scale-110 duration-100 my-3 md:my-0 m-2  ${filter === 2 ? 'bg-green-400 text-white' : 'text-slate-500'} `}
      >
        Best Seller
      </button>
      <button
        onClick={() => {
          setFilter(3);
        }}
        className= {`px-16 py-2  border rounded-full border-slate-400 transform hover:scale-110 duration-100 my-3 md:my-0 m-2 ${filter === 3 ? 'bg-green-400 text-white' : 'text-slate-500'} `}
      >
        Special
      </button>
    </section>
  );
};

export default Filters;
