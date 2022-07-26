import { Box } from '@chakra-ui/react'
import React from 'react'
import { quickview } from '../../constant/text'

const QuickView = () => {
  return (
    <Box className="badgeDesign"
            backgroundColor="red"
            height={"40px"}
            width={"200px"}
            textAlign="center"
            lineHeight={"40px"}
            color="white"
            fontWeight={"bold"}
            position={"absolute"}
            bottom={"45%"}
            ml={"35px"}
            opacity = {0.8}
        >
            {quickview}
        </Box>
  )
}

export default QuickView