import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import img1 from '../../assets/img1.png';
import { useDispatch } from 'react-redux';
import { setApiResponse } from '../../Reducer/cabSlice'; 
import { useNavigate } from 'react-router-dom'; 
import play from "../../assets/play.png"
import house from "../../assets/house.png"
import bus from "../../assets/bus.png"
import flight from "../../assets/flight.png"
import "./banner.css"

const addressData = {
  "addresses": [
    { "address": "Victoria Memorial Hall, 1, Queens Way, Maidan, Kolkata, West Bengal 700071", "latitude": 22.5448, "longitude": 88.3426 },
    { "address": "Howrah Bridge, Hooghly River, Kolkata, West Bengal 700001", "latitude": 22.5851, "longitude": 88.3468 },
    { "address": "Indian Museum, 27, Jawaharlal Nehru Rd, Colootola, New Market Area, Dharmatala, Taltala, Kolkata, West Bengal 700016", "latitude": 22.5614, "longitude": 88.3511 },
    { "address": "Dakshineswar Kali Temple, Dakshineswar, Kolkata, West Bengal 700076", "latitude": 22.6534, "longitude": 88.3573 },
    { "address": "Science City, J.B.S Haldane Avenue, Topsia, Kolkata, West Bengal 700046", "latitude": 22.5413, "longitude": 88.3934 },
    { "address": "Kalighat Kali Temple, Anami Sangha, Kalighat, Kolkata, West Bengal 700026", "latitude": 22.5209, "longitude": 88.3467 },
    { "address": "Eden Gardens, BBD Bagh, Kolkata, West Bengal 700021", "latitude": 22.5646, "longitude": 88.3437 },
    { "address": "St. Paul's Cathedral, 1A, Cathedral Rd, Maidan, Kolkata, West Bengal 700071", "latitude": 22.5514, "longitude": 88.3525 },
    { "address": "Belur Math, Belur, Howrah, West Bengal 711202", "latitude": 22.6302, "longitude": 88.3513 },
    { "address": "Park Street, Kolkata, West Bengal 700016", "latitude": 22.5512, "longitude": 88.3528 }
  ]
};

