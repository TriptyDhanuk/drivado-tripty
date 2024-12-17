import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50  text-gray-700 overflow-hidden">
      <div className="container mx-10 p-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
       
          <div>
            <h2 className="font-semibold text-gray-900 mb-2">Drivado</h2>
            <p className="text-sm leading-6">
              Drivado delivers an unparalleled customer service through
              dedicated customer teams, engaged people working in an agile
              culture, and a global footprint.
            </p>
          </div>

         
          <div>
  <h3 className="font-semibold text-black mb-2 font-[Lato]">Explore</h3>
  <ul className="text-sm space-y-2 font-[Lato]">
    <li>
      <a href="/" className="text-[#374151]  hover:text-red-500 transition">
        About Us
      </a>
    </li>
    <li>
      <a href="/" className="text-[#374151]  hover:text-red-500 transition">
        Our Warehouses
      </a>
    </li>
    <li>
      <a href="/" className="text-[#374151]  hover:text-red-500 transition">
        Blog
      </a>
    </li>
    <li>
      <a href="/" className="text-[#374151]  hover:text-red-500 transition">
        News and Media
      </a>
    </li>
  </ul>
</div>

<div>
  <h3 className="font-semibold text-black mb-2 font-[Lato]">Legal</h3>
  <ul className="text-sm space-y-2 font-[Lato]">
    <li>
      <a href="/" className="text-[#374151]  hover:text-red-500 transition">
        Terms
      </a>
    </li>
    <li>
      <a href="/" className="text-[#374151] hover:text-red-500 transition">
        Privacy
      </a>
    </li>
  </ul>
</div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Social Media</h3>
            <div className="flex space-x-8">
              <a href="/" className="text-red-500 hover:text-gray-900 transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="text-red-500 hover:text-gray-900 transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="text-red-500 hover:text-gray-900 transition">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="/" className="text-red-500 hover:text-gray-900 transition">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

       
        <div className="border-t border-gray-200 my-6"></div>

       
        <div className="text-center">
          <p className="text-red-500 font-semibold">Drivado</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
