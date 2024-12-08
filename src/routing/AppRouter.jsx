import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import AboutUs from '../pages/aboutUs'
import Careers from '../pages/Careers'
import Investors from '../pages/Investors'
import Media from '../pages/Media'
import OurBusiness from '../pages/OurBusiness'
import OurImpact from '../pages/OurImpact'
import Search from '../pages/Search'
import Shop from '../pages/Shop'


export default function AppRouter() {
  return (
    <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path='/aboutUs' element={<AboutUs/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/investors" element={<Investors/>} />
        <Route path="/media" element={<Media/>} />
        <Route path="/ourBuiness" element={<OurBusiness/>} />
        <Route path="/ourImpact" element={<OurImpact/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/shop" element={<Shop/>} />
    </Routes>
  )
}
