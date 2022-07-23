import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react"
import {  FaAngleRight} from "react-icons/fa"
import Slider from "react-slick";
import sellingBrandsData from "../data/selingBrandsData";
const SellingBrands = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
      };
  return (
    
          <Box width={"80%"} ml={"10%"} mr={"10%"} >

<Flex justifyContent={"space-between"} >
    <Text
    fontSize={"20px"}
    fontWeight={700}>
        Our Selling Brands
    </Text>

    <Flex>
    <Text
    fontSize={"16px"}
    fontWeight={700}>
        View All Brands
    </Text>

    <Text
    fontSize={"16px"}
    fontWeight={400}
    mt={1}>
    <FaAngleRight/>
    </Text>
    </Flex>
</Flex>


<Divider
borderWidth={"1px"}
/>

<Slider {...settings}>
{sellingBrandsData.map((data,index)=>{
    return(
        <div key={index} >
            
            <Image width={20}
            ml={8}
            src= {data.image} alt="sellingBrand">

            </Image>
        </div>
    )
})}

</Slider>

</Box>
    
  )
}

export default SellingBrands