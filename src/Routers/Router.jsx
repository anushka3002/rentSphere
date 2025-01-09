import React from 'react'
import { Route, Routes } from 'react-router'
import LandingPage from '../Components/LandingPage'
import RentalsPage from '../Components/RentalsPage'
import RentalDetailsPage from '../Components/RentalDetailsPage'
import BookingPage from '../Components/BookingPage'
import ScrollToTop from '../Components/ScrollToTop'
import Wishlist from '../Components/Wishlist'

export const Router = () => {
  return (
    <div>
      <ScrollToTop />
        <Routes>
            <Route path='/' element={<LandingPage/>}></Route>
            <Route path='/rentalspage' element={<RentalsPage/>}></Route>
            <Route path='/rentalDetailsPage/:id' element={<RentalDetailsPage/>}></Route>
            <Route path='/bookingPage/:guests/:price/:nights/:dates/:date2' element={<BookingPage/>}></Route>
            <Route path='/wishlist' element={<Wishlist/>}></Route>
        </Routes>
    </div>
  )
}
