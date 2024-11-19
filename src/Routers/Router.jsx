import React from 'react'
import { Route, Routes } from 'react-router'
import LandingPage from '../Components/LandingPage'
import RentalsPage from '../Components/RentalsPage'

export const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LandingPage/>}></Route>
            <Route path='/rentalspage' element={<RentalsPage/>}></Route>
        </Routes>
    </div>
  )
}
