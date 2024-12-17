import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Burger from "../../assets/Burger.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-3"> 
      <div className="container mx-auto flex justify-between items-center">
        <div style={{ width: "200px", height: "50px",marginTop:"6px",marginLeft:"60px"}}> 
          <img
            src={logo}
            alt="logo"
            style={{
              width: "80%",
              height: "70%",
              objectFit: "contain",
            }}
          />
        </div>

        <div className="block lg:hidden" onClick={handleMenuToggle}>
          <button className="text-white ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

      
        <div className="flex justify-between items-center">
  <button className="rounded-full text-[#A1A1AA] bg-[#1f2937] text-sm mr-4 border border-[#A1A1AA] hover:border-red-500 hover:ring-2 hover:ring-red-500">
    Client Login
  </button>
  <img src={Burger} alt="burger" className="mr-6" />
</div>

      </div>
    </nav>
  );
};

export default Navbar;
