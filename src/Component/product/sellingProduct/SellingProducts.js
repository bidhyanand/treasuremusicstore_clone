import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Slider from 'react-slick'
import { arrivalCategoryColor } from '../../../constant/color'
import sellingProductsData from '../../../data/sellingProductsData'
import SaleBadge from '../../../badge/saleBadge'
import { bestSellingProducts } from '../../../constant/text'

const SellingProducts = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive :[
          {
          breakpoint:1024,
          settings : {
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
            width={{base:"30%",md:"40%"}}/>
            
            <Text
            mt={{base:"-2",md:"-4"}}
            fontSize={{base:"12",md:"20"}}
            fontWeight={700}>
                {bestSellingProducts}
            </Text>
            <Divider
            borderWidth={"1px"}
            width={{base:"30%",md:"40%"}}/>
            
        </Flex>
        <br/>
        <br/>
          <Slider {...settings}>
          {sellingProductsData.map((data,index)=>{
                return(
                    <div key={index}>
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
                        textDecoration= {data.sale? "line-through":null}
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