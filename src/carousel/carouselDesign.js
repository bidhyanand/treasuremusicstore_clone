import React, { Children } from 'react'
import Slider from 'react-slick';

const carouselDesign = ({children}) => {
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
            <Slider {...settings} >

{Children}
            </Slider>



  )
}

export default carouselDesign