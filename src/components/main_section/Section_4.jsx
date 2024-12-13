import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function Section_4() {
  return (
    <Flex flexDirection={"column"} gap={"20px"}>
        <Box>
            <Image src='public\images\Med_MediaAction_D_Mens.webp' />
        </Box>
        <Box>
            <Heading>Gifts that walk the walk.</Heading>
            <Text>The shockingly comfortable ABC Pant will not-so-shockingly become their favourite.</Text>
            <Button>{"SHOP MEN'S"}</Button>
            <Button>{"SHOP ABC PANTS"}</Button>

        </Box>
        <Flex >
            <Heading>Presence, right on time.</Heading>
            <Text>Order gifts by Dec. 22 at 12pm PST, get them by Dec. 24. *Exclusions apply.</Text>
            <Button>{"SHOP GIFTS FOR ALL"}</Button>
        </Flex>  
    </Flex>
  )
}
