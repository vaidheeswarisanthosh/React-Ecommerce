import React from "react";

const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="bg-purple-400 text-white p-3">
        <div className="container mx-auto flex justify-between">
      <h1 className="text-2xl font-bold"> STORE</h1>
      <button onClick={openCart} className="bg-purple-800 px-4 py-2 rounded focus:outline-none">
        Cart ({cartCount})
      </button>
      </div>
    </nav>
  );
};

export default Navbar;
