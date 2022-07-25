import { Box } from '@chakra-ui/react'

const offerCountDownBadge = () => {
  return (
    <Box
    borderRadius={"50%"}
    backgroundColor="red"
    height={50}
    width={50}
    textAlign="center"
    lineHeight={"50px"}
    color="white"
    fontWeight={"bold"}
    position={"absolute"}
    top={8}
    ml = {5}
>
    Sale!
</Box>
  )
}

export default offerCountDownBadge