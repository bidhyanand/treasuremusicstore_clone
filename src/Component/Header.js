import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { navbarColor,navbarFontColor } from '../constant/color'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { contact, faq, returnPolicy } from '../constant/text';
const Header = () => {
  return (
    <Box bgColor= {navbarColor} height="35px"  >
        <Flex gap={2} justifyContent="right" mr={"10%"} pt={2} >
            <Text 
            textColor={navbarFontColor}
            fontFamily="Oxygen, sans-serif"
            fontSize={"13px"}
            fontWeight={"400"}
            textAlign="center">
                {contact}
            </Text> 
            
            <Text
            textColor={navbarFontColor}
            fontFamily="Oxygen, sans-serif"
            fontSize={"13px"}
            fontWeight={"400"}
            >
                {faq}
            </Text>

             <Text
             textColor={navbarFontColor}
             fontFamily="Oxygen, sans-serif"
            fontSize={"13px"}
            fontWeight={"400"}
            
            >
                {returnPolicy}
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

export default Header