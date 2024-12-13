import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function Section_1() {
    return (
        <Flex flexDirection={"column"}>
            <Flex justifyContent={"space-between"} padding={"60px"}>
                <Box width={"60%"}>
                    <Heading fontSize={"30px"} mx={"40px"} fontWeight={"800"}>Cue the high kicks.</Heading>
                </Box>
                <Box width={"40%"} textAlign={"right"}>
                    <Text mx={"40px"}>Just like the Radio City Rockettes®, these show- <br />stopping gifts always give a spectacular performance.</Text>
                </Box>
            </Flex>
            <Flex justifyContent={"space-between"} >
                <Box>
                    <Box>
                        <Image src="public\images\MediaAction_D_Leggings.webp" height={"600px"} width={"90%"}/>
                    </Box>
                    <Flex  gap={"10px"} marginTop={"20px"} flexDirection={"column"}>
                        <Heading fontWeight={"bolder"} fontSize={"28px"}>Run it again in Wunder Train.</Heading>
                        <Text>If the Rockettes do over 200 kicks per show, imagine how many this sleek, supportive tight racks up in rehearsal.</Text>
                        <Button backgroundColor={"white"} color={"black"} border={"1px solid black"} width={"150px"} padding={"25px 7px"} fontWeight={"650"} _hover={{bg:"black",color:"white"}}>{"SHOP LEGGINGS"}</Button>
                    </Flex>
                </Box>
                <Box>
                    <Box >
                        <Image src="public\images\MediaAction_D_CoatsJackets.webp" height={"600px"} width={"90%"} />
                    </Box>
                    <Flex gap={"10px"} marginTop={"20px"} flexDirection={"column"}>
                        <Heading fontWeight={"bolder"} fontSize={"28px"}>Already warmed up in Wunder Puff.</Heading>
                        <Text>This featherlight jacket locks in heat, so by the time the Rockettes reach the studio, they won’t miss a beat.
                        </Text>
                        <Button backgroundColor={"white"} color={"black"} border={"1px solid black"} width={"150px"} padding={"25px 100px"} fontWeight={"650"}  _hover={{bg:"black",color:"white"}}>{"SHOP COATS & JACKETS"}</Button>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    )
}
