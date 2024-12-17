import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import v1 from "../../assets/v1.png";
import v2 from "../../assets/v2.png";
import v3 from "../../assets/v3.png";
import v4 from "../../assets/v4.png";
import v5 from "../../assets/v5.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faArrowDown, faClock,faSuitcaseRolling, faCalendarAlt, faUserFriends, faRoad, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import {
 
  faCheckCircle,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';


const BookingCab = () => {
  const navigate = useNavigate(); 
  const apiResponse = useSelector(state => state.cab.apiResponse);
  const carOptions = apiResponse?.carOptions || [];
  const paxCount = apiResponse?.paxCount;

  const [addresses, setAddresses] = useState({
    origin: '',
    destination: ''
  });

  useEffect(() => {
    console.log("carOptions:", carOptions);
    console.log("apiResponse:", apiResponse);

    const storedAddresses = localStorage.getItem('origin_destination');
    
    if (storedAddresses) {
      const [origin, destination] = storedAddresses.split(' destination: ');
      
      setAddresses({
        origin: origin.replace('origin: ', '').trim(),
        destination: destination ? destination.trim() : ''
      });
    }
  }, [carOptions, apiResponse]);


  const carImages = [v1, v2, v3, v4, v5];

  
  
  const handleBookNowClick = (car) => {
    console.log("Car object:", car); 
    
   
    localStorage.setItem('origin', addresses.origin);
    localStorage.setItem('destination', addresses.destination);
  
 
    const price = car.price || 'N/A'; 
  
  
    const carImage = carImages[carOptions.indexOf(car)];
  

    localStorage.setItem('selectedCarImage', carImage);
  
   
    navigate("/passengerinfo", {
      state: {
        car,
        addresses,
        paxCount,
        price,  
        selectedCar: car.name,
        carImage, 
      }
    });
  };
  
  
  
  
  
  return (
    <>
      <Navbar />
      <div className="bg-white p-4 md:p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
  {Array.isArray(carOptions) && carOptions.length > 0 ? (
    carOptions.map((car, index) => (
      <div
        key={index}
        className="flex flex-col md:flex-row items-center border p-4 rounded-lg shadow-md hover:shadow-lg transition relative"
      >
        <img
          src={carImages[index % carImages.length] || '/default-image.jpg'}
          alt={car.name || 'Car'}
          className="w-full md:w-56 h-auto object-cover rounded-md"
        />

        <div className="flex-grow px-6 text-center md:text-left">
          <h3 className="text-lg font-bold mb-1">{car.name || 'Car Name'}</h3>
          <p className="text-gray-600 text-sm mb-2">
            {car.details || 'No details available'}
          </p>

          <div className="flex justify-center md:justify-start items-center space-x-4 mb-2 text-sm text-gray-600">
            <span className="flex items-center">
              <FontAwesomeIcon
                icon={faUserFriends}
                className="text-gray-500 mr-1"
              />
              {paxCount || 'N/A'} Pax
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon
                icon={faSuitcaseRolling}
                className="text-gray-500 mr-1"
              />
              {car.luggage || 'N/A'} Luggage
            </span>
          </div>

          <div className="flex justify-center md:justify-start items-center space-x-4 mb-3 text-sm text-green-600">
            <span className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500 mr-1"
              />
              Free Cancellation
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500 mr-1"
              />
              Free Waiting time
            </span>
          </div>

          <p className="text-xs text-gray-500 mb-2">
            Includes VAT, Gratuities, Meet & Greet services
          </p>

          <p className="text-2xl font-bold text-red-500 mb-3">
            USD {car.price || 'N/A'}
          </p>
        </div>

        <div className="absolute bottom-0 right-0">
        <button
  className="text-white px-6 py-2 shadow-md transition flex items-center justify-center"
  style={{
    background: "linear-gradient(to right, #FB4156 0%, #F4394E 50%, #BD0015 100%)",
    borderRadius: "10px 0px 10px 0px",
  }}
  onClick={() => handleBookNowClick(car)}
>
  BOOK NOW
  <span className="ml-2">
    <FontAwesomeIcon icon={faArrowRight} />
  </span>
</button>

        </div>
      </div>
    ))
  ) : (
    <p className="text-center text-gray-600">No cars available</p>
  )}
</div>


          <div className="space-y-6">
   
          <div className="p-6 rounded-lg border-2 border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Booking Details</h2>

        <div className="space-y-4">
       
          <div className="flex items-start space-x-3">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-red-500 mt-1"
            />
            <div>
              <p className="text-gray-900 text-sm font-bold">
                {addresses.origin || "Origin Address"}
              </p>
              <p className="text-sm text-gray-500">
                {apiResponse?.time || "13:45 PM"} 
                <FontAwesomeIcon icon={faCalendarAlt} className="mx-2" />
                {apiResponse?.date || "15 Aug 2024"}
                <span className="ml-2">
                  <FontAwesomeIcon icon={faUserFriends} className="mr-1" />
                  {paxCount || "NA"}
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start">
            <FontAwesomeIcon icon={faArrowDown} className="text-red-400" />
          </div>

          <div className="flex items-start space-x-3">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-green-500 mt-1"
            />
            <div>
              <p className="text-gray-900 text-sm font-bold">
                {addresses.destination || "Destination Address"}
              </p>
              <p className="text-sm text-gray-500">
                <FontAwesomeIcon icon={faRoad} className="mr-2" />
                {apiResponse?.distanceKm || "115 km"} 
                <span className="ml-4">
                  <FontAwesomeIcon icon={faSyncAlt} className="mr-1" />
                  Oneway
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Inclusions For All</h2>
        <ul className="text-sm text-gray-600 space-y-3">
          <li className="flex items-start">
            <span className="text-red-500 mr-2">✔</span>
            Free 60 minutes waiting time after flight landing for airport pickups, 15 minutes waiting time for all other pickups.
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">✔</span>
            Free cancellation up to 24 hours prior for both oneway transfer and hourly disposals.
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">✔</span>
            Flight No./Train No. is mandatory for airport/station pickup and dropoff.
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">✔</span>
            Vehicle images are for reference only and similar quality vehicles may be provided.
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">✔</span>
            Guest/luggage limitations must be adhered to for safety reasons.
          </li>
        </ul>
      </div>
    </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingCab;
