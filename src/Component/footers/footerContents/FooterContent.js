import { Box, Button, Flex, GridItem, Input, SimpleGrid, Text } from '@chakra-ui/react'
import { buttonColor, facebookColor, navbarColor } from '../../../constant/color'
import { signup } from '../../../constant/text'
import { footerContentData } from '../../../data/footerContentData'

const FooterContent = () => {
    return (
         <Box bg={navbarColor} >
            <Box width={"80%"} ml={"10%"} mr={"10%"} bg={navbarColor}>
        

                <SimpleGrid columns={{base:"1" , md:"3"}} gap={{base : "3" ,md: "5"}} my={"4%"} >
                    <GridItem>
                        <br />
                        <Text
                            fontWeight={600}
                            fontSize={"16px"}
                            color={'white'}>
                            {footerContentData.title}
                        </Text>

                        <br />
                        <Text
                            fontWeight={400}
                            fontSize={"14px"}
                            color={'white'}>
                            {footerContentData.description}
                        </Text>
                        <br/>
                        <Flex gap={3} >

                            {footerContentData.socialLinks.map((data, index) => {
                                return (
                                    <div key={index} >

                                        <Text
                                            borderRadius={"50%"}
                                            border={"3px solid white"}
                                            width={50}
                                            height={50}
                                            fontSize={30}
                                            pt={2}
                                            pl={1.5}
                                            mb={10}
                                            color={'white'}
                                            _hover={{
                                                backgroundColor: facebookColor

                                            }}
                                        >
                                            <a href={data.link} target="_blank">
                                                {data.icon}

                                            </a>



                                        </Text>

                                    </div>



                                )
                            })}


                        </Flex>


                    </GridItem>


                    <GridItem>
                        <br />
                        <Text
                            fontWeight={600}
                            fontSize={"16px"}
                            color={'white'}>
                            {footerContentData.youtube.title}

                        </Text>
                        <br />
                        <iframe width={{base :"350", md:"360"}} height={{base:"190",md:"200"}} src="https://www.youtube.com/embed/rYnXIMmvTPo?start=7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen
                        ></iframe>
                    </GridItem>

                    <GridItem>
                        <br />
                        <Text
                            fontWeight={600}
                            fontSize={"16px"}
                            color={'white'}>
                            {footerContentData.newsLetter.title}
                        </Text>
                        <br />

                        <Text
                            fontWeight={400}
                            fontSize={"14px"}
                            color={'white'}>
                            {footerContentData.newsLetter.description}
                        </Text>
                        <br />
                        <Input placeholder="Your Email (required)" />
                        <br />
                        <br />
                        <Button bgColor={buttonColor} mb={"4%"} >{signup}</Button>


                    </GridItem>

                </SimpleGrid>
                

             </Box>
         </Box>
    )
}

export default FooterContent