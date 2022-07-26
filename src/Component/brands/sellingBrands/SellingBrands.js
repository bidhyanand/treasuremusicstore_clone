import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react"
import { FaAngleRight } from "react-icons/fa"
import Slider from "react-slick";
import { ourSellingBrands, ViewAllBrands } from "../../../constant/text";
import sellingBrandsData from '../../../data/selingBrandsData'
import BrandsCardDesign from "../brandsCardDesign/BrandsCardDesign";
const SellingBrands = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
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

            <Flex justifyContent={"space-between"}  >
                <Text
                    fontSize={{base : "15px", md : "20"}}
                    fontWeight={700}>
                    {ourSellingBrands}
                </Text>

                <Flex>
                    <Text
                        fontSize={{base :"13" ,md:"16"}}
                        fontWeight={700}
                        cursor={"pointer"}>
                        {ViewAllBrands}
                    </Text>

                    <Text
                        fontSize={{base:"13",md:"16"}}
                        fontWeight={400}
                        mt={1}>
                        <FaAngleRight />
                    </Text>
                </Flex>
            </Flex>


            <Divider
            my={"2%"}
                borderWidth={"1px"}
            />

            <Slider {...settings} >
                {sellingBrandsData.map((data, index) => {
                    return (
                       <BrandsCardDesign
                       key={index}
                       data={data}
                       />
                    )
                })}

            </Slider>
            </>


    )
}

export default SellingBrands