import React from 'react'
import { Route, Routes } from 'react-router'
import LandingPage from '../Components/LandingPage'
import RentalsPage from '../Components/RentalsPage'
import RentalDetailsPage from '../Components/RentalDetailsPage'

export const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LandingPage/>}></Route>
            <Route path='/rentalspage' element={<RentalsPage/>}></Route>
            <Route path='/rentalDetailsPage' element={<RentalDetailsPage/>}></Route>
        </Routes>
    </div>
  )
}
