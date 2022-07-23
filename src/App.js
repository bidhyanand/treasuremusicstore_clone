import React from 'react'
import Arrivals from './Component/Arrivals'
import AuthorizedBrands from './Component/AuthorizedBrands'
import Banner from './Component/Banner'
import Carousel from './Component/Carousel'
import Dashboard from './Component/Dashboard'
import Navbar from './Component/Navbar'
import SellingBrands from './Component/SellingBrands'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Dashboard/>
      <Carousel/>
      <br/>
      <br/>
      <Banner/>
      <br/>
      <AuthorizedBrands/>
      <SellingBrands/>
      <Arrivals/>
    </div>
  )
}

export default App