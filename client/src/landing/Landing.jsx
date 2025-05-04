import React from 'react'
import Navbar from './pages/Navbar'
import Resume from './pages/Resume'
import CompaniesList from './pages/CompaniesList'
import { Routes, Route } from 'react-router-dom';
import WhyUs from './pages/WhyUs';
import StepsForResume from './pages/StepsForResume';

const Landing = () => {
  return (
    <div className='bg-gray-100'>
       <Navbar/>
       <Resume/>
       <CompaniesList/>
       <WhyUs/>
       <StepsForResume/>
    </div>
  )
}

export default Landing