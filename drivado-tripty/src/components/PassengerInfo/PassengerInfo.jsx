import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setApiResponse } from "../../Reducer/cabSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import map from "../../assets/map.png";
import car1 from "../../assets/car1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'; 
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  contactNumber: Yup.string()
    .required("Contact number is required")
    .matches(/^[0-9]{10}$/, "Contact number must be 10 digits"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  flightNumber: Yup.string().optional(),
  notes: Yup.string().optional(),
  salutation: Yup.string().required("Please select a salutation"),
});

const PassengerInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { car, addresses, paxCount, price, selectedCar, carImage } = useLocation().state || {};

  const [isPassenger, setIsPassenger] = useState(true);

  const handleConfirmBooking = async (values) => {
    const { firstName, lastName, contactNumber, email, flightNumber, notes } = values;

    if (!car) {
      console.error("No car data found!");
      return;
    }

    const requestBody = {
      carType: car.name,
      origin: addresses.origin,
      destination: addresses.destination,
      date: new Date().toISOString().split("T")[0],
      currency: "INR",
      paxCount: paxCount || 1,
      passengerDetails: {
        firstName,
        lastName,
        contactNumber,
        email,
      },
    };

    try {
      const response = await fetch("https://assignment-booking.onrender.com/api/confirmBooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log("API Response:", data);

      dispatch(setApiResponse(data));

      localStorage.setItem('bookingData', JSON.stringify(data));

      navigate("/bookingconfirmation");
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center">
        <div className="mx-20 rounded-lg flex w-full m-10">
          <div className="w-[580px] h-[440px] p-6 rounded-md border border-gray-300 ">
            <h2 className="text-lg font-bold mb-2">{selectedCar || "Loading..."}</h2>

            <div
              className="bg-gray-100 rounded-lg p-4 flex items-center justify-between relative"
              style={{ height: "200px", width: "100%" }}
            >
              <div
                className="w-full h-full bg-cover bg-center rounded"
                style={{ backgroundImage: `url(${map})` }}
              >
                <div className="absolute top-0 right-0 p-4">
                  <img
                    src={carImage || car1}
                    alt="Car"
                    className="w-full h-full rounded"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-gray-700 mt-4">
              <div className="flex items-center mb-4">
                <span className="text-green-500 flex items-center mr-2 text-sm whitespace-normal w-[260px]">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                  {addresses ? addresses.origin : "Loading..."}
                </span>

                <span className="text-red-500 flex items-center text-sm whitespace-normal w-[260px] mx-10">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                  {addresses ? addresses.destination : "Loading..."}
                </span>
              </div>
            </div>

            <hr className="my-4 border-gray-300 mt-1" />

            <div className="flex justify-between text-gray-700 mt-4">
              <div className="text-md font-bold ">
                <span>Total Price</span>
              </div>
              <div className="text-lg font-bold text-red-500">
                {price ? `${price.toLocaleString()}` : "Loading..."}
              </div>
            </div>

            <p className="text-gray-400 text-xs mt-4">
              Includes VAT, Gratuities, Meet & Greet services
            </p>
          </div>

          <Formik
            initialValues={{
              salutation: '',
              firstName: '',
              lastName: '',
              contactNumber: '',
              email: '',
              flightNumber: '',
              notes: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleConfirmBooking}
          >
            {({ setFieldValue, values }) => (
              <div className="p-6 border border-gray-200 rounded-lg bg-white max-w-lg mx-auto">
                <h2 className="text-2xl font-semibold mb-6 text-black">Passenger Details</h2>

                <div className="flex items-center mb-4">
                  <label className="mr-4 text-gray-500 font-medium">Are you the passenger?</label>

                  <label className="flex items-center mr-6">
                    <input
                      type="radio"
                      name="passenger"
                      checked={isPassenger}
                      onChange={() => setIsPassenger(true)}
                      className="w-5 h-5 accent-[#FB4156] cursor-pointer"
                    />
                    <span className="ml-2 text-gray-600">Yes</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="passenger"
                      checked={!isPassenger}
                      onChange={() => setIsPassenger(false)}
                      className="w-5 h-5 accent-[#FB4156] cursor-pointer"
                    />
                    <span className="ml-2 text-gray-600">No</span>
                  </label>
                </div>

                <Form className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">Select your Salutation*</label>
                    <Field
                      as="select"
                      name="salutation"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-600 focus:ring-[#FB4156] focus:border-[#FB4156]"
                    >
                      <option value="">Select title</option>
                      <option value="Mr">Mr</option>
                      <option value="Ms">Ms</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Dr">Dr</option>
                    </Field>
                    <ErrorMessage name="salutation" component="div" className="text-red-500 text-xs" />
                  </div>

                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label className="block text-sm font-semibold text-gray-600 mb-1">First name*</label>
                      <Field
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-[#FB4156] focus:border-[#FB4156]"
                      />
                      <ErrorMessage name="firstName" component="div" className="text-red-500 text-xs" />
                    </div>

                    <div className="w-1/2">
                      <label className="block text-sm font-semibold text-gray-600 mb-1">Last name*</label>
                      <Field
                        type="text"
                        name="lastName"
                        placeholder="Enter your last name"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-[#FB4156] focus:border-[#FB4156]"
                      />
                      <ErrorMessage name="lastName" component="div" className="text-red-500 text-xs" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">Enter your contact number*</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">🇮🇳 IND(+91)</span>
                      <Field
                        type="text"
                        name="contactNumber"
                        placeholder="Enter your contact number"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 pl-24 focus:ring-[#FB4156] focus:border-[#FB4156]"
                      />
                      <ErrorMessage name="contactNumber" component="div" className="text-red-500 text-xs" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">Enter your email address*</label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-[#FB4156] focus:border-[#FB4156]"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">Enter your flight number (Optional)</label>
                    <Field
                      type="text"
                      name="flightNumber"
                      placeholder="Enter your flight number"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-[#FB4156] focus:border-[#FB4156]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">Enter your special request (Optional)</label>
                    <Field
                      as="textarea"
                      name="notes"
                      placeholder="Type here!"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 h-24 focus:ring-[#FB4156] focus:border-[#FB4156]"
                    />
                  </div>

                  <div className="flex items-start">
                    <Field
                      type="checkbox"
                      name="termsConditions"
                      className="mt-1 text-[#FB4156] focus:ring-[#FB4156]"
                    />
                    <label className="ml-2 text-gray-500 text-sm">
                      I agree to <span className="text-[#FB4156] underline">Terms & Conditions</span>,{" "}
                      <span className="text-[#FB4156] underline">Booking Conditions</span>, and{" "}
                      <span className="text-[#FB4156] underline">Privacy Policy</span>.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#FB4156] hover:bg-[#F3394E] text-white py-3 rounded-lg font-semibold text-lg transition"
                  >
                    Confirm & Pay
                  </button>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PassengerInfo;