const Banner = () => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    paxCount: '',
    currency: '',
    date: null,
    originLatLng: null,
    destinationLatLng: null
  });

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const getLatLngForAddress = (address) => {
    const matchedAddress = addressData.addresses.find(addr => addr.address.toLowerCase() === address.toLowerCase());
    return matchedAddress ? { latitude: matchedAddress.latitude, longitude: matchedAddress.longitude } : null;
  };

  const handleSubmit = async () => {
    if (!formData.origin || !formData.destination) {
      console.error('Please enter both origin and destination');
      return;
    }
  

    const originLatLng = getLatLngForAddress(formData.origin);
    const destinationLatLng = getLatLngForAddress(formData.destination);
  
    if (!originLatLng || !destinationLatLng) {
      console.error('Origin or destination not found');
      return;
    }
  
    console.log('Origin Latitude and Longitude:', originLatLng);
    console.log('Destination Latitude and Longitude:', destinationLatLng);
  
    const requestBody = {
      origin: originLatLng,
      destination: destinationLatLng,
      paxCount: formData.paxCount,
      currency: formData.currency,
      date: formData.date ? formData.date.toISOString().split('T')[0] : null,
    };
  
    try {
      const response = await fetch('https://assignment-booking.onrender.com/api/getOptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });
  
      if (response.ok) {
        const data = await response.json();
        dispatch(setApiResponse(data)); 
  
        
        const combinedAddresses = `origin: ${formData.origin}  destination: ${formData.destination}`;
        console.log('Saving to localStorage:', combinedAddresses);  
        
       
        localStorage.setItem('origin_destination', combinedAddresses);
  
       
        const storedAddresses = localStorage.getItem('origin_destination');
        console.log('Stored in localStorage:', storedAddresses);
  
        navigate('/bookingcab');  
      } else {
        console.error('Failed to fetch data', response.status);
      }
    } catch (error) {
      console.error('Error while making the API request:', error);
    }
  };
  


  return (
    <div className="bg-white m-8 p-8 mt-0">
     <div className="flex flex-row justify-between w-full">
  <img src={bus} alt="bus" className="mx-60 w-auto h-auto" />
  <img src={house} alt="house" className="w-auto h-auto mr-[90px]" />
</div>

      <div className="container mx-auto flex items-center justify-center">
        
      <div className="w-1/2 space-y-4">
      <h1 className="text-3xl font-bold font-[Manrope] ">
  We Offer Exceptional Comfort <br />
  With  24/7 Access To Our{' '}<br/>
  <span className="text-red-500">Top-Tier </span>Chauffeur Services.
</h1>

  <div className="flex space-x-4 mt-10">
    <a className="bg-red-500 h-12  mt-7 text-white text-center px-6 py-3 rounded-lg hover:text-white focus:outline-none">
      Book Now
    </a>
    
    <a className="bg-white text-[#FB4156] px-6 py-3 rounded-lg flex items-center hover:text-[#FB4156] focus:outline-none">
    <img src={play} alt='play' className='w-20 h-20' />
      Play Demo
    </a>
   
  </div>
  <img src={flight} alt="flight" className="absolute left-0 w-auto h-auto mx-8 mt-[-40px]" />


</div>
      
        <div className="relative">
          <img src={img1} alt="Banner" className="w-[340px] h-[320px]" />
        </div>
      </div>

      <div className="mt-8 container mx-auto ">
  <div className="bg-white p-6 rounded-lg shadow-lg flex space-x-4 search-box mt-20">
  
    <div className="relative flex items-center border border-gray-300 rounded-md shadow-sm w-[200px]">
      <div className="absolute left-3 text-red-500">
        <i className="fas fa-map-marker-alt"></i>
      </div>
      <input
        type="text"
        name="origin"
        value={formData.origin}
        onChange={handleInputChange}
        placeholder="Enter Origin"
        className="pl-10 w-full h-12 px-3 py-2 border-none outline-none focus:ring-0 placeholder-gray-500 text-sm"
      />
      <label
        className="absolute -top-3 left-4 bg-white px-1 text-sm text-gray-500"
        style={{ transform: 'translateY(50%)', marginTop: '-5px' }}
      >
        Origin
      </label>
    </div>

    <div className="relative flex items-center border border-gray-300 rounded-md shadow-sm w-[200px]">
      <div className="absolute left-3 text-red-500">
        <i className="fas fa-map-marker-alt"></i>
      </div>
      <input
        type="text"
        name="destination"
        value={formData.destination}
        onChange={handleInputChange}
        placeholder="Enter Destination"
        className="pl-10 w-full h-12 px-3 py-2 border-none outline-none focus:ring-0 placeholder-gray-500 text-sm"
      />
      <label
        className="absolute -top-3 left-4 bg-white px-1 text-sm text-gray-500"
        style={{ transform: 'translateY(50%)', marginTop: '-5px' }}
      >
        Destination
      </label>
    </div>

    <div className="relative flex items-center border border-gray-300 rounded-md shadow-sm w-[200px]">
      <div className="absolute left-3 text-red-500">
        <i className="fas fa-calendar-alt"></i>
      </div>
      <DatePicker
        selected={formData.date}
        onChange={(date) => setFormData({ ...formData, date })}
        dateFormat="yyyy-MM-dd"
        placeholderText="Enter Pickup Date"
        className="pl-10 w-full h-12 px-3 py-2 border-none outline-none focus:ring-0 text-sm"
      />
      <label
        className="absolute -top-3 left-4 bg-white px-1 text-sm text-gray-500"
        style={{ transform: 'translateY(50%)', marginTop: '-5px' }}
      >
        Date
      </label>
    </div>

    <div className="relative flex items-center border border-gray-300 rounded-md shadow-sm w-[200px]">
      <div className="absolute left-3 text-red-500">
        <i className="fas fa-users"></i>
      </div>
      <input
        type="number"
        name="paxCount"
        value={formData.paxCount}
        onChange={handleInputChange}
        placeholder="Enter Pax Count"
        className="pl-10 w-full h-12 px-3 py-2 border-none outline-none focus:ring-0 placeholder-gray-500 text-sm"
      />
      <label
        className="absolute -top-3 left-4 bg-white px-1 text-sm text-gray-500"
        style={{ transform: 'translateY(50%)', marginTop: '-5px' }}
      >
        Pax Count
      </label>
    </div>

    <div className="relative flex items-center border border-gray-300 rounded-md shadow-sm w-[200px]">
      <div className="absolute left-3 text-red-500">
        <i className="fas fa-dollar-sign"></i>
      </div>
      <input
        type="text"
        name="currency"
        value={formData.currency}
        onChange={handleInputChange}
        placeholder="Currency"
        className="pl-10 w-full h-12 px-3 py-2 border-none outline-none focus:ring-0 placeholder-gray-500 text-sm"
      />
      <label
        className="absolute -top-3 left-4 bg-white px-1 text-sm text-gray-500"
        style={{ transform: 'translateY(50%)', marginTop: '-5px' }}
      >
        Currency
      </label>
    </div>

    <button
      onClick={handleSubmit}
      className="bg-red-500 text-white px-6 py-3 rounded-lg ml-4"
    >
      Submit
    </button>
  </div>
</div>




    </div>
  );
};

export default Banner;
