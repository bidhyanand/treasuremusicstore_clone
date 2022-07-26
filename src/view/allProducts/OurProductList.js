import { Text, Image, SimpleGrid, Box } from '@chakra-ui/react'
import React from 'react'
import { arrivalCategoryColor, lightRedColor } from '../../constant/color'
import categoriesData from '../../data/categoriesData'

const OurProductList = () => {
  return (
    <Box width={{ base: "100%", md: "80%" }} ml={{ md: "10%" }} mr={{ md: "10%" }} >

      <Text
        fontSize={"4xl"}
        textAlign={"center"}
        fontWeight="bold"
        color={lightRedColor}>
        List Of Products
      </Text>

      <SimpleGrid columns={4}>
        {categoriesData.map((data, index) => {
          return (
            <div key={index} >
              <Image
                my={"2%"}
                width={140}
                height={140}
                ml="25%"
                src={data.image} alt="newArrivals" />



              <Text
                textTransform="uppercase"
                fontSize={"15px"}
                fontWeight={700}
                textAlign="center">
                {data.title}
              </Text>

              <Text
                color={arrivalCategoryColor}
                fontSize={"12px"}
                fontWeight={400}
                textAlign="center">
                {data.product} PRODUCTS
              </Text>
              <br />

            </div>
          )
        })}
      </SimpleGrid>

    </Box>


  )
}

export default OurProductList