import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { navbarColor,navbarFontColor } from '../constant/color'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <Box bgColor= {navbarColor} height="35px"  >
        <Flex gap={2} justifyContent="right" mr={"10%"} pt={2} >
            <Text 
            textColor={navbarFontColor}
            fontFamily="Oxygen, sans-serif"
            fontSize={"13px"}
            fontWeight={"400"}
            textAlign="center">
                Contact
            </Text> 
            
            <Text
            textColor={navbarFontColor}
            fontFamily="Oxygen, sans-serif"
            fontSize={"13px"}
            fontWeight={"400"}
            >
                FAQ
            </Text>

             <Text
             textColor={navbarFontColor}
             fontFamily="Oxygen, sans-serif"
            fontSize={"13px"}
            fontWeight={"400"}
            
            >
                Return Policy
            </Text>

            <Text
            pt={1}
             textColor={navbarFontColor}
             fontSize="12px"
             fontWeight={"400"}
             >
            <FaFacebookF/>
            </Text>

            <Text
            pt={1}
            textColor={navbarFontColor}
            fontSize="12px"
            fontWeight={"400"}>
            <FaInstagram/>
            </Text>




        </Flex>
    </Box>
  )
}

export default Navbar