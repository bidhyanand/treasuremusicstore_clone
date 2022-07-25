import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Slider from 'react-slick'
import { arrivalCategoryColor } from '../constant/color'
import sellingProductsData from '../data/sellingProductsData'
import SaleBadge from '../badge/saleBadge'

const SellingProducts = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
  return (
    <>
        <Flex justifyContent={"space-between"} >
            <Divider
            borderWidth={"1px"}
            width={"40%"}/>
            <Text
            mt={-4}
            fontSize={20}
            fontWeight={700}>
                Best Selling Products
            </Text>
            <Divider
            borderWidth={"1px"}
            width={"40%"}/>
            
        </Flex>
        <br/>
        <br/>
          <Slider {...settings}>
          {sellingProductsData.map((data,index)=>{
                console.log(data.image,"hello")
                return(
                    <div>
                        <Image 
                        ml={10}
                        width={180}
                        height={180}
                        src={data.image} alt="newArrivals"/>

                      {data.sale && 
                       <SaleBadge/>
                      }

                        <Text
                        color={arrivalCategoryColor}
                        textTransform="uppercase"
                        fontSize={"12px"}
                        fontWeight={400}
                        ml={10}
                        textAlign="center">
                            {data.category}
                        </Text>

                        <Text
                        ml={10}
                        textAlign={"center"}
                        fontSize={14}
                        fontWeight={400}>
                            {data.details}
                        </Text>
                        
                        <Text 
                        textAlign={"center"}
                        fontWeight={700}
                        fontSize={"15px"}>
                          Rs  {data.price1}
                        </Text>

                        {data.price2 &&
                        <>
                        <Text 
                        textAlign={"center"}
                        fontWeight={700}
                        fontSize={"15px"}>
                          Rs  {data.price2}
                        </Text>
                        </>}

                    </div>
                )
            })}
          </Slider>
    </>
  )
}

export default SellingProducts