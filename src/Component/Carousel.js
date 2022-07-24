import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import carouselData from '../data/carouselData'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import "./Carousel.css"
const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
    };
    return (
        <Box width={"80%"} ml={"10%"} mr={"10%"} >

            <Slider {...settings} >

                {carouselData.map((data, index) => {
                    return (
                        <div key={index} >
                            <Image src={data.image} alt="carouselImage" />


                        </div>
                    )
                })}
            </Slider>

        </Box>
    )
}

export default Carousel