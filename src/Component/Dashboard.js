import { Box, Container, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FaAngleDown, FaCartPlus, FaSearch } from 'react-icons/fa'
import logo from '../images/logo.jpeg'
const Dashboard = () => {
    return (
        <Box width={"80%"} ml={"10%"} mr={"10%"} >

        
            <Flex justifyContent={"space-between"} >

                <Image
                    width={"100px"}
                    height={"100px"}
                    src={logo} alt="Logo" />

                 <Flex gap={3} justifyContent="center" mt={"10"} >
                    <Text
                        fontWeight="light"
                        fontSize="15px">
                        <FaSearch />
                    </Text>

                    <Text
                        fontWeight={"medium"}
                        fontSize="13px">
                        HOME
                    </Text>

                    <Flex>
                        <Text
                            fontWeight={"medium"}
                            fontSize="13px">
                            DEPARTMENTS
                        </Text>
                        <Text
                            fontWeight={"400"}
                            fontSize={"20px"}>
                            <FaAngleDown />
                        </Text>
                    </Flex>

                    <Flex>
                        <Text
                            fontWeight={"medium"}
                            fontSize="13px">
                            BRANDS
                        </Text>
                        <Text
                            fontWeight={"400"}
                            fontSize={"20px"}>
                            <FaAngleDown />
                        </Text>
                    </Flex>

                    <Text
                        fontWeight={"medium"}
                        fontSize="13px">
                        BLOG
                    </Text>
                </Flex> 

                <Flex gap={5} mt={10} >
                    <Text
                    fontWeight={"medium"}
                    fontSize={"13px"}>
                        LOGIN
                    </Text>
                    <Flex gap={2}>
                    <Text
                    fontWeight={"medium"}
                    fontSize={"13px"}>
                        CART / RS 0.00 
                    </Text>
                    <Text
                    fontSize={"30px"}
                    color={"red.500"}>
                    <FaCartPlus/>
                    </Text>
                    </Flex>
                    
                </Flex>

            </Flex>
            </Box>
    )
}

export default Dashboard