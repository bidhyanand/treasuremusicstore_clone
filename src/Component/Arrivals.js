import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Arrivals = () => {
  return (
    <Box width={"80%"} ml={"10%"} mr={"10%"} >
        <Flex justifyContent={"space-between"} >
            <Divider
            borderWidth={"1px"}
            width={"42%"}/>
            <Text
            mt={-4}
            fontSize={20}
            fontWeight={700}>
                New Arrivals
            </Text>
            <Divider
            borderWidth={"1px"}
            width={"42%"}/>
            
        </Flex>
    </Box>
  )
}

export default Arrivals