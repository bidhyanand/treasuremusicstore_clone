import { GridItem, Image, SimpleGrid,Box} from '@chakra-ui/react'
import sale from '../../../images/sale.jpeg'
import ourProducts from '../../../images/ourProducts.jpeg'
import aboutus from '../../../images/aboutus.jpeg'
import './salesBanner.css'
import { useNavigate } from 'react-router'

const SalesBanner = () => {

  const handleClick=()=>{
    navigate("/ourProductList")

  }

  const navigate = useNavigate()

  return (
    <SimpleGrid columns={3} gap={{base : "1", md : "10"}} my={{base : "7%",md : "4%" }} >

      <GridItem colSpan={{base : "3", md : "1"}}>

          <Image src={sale} alt="banner" className='imageSlide'/>
         
          


      </GridItem>

      <GridItem colSpan={{base : "3", md : "1"}} >
          <Image src={ourProducts} alt="banner" className='imageSlide' onClick={handleClick} cursor="pointer" />
      </GridItem>

      <GridItem colSpan={{base : "3", md : "1"}} >
          <Image src={aboutus} alt="banner" className='imageSlide' />
      </GridItem>

      


    </SimpleGrid>
  )
}

export default SalesBanner