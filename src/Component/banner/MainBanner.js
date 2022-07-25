import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import mainBannerData from '../../data/mainBannerData'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import "./mainBanner.css"
const MainBanner = () => {
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
        <>


            <Slider {...settings} >

                {mainBannerData.map((data, index) => {
                    return (
                        <div key={index} >
                            <Image src={data.image} alt="carouselImage" />


                        </div>
                    )
                })}
            </Slider>

        </>
    )
}

export default MainBanner