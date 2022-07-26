import { Box, Flex, Text } from '@chakra-ui/react'
import { navbarColor, navbarFontColor } from '../../../constant/color'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { contact, faq, returnPolicy } from '../../../constant/text';
const TopHeader = () => {
    return (
        <Box bgColor={navbarColor} height="35px"  >
            <Flex gap={2} justifyContent="right" mr={"10%"} pt={2} >
                <Text
                    textColor={navbarFontColor}
                    fontFamily="Oxygen, sans-serif"
                    fontSize={"13px"}
                    fontWeight={"400"}
                    textAlign="center"
                    cursor={"pointer"}>
                    {contact}
                </Text>

                <Text
                    textColor={navbarFontColor}
                    fontFamily="Oxygen, sans-serif"
                    fontSize={"13px"}
                    fontWeight={"400"}
                    cursor={"pointer"}>
                    {faq}
                </Text>

                <Text
                    textColor={navbarFontColor}
                    fontFamily="Oxygen, sans-serif"
                    fontSize={"13px"}
                    fontWeight={"400"}
                    cursor={"pointer"}
                >
                    {returnPolicy}
                </Text>

                <Text
                    pt={1}
                    textColor={navbarFontColor}
                    fontSize="12px"
                    fontWeight={"400"}
                    cursor={"pointer"}>
                    <FaFacebookF />
                </Text>

                <Text
                    pt={1}
                    textColor={navbarFontColor}
                    fontSize="12px"
                    fontWeight={"400"}
                    cursor={"pointer"}>
                    <FaInstagram />
                </Text>




            </Flex>
        </Box>
    )
}

export default TopHeader