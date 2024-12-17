import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import scan from "../../assets/scan.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faQrcode, 
  faDownload, 
  faUser, 
  faEnvelope, 
  faPhoneAlt 
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; 

const BookingConfirmation = () => {
  const [bookingData, setBookingData] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const storedBookingData = localStorage.getItem("bookingData");

    if (storedBookingData) {
      const parsedData = JSON.parse(storedBookingData);
      setBookingData(parsedData); 
    } else {
      console.error("No booking data found in localStorage");
    }
  }, []);

  if (!bookingData) {
    return <div>Loading...</div>;
  }

  const handleManageBooking = () => {
    navigate('/managebooking'); 
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl overflow-hidden">
          <div className="bg-green-100 text-center py-6">
            <div className="inline-block">
              <div className="animate-bounce inline-flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full">
                <FontAwesomeIcon icon={faCheckCircle} size="2x" />
              </div>
            </div>
            <h2 className="text-lg font-semibold text-green-600 mt-3">
              Thank you for your payment. Your booking is CONFIRMED.
            </h2>
          </div>

          <div className="p-6">
            <div className="mb-6 bg-gray-100 rounded-md p-4">
              <p className="text-gray-600 text-sm">
                <strong>Dear {bookingData.bookingDetails.passengerDetails.firstName},</strong>
                <br />
                Thank you for booking with us. You will receive driver details at least 1 hour prior to pick-up time. You can find the summary of your booking below.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-gray-900 font-semibold mb-2">Invoice</h3>
              <p className="text-red-500">
                • {bookingData.bookingDetails.origin}
              </p>
              <p className="text-gray-600">
                ◦ {bookingData.bookingDetails.destination}
              </p>
              <p className="text-gray-500 text-sm">
                {bookingData.bookingDetails.date}
              </p>
            </div>

            <div className="py-4 border-b">
              <h3 className="text-gray-900 font-semibold mb-2">
                Passenger Details
              </h3>
              <p className="text-gray-700">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                {bookingData.bookingDetails.passengerDetails.firstName} {bookingData.bookingDetails.passengerDetails.lastName}
              </p>
              <p className="text-gray-600">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                {bookingData.bookingDetails.passengerDetails.email}
              </p>
              <p className="text-gray-600">
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                {bookingData.bookingDetails.passengerDetails.contactNumber}
              </p>
            </div>

            <div className="py-4 flex justify-between items-center">
              <div>
                <h3 className="text-gray-900 font-semibold mb-2">
                  Vehicle Details
                </h3>
                <p className="text-blue-600 font-bold">{bookingData.bookingDetails.carType}</p>
              </div>
              <p className="text-red-600 font-semibold text-lg">
                Total <span className="ml-2">{bookingData.bookingDetails.totalPrice}</span>
              </p>
            </div>

            <div className="border-t pt-4 flex items-center justify-between">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                 <img src={scan} alt="scan" />
                </div>
                <p className="text-gray-500 text-xs mt-1">
                  Scan to view in any device
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <button className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600">
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />
                  Download Invoice
                </button>
                <button 
                  onClick={handleManageBooking} 
                  className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
                >
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />
                  Manage Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingConfirmation;
