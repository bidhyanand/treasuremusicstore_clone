import { Box } from '@chakra-ui/react'
import Navbar from '../../Component/header/navbar/Navbar'
import TopHeader from '../../Component/header/topHeader/TopHeader'

const Header = () => {
  return (
    <Box display={{base : "none", md : "inline"}} >
      <TopHeader />
      <Navbar />
    </Box>
  )
}

export default Header