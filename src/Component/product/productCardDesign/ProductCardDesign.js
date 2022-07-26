import { Box, Image, Text, useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import QuickView from "../../../badge/quickView/QuickView"
import SaleBadge from "../../../badge/saleBadge/SaleBadge"
import { arrivalCategoryColor } from "../../../constant/color"
import ModalDesign from "../../../modal/ModalDesign"

const ProductCardDesign = ({ data, showQuickView }) => {
    const [quickViewShown, setShowQuickViewShown] = useState(false)
    const handleHover = ()=>{
        setShowQuickViewShown(!quickViewShown)
    }

    // for Modal
    const {isOpen,onClose,onOpen}=useDisclosure()

    // states to store the clickedIndex
    // const [clickedIndex,setClickedIndex] = useState(-1)

    // function for image
    const handleModal=(index)=>{
        console.log(index,"hello index");
        // setClickedIndex(index)
        onOpen()

    }

    return (
        <Box 
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        >
            <Image
                // onClick={() => handleModal(index)}
                ml={10}
                width={180}
                height={180}
                src={showQuickView && quickViewShown ? data.image1:data.image} alt="newArrivals"
                />


            <Text
                color={arrivalCategoryColor}
                textTransform="uppercase"
                fontSize={"12px"}
                fontWeight={400}
                ml={10}
                textAlign="center">
                {data.category}
            </Text>

            <Text
                ml={10}
                textAlign={"center"}
                fontSize={14}
                fontWeight={400}>
                {data.details}
            </Text>

            {data.price && <Text
                textAlign={"center"}
                fontWeight={700}
                fontSize={"15px"}>
                Rs  {data.price.toLocaleString()}
            </Text>}

            {data.price1 && <Text
                textDecoration={data.sale ? "line-through" : null}
                textAlign={"center"}
                fontWeight={700}
                fontSize={"15px"}>
                Rs  {data.price1}
            </Text>}

            {data.price2 &&
                <>
                    <Text
                        textAlign={"center"}
                        fontWeight={700}
                        fontSize={"15px"}>
                        Rs  {data.price2}
                    </Text>
                </>}

            {data.sale &&
                <SaleBadge />
            }

            {showQuickView && quickViewShown &&
            
            <Box onClick={handleModal} >
            <QuickView/>
            </Box>
            }
            
            


 <Text
textTransform="uppercase"
fontSize={"15px"}
fontWeight={700}
ml={10}
textAlign="center">
{data.title}
</Text>

<Text
color={arrivalCategoryColor}
fontSize={"12px"}
fontWeight={400}
ml={10}
textAlign="center">
{data.product} PRODUCTS
</Text>

            {/* modal design */}
            <ModalDesign isModalOpen={isOpen} isModalClose={onClose} >
                {/* {clickedIndex !== -1 && <>

                </>} */}
                <Image src={data.image}  />
                <br/>
                {data.category}

            </ModalDesign>
        </Box>
    )
}
export default ProductCardDesign