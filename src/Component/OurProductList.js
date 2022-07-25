import { Text,Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { arrivalCategoryColor, lightRedColor } from '../constant/color'
import categoriesData from '../data/categoriesData'

const OurProductList = () => {
  return (
    <div>
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
      </SimpleGrid>

    </div>

     
  )
}

export default OurProductList