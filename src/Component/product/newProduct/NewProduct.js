import { Box, Flex, Image, SimpleGrid } from '@chakra-ui/react'
import track from '../../../images/Trak.jpeg'
import komp from '../../../images/Komp.jpeg'
import './newProduct.css'
const NewProduct = () => {
  return (
    <SimpleGrid columns={{base : "1",md :"2"}} my={"6%"} gap={{base: "5" , md: "10"}} >
        <Image  src={track} alt='New' className='imageScroll' />
        <Image  src={komp} alt ="New" className='imageScroll'/>
    </SimpleGrid>
  )
}

export default NewProduct