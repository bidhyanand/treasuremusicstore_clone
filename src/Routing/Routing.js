import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../view/home/Home'
import OurProductList from '../Component/OurProductList'

const Routing = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/'  element={ <Home/> }/>
            <Route path = '/ourproductlist' element={<OurProductList/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing