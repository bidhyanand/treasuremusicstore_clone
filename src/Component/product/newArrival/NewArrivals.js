import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Slider from 'react-slick'
import { arrivalCategoryColor } from '../../../constant/color'
import { newArrivals } from '../../../constant/text'
import { newArrivalsData } from '../../../data/newArrivalsData'

const NewArrivals = () => {
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
        <Flex justifyContent={"space-between"} my={"2%"} >
            <Divider
            borderWidth={"1px"}
            width={{base:"36",md:"42%"}}/>
            <Text
            mt={{md:"-4",base:"-2"}}
            fontSize={{base:"15",md:"20"}}
            fontWeight={700}>
                {newArrivals}
            </Text>
            <Divider
            borderWidth={"1px"}
            width={{base:"36",md:"42%"}}/>
            
        </Flex>
        <br/>
          <Slider {...settings}>
          {newArrivalsData.map((data,index)=>{
                return(
                    <div key={index} >
                        <Image 
                        ml={10}
                        width={180}
                        height={180}
                        src={data.image} alt="newArrivals"/>

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
                          Rs  {data.price.toLocaleString()}
                        </Text>

                    </div>
                )
            })}
          </Slider>
          </>
  )
}

export default NewArrivals