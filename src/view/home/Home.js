import { Box } from '@chakra-ui/react'
import React from 'react'
import Arrivals from '../../Component/Arrivals'
import AuthorizedBrand from '../../Component/authorizedBrands/AuthorizedBrand'
import AuthorizedCardDesign from '../../Component/AuthorizedCardDesign'
import Categories from '../../Component/Categories'
import Contact from '../../Component/contact/Contact'
import MainBanner from '../../Component/banner/MainBanner'
import NewProduct from '../../Component/NewProduct'
import SalesBanner from '../../Component/banner/SalesBanner'
import SellingBrands from '../../Component/SellingBrands'
import SellingProducts from '../../Component/SellingProducts'

const Home = () => {
  return (
    <Box width={{base : "100%", md : "80%" }} ml={{md:"10%"}} mr={{md:"10%"}} >
    
       <MainBanner/>
       <SalesBanner/>
       {/* <AuthorizedBrand/> */}
       <AuthorizedCardDesign/>
       <SellingBrands/>
       <Arrivals/>
       <SellingProducts/>
       <Categories/>
       <NewProduct/>
       <Contact/>
       
    </Box>
  )
}

export default Home