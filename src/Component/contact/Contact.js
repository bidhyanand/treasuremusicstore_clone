import {  Box, Center,  SimpleGrid, Text,} from "@chakra-ui/react"
import { navbarColor } from "../../constant/color"
import contactData from "../../data/contactData"

const Contact = () => {
  return (
        <SimpleGrid columns={{base:"1" , md :"3"}} my={"4%"} >
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

  )
}

export default Contact