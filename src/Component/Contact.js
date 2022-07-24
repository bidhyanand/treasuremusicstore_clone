import { Avatar, Box, Center, Flex, Image, SimpleGrid, Text, Wrap, WrapItem } from "@chakra-ui/react"
import { FaMedal } from "react-icons/fa"
import { arrivalCategoryColor, blackColor, whiteColor,navbarColor } from "../constant/color"
import contactData from "../data/contactData"

const Contact = () => {
  return (
    <Box width={"80%"} ml={"10%"} mr={"10%"} >
        <SimpleGrid columns={3}>
            {contactData.map((data,index)=>{
                return(
                    <div key={index} >
                            <Center>
                            <Text 
                            borderRadius={"50%"}
                            border={"3px solid black"}
                            width={50}
                            height={50}
                            fontSize={30}
                            pt = {2}
                            pl = {1.5}
                            _hover = {{
                                backgroundColor : navbarColor
                            }}
                           
                            >
                            {data.icon}
                            </Text>
                            </Center>
                     <br/>
                             <Text
                        textTransform="uppercase"
                        fontSize={"16px"}
                        fontWeight={700}
                        ml={10}
                        textAlign="center">
                            {data.title}
                        </Text>

                        <Text
                        fontSize={"16px"}
                        fontWeight={400}
                        ml={10}
                        textAlign="center">
                            {data.details}
                        </Text>
                    </div>
                )
            })}
        </SimpleGrid>
    </Box>

  )
}

export default Contact