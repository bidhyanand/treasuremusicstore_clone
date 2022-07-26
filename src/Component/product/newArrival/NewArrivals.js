import { Divider, Flex, Image, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import Slider from 'react-slick'
import { newArrivals } from '../../../constant/text'
import { newArrivalsData } from '../../../data/newArrivalsData'
import ModalDesign from '../../../modal/ModalDesign'
import ProductCardDesign from '../productCardDesign/ProductCardDesign'
const NewArrivals = () => {
    // funstion for carousel
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
            <Flex justifyContent={"space-between"} my={"2%"} >
                <Divider
                    borderWidth={"1px"}
                    width={{ base: "36", md: "42%" }} />
                <Text
                    mt={{ md: "-4", base: "-2" }}
                    fontSize={{ base: "15", md: "20" }}
                    fontWeight={700}>
                    {newArrivals}
                </Text>
                <Divider
                    borderWidth={"1px"}
                    width={{ base: "36", md: "42%" }} />

            </Flex>
            <br />
            <Slider {...settings}>
                {newArrivalsData.map((data, index) => {
                    return (
                        <ProductCardDesign 
                        showQuickView
                        key={index}
                        data = {data}
                        />
                    )
                })}
            </Slider>
        </>
    )
}

export default NewArrivals