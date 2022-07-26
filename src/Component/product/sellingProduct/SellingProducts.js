import { Divider, Flex, Image, Text } from '@chakra-ui/react'
import Slider from 'react-slick'
import { arrivalCategoryColor } from '../../../constant/color'
import sellingProductsData from '../../../data/sellingProductsData'
import ProductCardDesign from '../productCardDesign/ProductCardDesign'
import { bestSellingProducts } from '../../../constant/text'

const SellingProducts = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 3000,
        }
      }
    ]
  };
  return (
    <>
      <Flex justifyContent={"space-between"} my={"4%"} >
        <Divider
          borderWidth={"1px"}
          width={{ base: "30%", md: "40%" }} />

        <Text
          mt={{ base: "-2", md: "-4" }}
          fontSize={{ base: "12", md: "20" }}
          fontWeight={700}>
          {bestSellingProducts}
        </Text>
        <Divider
          borderWidth={"1px"}
          width={{ base: "30%", md: "40%" }} />

      </Flex>
      <br />
      <br />
      <Slider {...settings}>
        {sellingProductsData.map((data, index) => {
          return (
            <ProductCardDesign key={index} 
            data={data}
            >

            </ProductCardDesign>
            
              
                
            
          )
        })}
      </Slider>
    </>
  )
}

export default SellingProducts