import React from 'react'
import Arrivals from './Component/Arrivals'
import AuthorizedBrands from './Component/AuthorizedBrands'
import Banner from './Component/Banner'
import Carousel from './Component/Carousel'
import Categories from './Component/Categories'
import Contact from './Component/Contact'
import Dashboard from './Component/Dashboard'
import Footer from './Component/Footer'
import FooterContent from './Component/FooterContent'
import Header from './Component/Header'
import NewProduct from './Component/NewProduct'
import SellingBrands from './Component/SellingBrands'
import SellingProducts from './Component/SellingProducts'
const App = () => {
  return (
    <div>
      <Header/>
      <Dashboard/>
      <Carousel/>
      <br/>
      <br/>
      <Banner/>
      <br/>
      <AuthorizedBrands/>
      <SellingBrands/>
      <Arrivals/>
      <br/>
      <SellingProducts/>
      <br/>
      <Categories/>
      <br/>
      <NewProduct/>
      <br/>
      <br/>
      <Contact/>
      <br/>
      <FooterContent/>
      <br/>
      <Footer/>
      <br/>
    </div>
  )
}

export default App