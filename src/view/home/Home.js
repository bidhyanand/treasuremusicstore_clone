import { Box } from '@chakra-ui/react'
import React from 'react'
import NewArrivals from '../../Component/product/newArrival/NewArrivals'
import Categories from '../../Component/product/categories/Categories'
import Contact from '../../Component/contact/Contact'
import MainBanner from '../../Component/banners/mainBanner/MainBanner'
import SalesBanner from '../../Component/banners/salesBanner/SalesBanner'
import SellingProducts from '../../Component/product/sellingProduct/SellingProducts'
import NewProduct from '../../Component/product/newProduct/NewProduct'
import AuthorizedBrands from '../../Component/brands/authorizedBrands/AuthorizedBrands'
import SellingBrands from '../../Component/brands/sellingBrands/SellingBrands'

const Home = () => {
  return (
    <Box width={{base : "100%", md : "80%" }} ml={{md:"10%"}} mr={{md:"10%"}} >
    
       <MainBanner/>
       <SalesBanner/>
       <AuthorizedBrands/>
       <SellingBrands/>
       <NewArrivals/>
       <SellingProducts/>
       <Categories/>
       <NewProduct/>
       <Contact/>
       
    </Box>
  )
}

export default Home