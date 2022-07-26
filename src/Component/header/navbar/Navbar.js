import { Box, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { FaAngleDown, FaCartPlus, FaSearch } from 'react-icons/fa'
import { alctron, beyerdynamic, blog, brands, cart, departments, dj, guitarAccessories, guitarAmplifier, guitars, hexInstruments, home, keyboard, laney, login, manaslu, mxl, nativeInstruments, stagg, stopRecordingEquipments, ukulele } from '../../../constant/text'
import logo from '../../../images/logo.jpeg'
const Navbar = () => {
    return (
        <Box width={"80%"} ml={"10%"} mr={"10%"} >


            <Flex justifyContent={"space-between"} align="center" justify="flex-start" >

                <Image
                    width={"100px"}
                    height={"100px"}
                    src={logo} alt="Logo" />

                <Flex gap={3} justifyContent="center" cursor={"pointer"} >
                    <Text
                        fontWeight="light"
                        fontSize="15px">
                        <FaSearch />
                    </Text>

                    <a href='#'>
                        <Text
                            textTransform="uppercase"
                            fontWeight={"medium"}
                            fontSize="13px">
                            {home}
                        </Text>
                    </a>

                    <Flex>
                        <Menu>
                            <MenuButton as="text" >
                                <Text
                                    textTransform="uppercase"

                                    fontWeight={"medium"}
                                    fontSize="13px">
                                    {departments}
                                </Text>
                            </MenuButton>
                            <MenuList>
                                <MenuItem>{guitars}</MenuItem>
                                <MenuItem>{guitarAmplifier}</MenuItem>
                                <MenuItem>{keyboard}</MenuItem>
                                <MenuItem>{guitarAccessories}</MenuItem>
                                <MenuItem>{ukulele}</MenuItem>
                                <MenuItem>{stopRecordingEquipments}</MenuItem>
                                <MenuItem>{dj}</MenuItem>
                            </MenuList>
                            <Text
                                textTransform="uppercase"

                                fontWeight={"400"}
                                fontSize={"20px"}>
                                <FaAngleDown />
                            </Text>
                        </Menu>

                    </Flex>

                    <Flex>
                        <Menu>
                            <MenuButton as="text" >
                                <Text
                                    textTransform="uppercase"

                                    fontWeight={"medium"}
                                    fontSize="13px">
                                    {brands}
                                </Text>
                            </MenuButton>

                            <MenuList>
                                <MenuItem>{beyerdynamic}</MenuItem>
                                <MenuItem>{nativeInstruments}</MenuItem>
                                <MenuItem>{hexInstruments}</MenuItem>
                                <MenuItem>{laney}</MenuItem>
                                <MenuItem>{stagg}</MenuItem>
                                <MenuItem>{alctron}</MenuItem>
                                <MenuItem>{manaslu}</MenuItem>
                                <MenuItem>{mxl}</MenuItem>

                            </MenuList>


                            <Text
                                fontWeight={"400"}
                                fontSize={"20px"}>
                                <FaAngleDown />
                            </Text>



                        </Menu>
                    </Flex>

                    <Text
                        textTransform="uppercase"

                        fontWeight={"medium"}
                        fontSize="13px">
                        {blog}
                    </Text>



                </Flex>

                <Flex gap={5} align="center" cursor={"pointer"} >
                    <Text
                        fontWeight={"medium"}
                        fontSize={"13px"}>
                        {login}
                    </Text>
                    <Flex gap={2} align="center" cursor={"pointer"} >
                        <Text
                            fontWeight={"medium"}
                            fontSize={"13px"}>
                            {cart}
                        </Text>
                        <Text
                            fontSize={"30px"}
                            color={"red.500"}>
                            <FaCartPlus />
                        </Text>
                    </Flex>

                </Flex>

            </Flex>
        </Box>
    )
}

export default Navbar