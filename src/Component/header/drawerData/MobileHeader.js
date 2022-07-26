import { Box, Container, Flex, Image, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { FaAlignJustify, FaCartPlus } from 'react-icons/fa'
import { navbarColor } from '../../../constant/color'
import logo from '../../../images/logo.jpeg'
import { lightRedColor } from '../../../constant/color'
import DrawerDesign from '../../drawer/Drawer'
import DrawerContent from './DracwerContent'
const MobileHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()


  return (
    <div>
      <Box height={"35px"}
        bgColor={navbarColor} />

      <Container>
        <Flex justifyContent={"space-between"} align={"center"} >
          <FaAlignJustify ref={btnRef} onClick={onOpen} fontSize={"30px"} pt={5} />

          <Image src={logo} alt="logo" height={"80px"} />
          <FaCartPlus
            color={lightRedColor}
            fontSize={"40px"}
          />
        </Flex>
      </Container>

      {/* drawer */}
      <DrawerDesign isOpen={isOpen} onClose={onClose} >
        <DrawerContent />
      </DrawerDesign>

    </div>
  )
}

export default MobileHeader