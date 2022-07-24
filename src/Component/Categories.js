import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Slider from 'react-slick'
import { arrivalCategoryColor } from '../constant/color'
import categoriesData from '../data/categoriesData'

const Categories = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1
    };
    return (
        <Box width={"80%"} ml={"10%"} mr={"10%"} >
            <Flex justifyContent={"space-between"} >
                <Divider
                    borderWidth={"1px"}
                    width={"40%"} />
                <Text
                    mt={-4}
                    fontSize={20}
                    fontWeight={700}>
                    Browse Our Categories
                </Text>
                <Divider
                    borderWidth={"1px"}
                    width={"40%"} />

            </Flex>
            <br />
            <Slider {...settings}>
                {categoriesData.map((data, index) => {
                    return (
                        <div key={index} >
                            <Image
                                ml={5}
                                width={140}
                                height={140}
                                src={data.image} alt="newArrivals" />

                            

                            <Text
                        textTransform="uppercase"
                        fontSize={"15px"}
                        fontWeight={700}
                        ml={10}
                        textAlign="center">
                            {data.title}
                        </Text>

                        <Text
                                color={arrivalCategoryColor}
                                fontSize={"12px"}
                                fontWeight={400}
                                ml={10}
                                textAlign="center">
                                {data.product} PRODUCTS
                            </Text>

                        </div>
                    )
                })}
            </Slider>
            {/* </Flex> */}
        </Box>
    )
}

export default Categories