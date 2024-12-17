import React, { useState, useEffect } from "react";
import {
  faCar,
  faCalendarAlt,
  faClock,
  faUser,
  faMapMarkerAlt,
  faRoute,
  faPhone,
  faEnvelope,
  faBell,
  faSignOutAlt,
  faHome,
  faChartBar,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../../assets/profile.jpeg";

const ManageBooking = () => {
  const [bookings, setBookings] = useState([]);


  useEffect(() => {
    const storedData = localStorage.getItem("bookingData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const message = parsedData.message; 
      const bookingDetails = parsedData.bookingDetails; 

     
      setBookings([{ ...bookingDetails, message }]);
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">

      <div className="w-1/5 bg-white border-r shadow-md flex flex-col justify-between">
        <div>
          <h1 className="text-red-600 font-bold text-2xl p-6">drivado</h1>
          <ul>
            <li className="text-gray-600 p-4 hover:bg-gray-100 cursor-pointer flex items-center">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </li>
            <li className="text-gray-600 p-4 bg-blue-100 text-blue-600 font-bold cursor-pointer flex items-center">
              <FontAwesomeIcon icon={faCar} className="mr-2" />
              Manage Booking
            </li>
            <li className="text-gray-600 p-4 hover:bg-gray-100 cursor-pointer flex items-center">
              <FontAwesomeIcon icon={faChartBar} className="mr-2" />
              Analytics
            </li>
            <li className="text-gray-600 p-4 hover:bg-gray-100 cursor-pointer flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Messages <span className="ml-2 text-red-500">2</span>
            </li>
            <li className="text-gray-600 p-4 hover:bg-gray-100 cursor-pointer flex items-center">
              <FontAwesomeIcon icon={faBell} className="mr-2" />
              Notifications <span className="ml-2 text-red-500">2</span>
            </li>
            <li className="text-gray-600 p-4 hover:bg-gray-100 cursor-pointer flex items-center">
              <FontAwesomeIcon icon={faCog} className="mr-2" />
              Settings
            </li>
          </ul>
        </div>
        <div className="p-4 text-gray-600 hover:bg-gray-100 cursor-pointer flex items-center">
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
          Logout
        </div>
      </div>


      <div className="w-4/5 flex flex-col">
 
        <div className="bg-white shadow-md p-4 flex justify-between items-center">
          <h2 className="text-gray-700 font-semibold">All Booking</h2>
          <div className="flex items-center space-x-4">
            <span className="text-gray-500">1 / {bookings.length}</span>
            <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
             src={profile}
             className="w-full h-full object-cover"
             />
          </div>

            <span className="text-gray-600">Tripty Dhanuk</span>
          </div>
        </div>

   
        <div className="p-4 space-y-4 overflow-y-auto">
          {bookings.map((booking, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-4 rounded-lg flex justify-between"
            >
        
              <div className="space-y-2 text-gray-600 text-sm">
                <div>
                  <span className="font-semibold text-gray-800">Booking ID:</span>{" "}
                  {booking.bookingId || "N/A"}
                </div>
                <div className="w-[400px]">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-blue-500 mr-2"
                  />
                  <span className="font-semibold text-sm">Pickup Location:</span>{" "}
                  {booking.origin || "N/A"}
                </div>
                <div className="w-[400px]">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-red-500 mr-2"
                  />
                  <span className="font-semibold text-sm">Dropoff Location:</span>{" "}
                  {booking.destination || "N/A"}
                </div>
                <div>
                  <FontAwesomeIcon icon={faUser} className="mr-2 text-sm" />
                  Passenger:{" "}
                  {booking.passengerDetails
                    ? `${booking.passengerDetails.firstName} ${booking.passengerDetails.lastName}`
                    : "N/A"}
                </div>
                <div>
                  <FontAwesomeIcon icon={faRoute} className="mr-2 text-sm" />
                  Pax Count: {booking.paxCount || "N/A"}
                </div>
              </div>

        
              <div className="space-y-2 text-gray-600 text-sm">
                <div>
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                  Travel Date: {booking.date || "N/A"}
                </div>
                <div>
                  <FontAwesomeIcon icon={faClock} className="mr-2" />
                  Booking Status: {booking.message || "N/A"}
                </div>
                <div>
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  Contact:{" "}
                  {booking.passengerDetails
                    ? booking.passengerDetails.contactNumber
                    : "N/A"}
                </div>
              </div>

          
              <div className="flex flex-col items-center justify-center">
              <img
  src={localStorage.getItem('selectedCarImage') || "https://via.placeholder.com/120"}
  alt="Vehicle"
  className="w-46 mt-[-20px]"
/>

                <span className="text-green-600 font-bold">
                  {booking.carType || "N/A"}
                </span>
                <span className="text-red-500 font-semibold text-lg">
                  {booking.totalPrice || "N/A"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageBooking;
