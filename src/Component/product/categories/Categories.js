import { Divider, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Slider from 'react-slick'
import { arrivalCategoryColor } from '../../../constant/color'
import { browseOurCategories } from '../../../constant/text'
import categoriesData from '../../../data/categoriesData'
import ProductCardDesign from '../productCardDesign/ProductCardDesign'

const Categories = () => {
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
            <Flex justifyContent={"space-between"} my={"2%"}  >
                <Divider
                    borderWidth={"1px"}
                    width={{ base: "30%", md: "40%" }} />
                <Text
                    mt={{ base: "-2", md: "-4" }}
                    fontSize={{ base: "12px", md: "20px" }}
                    fontWeight={700}>
                    {browseOurCategories}
                </Text>
                <Divider
                    borderWidth={"1px"}
                    width={{ base: "30%", md: "40%" }} />


            </Flex>
            <br />
            <Slider {...settings}>
                {categoriesData.map((data, index) => {
                    return (
                        <ProductCardDesign
                         key={index} 
                         data={data}/>
                       
                    )
                })}
            </Slider>
        </>
    )
}

export default Categories
