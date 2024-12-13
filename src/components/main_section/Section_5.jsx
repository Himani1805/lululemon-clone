import { Button, Flex, Heading, Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function Section_5() {
  return (
    <Box>
        <Box>        
            <Heading>Our favourite gifts for your favourite people.</Heading>
        </Box>
        <Flex>
        <Box>
            <Image src='public\images\MediaAction_D_GiftsForHer.webp'/>
            <Heading>Gifts they’ll love to live in.</Heading>
            <Text>If feeling really, really comfortable is on their Wish List, wrap up Groove Pant’s iconic softness.</Text>
            <Button>{"SHOP GIFTS FOR HER"}</Button>
        </Box>
        <Box>
            <Image src='public\images\MediaAction_D_GiftsForHim.webp'/>
            <Heading>Time to retire the flannel PJs.</Heading>
            <Text>Naturally breathable, fleecy Steady State gifts level up their festive looks—without ever compromising comfort.</Text>
            <Button>{"SHOP GIFTS FOR HIM"}</Button>

        </Box>
        </Flex>
    </Box>
  )
}
