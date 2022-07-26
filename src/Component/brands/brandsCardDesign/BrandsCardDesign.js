import { Box, Image } from '@chakra-ui/react'

const BrandsCardDesign = ({data}) => {
  return (
<Box pl={10} pr={20} >

<Image width={20}
    ml={8}
    src={data.image} alt="authorizedBrand">

</Image>
</Box>
  )
}

export default BrandsCardDesign