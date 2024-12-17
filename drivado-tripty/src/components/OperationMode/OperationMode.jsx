import React from "react";
import op1 from "../../assets/op1.png";
import op2 from "../../assets/op2.png";
import op3 from "../../assets/op3.png";
import truck from "../../assets/truck.png";
import bubbletruck from "../../assets/bubbletruck.png";

const OperationMode = () => {
  return (
    <div className="bg-white-600">
      <div className="max-w-6xl mx-auto px-6">
      
      <div className="text-left mb-12 flex flex-row items-center justify-start">
  <div className="mr-4 mx-10">
    <div className="rounded-full bg-white p-2 w-full h-full flex items-center justify-center mt-2">
      <img src={bubbletruck} alt="truck" className="rounded-full w-[140px] h-[140px]" />
    </div>
  </div>
 
</div>
<div className="flex-1 text-center "> 
  <h1 className="text-3xl font-bold mt-[-60px]">
    <span className="text-black ">Operation</span>{" "}
    <span className="text-gray-600 font-normal">Mode</span>
  </h1>
  <div className="w-16 h-1 bg-red-500 mx-auto mt-2"></div>
</div>



        <div className="relative m-20 mt-[0]">
        
        <div className="flex flex-col md:flex-row items-center mb-16">
  <div className="md:w-1/2 text-center md:text-left">
    <div className="mx-10 whitespace-normal w-[300px]">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold mr-2">
          1
        </div>
        <h2 className="text-red-500 text-lg font-bold">Connect</h2>
      </div>
      <p className="text-gray-600 text-sm">
        You're currently running your store on Shopify, WooCommerce, or any
        other platform. As a first step, you'll connect your store with our
        platform.
      </p>
    </div>
  </div>
  <div className="md:w-1/2 mt-6 md:mt-0">
    <img
      src={op1}
      alt="op1"
      className=" w-[440px] h-[300px] mx-auto p-4"  
    />
  </div>
</div>



<div className="flex flex-col md:flex-row items-center justify-center mb-16">
  <div className="md:w-1/2 flex justify-center md:justify-start">
    <img
      src={op2}
      alt="op2"
      className="w-[300px] h-[300px]"  
    />
  </div>
  <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
    <div className="mx-40 whitespace-normal w-[300px]">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold mr-2">
          2
        </div>
        <h2 className="text-red-500 text-lg font-bold">Store</h2>
      </div>
      <p className="text-gray-600 text-sm">
        Then, you can send us your inventory and the fun begins. We'll choose
        a delivery strategy together so your fulfillment is not interrupted.
      </p>
    </div>
  </div>
</div>


<div className="flex flex-col md:flex-row-reverse items-center justify-center mb-16">
  <div className="md:w-1/2 mt-6 md:mt-0">
    <img
      src={op3}
      alt="op3"
      className="w-[300px] h-[300px] mx-auto p-4"  
    />
  </div>
  <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
    <div className="mx-10 whitespace-normal w-[300px]">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold mr-2">
          3
        </div>
        <h2 className="text-red-500 text-lg font-bold">Ship</h2>
      </div>
      <p className="text-gray-600 text-sm">
        We pick, pack and ship all incoming orders directly from our warehouses
        until 12 pm on the same day.
      </p>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default OperationMode;
