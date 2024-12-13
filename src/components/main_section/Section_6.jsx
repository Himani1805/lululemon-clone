import { Box, Flex, Heading, Text, Button, Image } from '@chakra-ui/react'
import React from 'react'

export default function Section_6() {
  return (
    <Box>
        <Heading>One for them, make it two.</Heading>
        <Flex flexWrap={"wrap"} gap={"20px"} mx={"auto"} textAlign={"left"}>
            <Box border={"2px solid red"} width={"20%"}>
                    <Image src='public\images\LU9BG1S_027597_1.webp' />
                    <Flex justifyContent={"space-between"}>
                        <Text>Everywhere Belt Bag 1L</Text>
                        <Text>$38</Text>
                    </Flex>
            </Box>
            <Box width={"20%"}>
                    <Image src='public\images\LW9EWOS_0001_1.webp'  />
                    <Flex justifyContent={"space-between"}>
                        <Text>Dual Pouch Wristlet</Text>
                        <Text>$48</Text>
                    </Flex>
            </Box>
            <Box width={"20%"}>
                    <Image src='public\images\LW9FHGS_067560_1.webp' />
                    <Flex justifyContent={"space-between"}>
                        <Text>Women's Daily Stride Sparkle Quarter Socks</Text>
                        <Text>$18</Text>
                    </Flex>
            </Box>
            <Box width={"20%"}>
                    <Image src='public\images\LU9BW1S_019746_1.webp' />
                    <Flex justifyContent={"space-between"}>
                        <Text>Close-Fit Wool-Blend Ribbed Knit Beanie</Text>
                        <Text>$48</Text>
                    </Flex>
            </Box>
            <Box width={"20%"}>
                    <Image src='public\images\LU9C85S_3385_1.webp' />
                    <Flex justifyContent={"space-between"}>
                        <Text>Clippable Nano Pouch Plush Fleece</Text>
                        <Text>$34</Text>
                    </Flex>
            </Box>
            <Box width={"20%"}>
                    <Image src='public\images\LW9FJUS_068273_1.webp' />
                    <Flex justifyContent={"space-between"}>
                        <Text>Clippable Card Pouch Iridescent</Text>
                        <Text>$38</Text>
                    </Flex>
            </Box>
            <Box width={"20%"}>
                    <Image src='public\images\LU9CS7S_0001_1.webp' />
                    <Flex justifyContent={"space-between"}>
                        <Text>Insulated Mug 12oz Shine</Text>
                        <Text>$38</Text>
                    </Flex>
            </Box>
            <Box width={"20%"}>
                    <Image src='public\images\LM9AW6S_069311_1.webp' />
                    <Flex justifyContent={"space-between"}>
                        <Text>Men's Daily Stride Ribbed Comfort Crew Socks 3 Pack</Text>
                        <Text>$48</Text>
                    </Flex>
            </Box>
        </Flex>
        <Button>SHOP GIFTS under $50 </Button>   
    </Box>
  )
}
