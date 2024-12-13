import { Flex, Image, Heading, Box, Button, Text} from '@chakra-ui/react'
import React from 'react'

export default function Section_2() {
  return (
    <Box textAlign={"center"} padding={"50px"}>
        <Heading fontWeight={"bolder"} fontSize={"56px"}>The Wunder lineup.</Heading>
        <Flex flexWrap={"wrap"} gap={"20px"} mx={"auto"} textAlign={"left"} padding={"50px"}>
            <Box width={"20%"}>
                    <Image src='public\images\LW5CQDS_030699_1.webp' />
                    <Flex justifyContent={"space-between"}>
                        <Text>Wunder Train High-Rise Tight 25"</Text>
                        <Text>$98 - $118</Text>
                    </Flex>
            </Box>
            <Box width={"20%"}>
                    <Image src='public\images\LW4BWQS_031382_1.webp'  />
                    <Flex justifyContent={"space-between"}>
                        <Text>Wunder Puff 600-Down-Fill Cropped Vest"</Text>
                        <Text>$248</Text>
                    </Flex>
            </Box>
            <Box width={"20%"}>
                    <Image src='public\images\LW5FELS_066827_1.webp' />
                    <Flex justifyContent={"space-between"}>
                        <Text>Wunder Under SmoothCover High-Rise Tight 25"</Text>
                        <Text>$98</Text>
                    </Flex>
            </Box>
            <Box width={"20%"}>
                    <Image src='public\images\LW4CAGS_067243_1.webp' />
                    <Flex justifyContent={"space-between"}>
                        <Text>Wunder Puff 600-Down-Fill Long Jacket</Text>
                        <Text>$398</Text>
                    </Flex>
            </Box>
            <Box width={"20%"}>
                    <Image src='public\images\LW3HZNS_067531_1.webp' />
                    <Flex justifyContent={"space-between"}>
                        <Text>Alpaca Wool-Blend Shawl-Collar Cardigan</Text>
                        <Text>$188</Text>
                    </Flex>
            </Box>
            <Box width={"20%"}>
                    <Image src='public\images\LW5GPAS_011547_1.webp' />
                    <Flex justifyContent={"space-between"}>
                        <Text>Scuba Mid-Rise Oversized Jogger Regular</Text>
                        <Text>$118</Text>
                    </Flex>
            </Box>
            <Box width={"20%"}>
                    <Image src='public\images\LW4CGVS_0001_1.webp' />
                    <Flex justifyContent={"space-between"}>
                        <Text>Scuba Full-Zip Hoodie</Text>
                        <Text>$118</Text>
                    </Flex>
            </Box>
            <Box width={"20%"}>
                    <Image src='public\images\LW3HZQS_017314_1.webp' />
                    <Flex justifyContent={"space-between"}>
                        <Text>Cashmere Slim-Fit Crewneck Sweater</Text>
                        <Text>$198</Text>
                    </Flex>
            </Box>
        </Flex>
        <Button backgroundColor={"white"} color={"black"} border={"1px solid black"} width={"150px"} padding={"25px 100px"} fontWeight={"650"}  _hover={{bg:"black",color:"white"}}>SHOP WHAT'S NEW</Button>  
    </Box>
  )
}
