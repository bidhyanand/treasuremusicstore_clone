import { Button, Divider, Flex, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Select, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { FaAngleDown } from 'react-icons/fa'
import { useNavigate } from 'react-router'
import { departments, guitarAccessories, guitarAmplifier, guitars, keyboard } from '../../../constant/text'

const DracwerContent = () => {
    const navigate = useNavigate()
    return (
        <Flex justifyContent={"flex-start"} my="10%" width={"100%"} >
            <VStack align={"start"} spacing="4%" cursor={"pointer"} >
                <InputGroup>
                    <InputRightElement children={<BsSearch />} />
                    <Input placeholder="Search" variant={"filled"} />
                </InputGroup>
                <Divider
                    borderWidth={"1px"}
                    borderColor="gray.200" />

                <Text fontSize="20px" onClick={()=>navigate('/')}  >
                    Home
                </Text>
                <Divider
                    borderWidth={"1px"}
                    borderColor="gray.200" />
                <Flex>
                    <Menu >
                        <MenuButton as="text"  >
                            <Text
                            
                                fontSize="20px">
                                {departments}
                            </Text>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>{guitars}</MenuItem>
                            <MenuItem>{guitarAmplifier}</MenuItem>
                            <MenuItem>{keyboard}</MenuItem>
                            <MenuItem>{guitarAccessories}</MenuItem>

                        </MenuList>
                        <Button
                        ml={"50%"}
                            bg={"none"}
                            _hover={{bg:"nonw"}}
                            alignSelf={"center"}
                            fontWeight={"400"}
                            fontSize={"40px"}>
                            <FaAngleDown  />
                        </Button>
                    </Menu>

                </Flex>
                <Divider
                    borderWidth={"1px"}
                    borderColor="gray.200" />
                <Text fontSize={"20px"} >
                    Blog
                </Text>
                <Divider
                    borderWidth={"1px"}
                    borderColor="gray.200" />
                <Text fontSize={"20px"} >
                    Login
                </Text>

            </VStack>

        </Flex>
    )
}

export default DracwerContent