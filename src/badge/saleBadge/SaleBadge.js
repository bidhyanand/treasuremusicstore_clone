import { Box } from "@chakra-ui/react"
import { quickview, sale } from "../../constant/text"
import './saleBadge.css'
const SaleBadge = () => {
    return (
        <Box className="badgeDesign"
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
            ml={5}
        >
            {sale}
        </Box>
    )
}
export default SaleBadge