import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MobileNav from '../Component/header/drawerData/DracwerContent'
import MobileHeader from '../Component/header/drawerData/MobileHeader'
import Home from '../view/home/Home'
import OurProductList from '../view/allProducts/OurProductList'

const Routing = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/'  element={ <Home/> }/>
            <Route path = '/ourproductlist' element={<OurProductList/>}/>
            <Route path= '/mobile' element={<MobileHeader/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing