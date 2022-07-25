import { Box, Flex, Image, SimpleGrid } from '@chakra-ui/react'
import track from '../images/Trak.jpeg'
import komp from '../images/Komp.jpeg'
const NewProduct = () => {
  return (
    <SimpleGrid columns={2} my={"4%"} >
        <Flex justifyContent={"space-between"} gap={10} >
        <Image  src={track} alt='New'/>
        <Image  src={komp} alt ="New"/>
        </Flex>
    </SimpleGrid>
  )
}

export default NewProduct