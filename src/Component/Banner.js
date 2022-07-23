import { Box, Flex, GridItem, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import sale from '../images/sale.jpeg'
import ourProducts from '../images/ourProducts.jpeg'
import aboutus from '../images/aboutus.jpeg'

const Banner = () => {
  return (
    <Box width={"80%"} ml={"10%"} mr={"10%"}  >
        <SimpleGrid columns={3} gap={10} >
            {/* <Flex justifyContent={"space-between"} gap={3} > */}

                <GridItem colSpan={1}  >
                <Box width={"90"} height={"90%"}>
                <Image src={sale} alt="banner"/>
                </Box>
                </GridItem>
                
                <GridItem colSpan={1} >
                <Box width={"90"} height={"90%"} >
                <Image src={ourProducts} alt="banner"/>
                </Box>
                 </GridItem>

                <GridItem colSpan={1} >
                <Box width={"90"} height={"90%"} >
                <Image src={aboutus} alt="banner"/>
                </Box>
                </GridItem>

            {/* </Flex> */}
        </SimpleGrid>
    </Box>
  )
}

export default Banner