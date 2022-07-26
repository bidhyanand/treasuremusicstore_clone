import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"

const ModalDesign = (children,title,isModalOpen,isModalClose) => {
  return (
        <Modal isOpen={isModalOpen} onClose={isModalClose} size="lg" >
            <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {title}
            </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {children}
          </ModalBody>
</ModalContent>
        </Modal>
  )
}

export default ModalDesign