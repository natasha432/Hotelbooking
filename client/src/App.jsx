import React from 'react'
import Navbar from './Components/Navbar'
// import Hero from './Components/Hero'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import AllRoom from './Pages/AllRoom'
import RoomDetails from './Pages/RoomDetails'
import MyBookings from './Pages/MyBookings'

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div> 
      {!isOwnerPath && <Navbar />}
      {/* <Hero/> */}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<AllRoom />} />
          <Route path='/rooms/:id' element={<RoomDetails/>} />
           <Route path='/my-bookings' element={<MyBookings/>} />
        </Routes>   
      </div>
      <Footer/>
    </div>                     
  )
}

export default App

