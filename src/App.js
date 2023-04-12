import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import BookingPage from './components/BookingPage'
import ConfirmedBooking from './components/ConfirmedBooking'
import Footer from './components/Footer'
import {Route,Routes} from "react-router-dom"
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes> 
        <Route path="/" exact element={<Main />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route> 
        <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
      </Routes>
      <Nav />
      <Footer />
   </>
  );
}

export default App;
