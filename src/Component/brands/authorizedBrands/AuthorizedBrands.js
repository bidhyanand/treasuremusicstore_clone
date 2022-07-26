import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react"
import { FaAngleRight } from "react-icons/fa"
import Slider from "react-slick";
import { ourAuthorizedBrands, viewAuthorizedBrands } from "../../../constant/text";
import authorizedBrandsData from '../../../data/authorizedBrandsData'
import BrandsCardDesign from "../brandsCardDesign/BrandsCardDesign";
const AuthorizedBrands = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
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
            <Flex justifyContent={"space-between"}  >
                <Text
                    fontSize={{ base: "15", md: "20" }}
                    fontWeight={700}>
                    {ourAuthorizedBrands}
                </Text>

                <Flex>
                    <Text
                        fontSize={{ base: "13px", md: "16px" }}
                        fontWeight={700}
                        cursor="pointer">
                        {viewAuthorizedBrands}
                    </Text>

                    <Text
                        fontSize={{ base: "13px", md: "16px" }}
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
                {authorizedBrandsData.map((data, index) => {

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

export default AuthorizedBrands