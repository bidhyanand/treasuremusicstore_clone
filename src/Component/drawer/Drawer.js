import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay } from '@chakra-ui/react'

const DrawerDesign = ({isOpen,onClose,children}) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement={"left"} >
        <DrawerOverlay/>
       <DrawerContent>
       <DrawerCloseButton color={"red"}/>

       <DrawerBody mt="10%">
            {children}
        </DrawerBody>
       </DrawerContent>
    </Drawer>
  )
}

export default DrawerDesign