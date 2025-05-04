import React from 'react'
import Navbar from './pages/Navbar'
import Resume from './pages/Resume'
import CompaniesList from './pages/CompaniesList'
import { Routes, Route } from 'react-router-dom';
import WhyUs from './pages/WhyUs';

const Landing = () => {
  return (
    <div className='bg-gray-100'>
       <Navbar/>
       <Resume/>
       <CompaniesList/>
       <WhyUs/>
    </div>
  )
}

export default Landing