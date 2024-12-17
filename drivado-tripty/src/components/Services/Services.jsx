import React from "react";
import bus from "../../assets/bus.png";
import flight from "../../assets/flight.png";
import bag from "../../assets/bag.png";
import truck from "../../assets/truck.png";
import drop from "../../assets/drop.png";

const Services = () => {
  return (
    <div className="bg-[#F4F6F9]  p-2  font-lato">
      <div className="m-20 items-center mt-[10px]">
        <div className="flex flex-row justify-between items-center mb-12">
          <div className="text-left mx-10">
            <h1 className="text-3xl font-bold flex items-center">
              <span className="text-black">Services</span>
              <span className="text-black-600 font-normal ml-2">We Offer</span>
            </h1>
            <div className="w-16 h-1 bg-[#FB4156] ml-4 mt-2"></div>
          </div>

          <div className="ml-auto mr-[85px]">
  <div className="rounded-full bg-white p-2 w-32 h-32 flex items-center justify-center">
    <img src={truck} alt="truck" className="rounded-full w-[48px] h-[48px]" />
  </div>
</div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[-25px]" >
          <div className="p-6">
            <div>
              <img
                src={bus}
                alt="Warehousing"
                className="w-20 h-20"
              />
            </div>
            <div className="mx-5">
              <h2 className="text-[#FB4156] font-bold mb-2">Warehousing Services</h2>
              <p className="text-gray-500 text-sm">
                A pay-as-you-go solution for: pallet storage, inventory management,
                fulfillment (e.g., pick and pack), in/out-bound solutions, and
                more.
              </p>
            </div>
          </div>

          <div className="p-6">
            <div>
              <img
                src={flight}
                alt="Freight"
                className="w-20 h-20"
              />
            </div>
            <div className="mx-5">
              <h2 className="text-[#FB4156] font-bold mb-2">Global Freight</h2>
              <p className="text-gray-500 text-sm">
                Search and compare the best shipping rates among dozens of trusted
                logistic partners for the last mile delivery and freight.
              </p>
            </div>
          </div>

          <div className="p-6">
            <div>
              <img
                src={bag}
                alt="Packaging"
                className="w-20 h-20"
              />
            </div>
            <div className="mx-5">
              <h2 className="text-[#FB4156] font-bold mb-2">Packaging Solutions</h2>
              <p className="text-gray-500 text-sm">
                Our packaging solutions are optimized for each individual customer
                and are selected based on the customer’s specific needs and
                requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center space-x-4">
          <button className="text-[#FB4156] border border-[#FB4156] py-2 px-4 rounded hover:bg-[#FB4156] hover:text-white transition">
            Request Quote
          </button>
          <button className="bg-[#FB4156] text-white py-2 px-4 rounded hover:bg-[#D0364F] transition">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
