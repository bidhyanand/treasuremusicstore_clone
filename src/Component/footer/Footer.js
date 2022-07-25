import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import { FaChevronUp, FaCommentDots, FaRegCopyright } from 'react-icons/fa'
import { arrivalCategoryColor, lightRedColor } from '../../constant/color'
import { contact, copyright, faq, returnPolicy, treasureMusicStore } from '../../constant/text'
const Footer = () => {
    return (
        <Box width={"80%"} ml={"10%"} mr={"10%"} my={"5"} >

            <Flex gap={4}  >
                <Text
                    textTransform="uppercase"
                    fontSize={12}
                    fontWeight={400}
                    color={arrivalCategoryColor}
                    cursor="pointer">
                    {contact}
                </Text>

                <Text
                    textTransform="uppercase"
                    fontSize={12}
                    fontWeight={400}
                    color={arrivalCategoryColor}
                    cursor="pointer">
                    {faq}
                </Text>

                <Text
                    textTransform="uppercase"
                    fontSize={14}
                    fontWeight={400}
                    color={arrivalCategoryColor}
                    cursor="pointer">
                    {returnPolicy}
                </Text>

            </Flex>
            <Divider
                width={60} />

            <Flex gap={1}  >
                <Text
                    fontSize={12}
                    fontWeight={400}
                    color={arrivalCategoryColor}>
                    {copyright}
                </Text>

                <Text
                    mt={1}
                    textTransform="uppercase"
                    fontSize={13}
                    fontWeight={400}
                    color={arrivalCategoryColor}>
                    <FaRegCopyright />
                </Text>

                <Text
                    fontSize={14}
                    fontWeight={700}
                    color={arrivalCategoryColor}
                    cursor="pointer">
                    {treasureMusicStore}
                </Text>

            </Flex>


            <Box
                position={"fixed"}
                bottom={10}
                left={10}
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