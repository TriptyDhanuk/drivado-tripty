import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import BookingCab from './components/BookingCab/BookingCab';
import PassengerInfo from './components/PassengerInfo/PassengerInfo';
import BookingConfirmation from './components/BookingConfirmation/BookingConfirmation';
import ManageBooking from './components/ManageBooking/ManageBooking';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/bookingcab" element={<BookingCab/>} />
        <Route path="/passengerinfo" element={<PassengerInfo/>} />
        <Route path="/bookingconfirmation" element={<BookingConfirmation/>} />
        <Route path="/managebooking" element={<ManageBooking/>} />
      </Routes>
    </Router>
  );
}

export default App;
