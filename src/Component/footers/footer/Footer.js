import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import { FaChevronUp, FaCommentDots, FaRegCopyright } from 'react-icons/fa'
import { arrivalCategoryColor, lightRedColor } from '../../../constant/color'
import { contact, copyright, faq, returnPolicy, treasureMusicStore } from '../../../constant/text'
const Footer = () => {
    return (
        <Box width={"80%"} ml={"10%"} mr={"10%"} my={"5"} >

            <Flex gap={4} justifyContent={{base:"center",md:"flex-start"}} >
                <Text
                    textTransform="uppercase"
                    fontSize={{base:"11px",md:"12px"}}
                    fontWeight={400}
                    color={arrivalCategoryColor}
                    cursor="pointer">
                    {contact}
                </Text>

                <Text
                    textTransform="uppercase"
                    fontSize={{base: "11px",md:"12px"}}
                    fontWeight={400}
                    color={arrivalCategoryColor}
                    cursor="pointer">
                    {faq}
                </Text>

                <Text
                    textTransform="uppercase"
                    fontSize={{base:"11px",md:"14px"}}
                    fontWeight={400}
                    color={arrivalCategoryColor}
                    cursor="pointer">
                    {returnPolicy}
                </Text>

            </Flex>
            <Divider
                width={60} />

            <Flex gap={1} justifyContent={{base : "center",md:"flex-start"}} >
                <Text
                    fontSize={{base:"10px",md :"12px"}}
                    fontWeight={400}
                    color={arrivalCategoryColor}>
                    {copyright}
                </Text>

                <Text 
                    mt={1}
                    textTransform="uppercase"
                    fontSize={{base:"10px",md:"13px"}}
                    fontWeight={400}
                    color={arrivalCategoryColor}>
                    <FaRegCopyright />
                </Text>

                <Text
                    fontSize={{base:"10",md:"14"}}
                    fontWeight={700}
                    color={arrivalCategoryColor}
                    cursor="pointer">
                    {treasureMusicStore}
                </Text>

            </Flex>


            <Box
                position={"fixed"}
                bottom={10}
                left={{base:"5",md:"10"}}
            >
                <Text
                    border={"2px solid black"}
                    fontSize={"40px"}
                    _hover={
                        { background: lightRedColor }
                    }
                >
                    <a href='#'>
                        <FaChevronUp />
                    </a>
                </Text>
            </Box>

            <Box
                position={"fixed"}
                bottom={10}
                right={10}
            >
                <Text
                    pt={2}
                    pl={3}
                    bg={lightRedColor}
                    width={50}
                    height={50}
                    borderRadius={"50%"}
                    fontSize={"30px"}
                >
                    <FaCommentDots />
                </Text>
            </Box>

        </Box>



    )

}

export default Footer