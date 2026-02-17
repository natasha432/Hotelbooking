import React from 'react'
import Navbar from './Components/Navbar'
// import Hero from './Components/Hero'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import AllRoom from './Pages/AllRoom'
import RoomDetails from './Pages/RoomDetails'
import MyBookings from './Pages/MyBookings'
import HotelReg from './Components/HotelReg'
import Layout from './Pages/hotelOwner/Layout'
import Dashbord from './Pages/hotelOwner/Dashbord'
import AddRoom from './Pages/hotelOwner/AddRoom'
import ListRoom from './Pages/hotelOwner/ListRoom'

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div> 
      {!isOwnerPath && <Navbar />}
      {/* <Hero/> */}
        { false && <HotelReg/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<AllRoom />} />
          <Route path='/rooms/:id' element={<RoomDetails/>} />
          <Route path='/my-bookings' element={<MyBookings />} />
          <Route path='/owner' element={<Layout />} >
              <Route index element={<Dashbord />}  />
              <Route path="add-room" element={<AddRoom />} />
            <Route path="list-rooms" element={<ListRoom />} />
           
      </Route>
        </Routes>   
      </div>
      <Footer/>
    </div>                     
  )
}

export default App

