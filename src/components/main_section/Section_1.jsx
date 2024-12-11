import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function Section_1() {
  return (
    <Flex>
        <Flex></Flex>
        <Flex>
            <Box>Cue the high kicks.</Box>
            <Box>Just like the Radio City Rockettes®, these show-stopping gifts always give a spectacular performance.</Box>
        </Flex>
        <Flex>
            <Box>
                <Image src="public\images\MediaAction_D_Leggings.webp"/>
                <Heading>Run it again in Wunder Train.</Heading>
                <Text>If the Rockettes do over 200 kicks per show, imagine how many this sleek, supportive tight racks up in rehearsal.</Text>
                <Button>{"SHOP LEGGINGS"}</Button>
            </Box>
            <Box>
                <Image src="public\images\MediaAction_D_CoatsJackets.webp"/>
                <Heading>Already warmed up in Wunder Puff.</Heading>
                <Text>This featherlight jacket locks in heat, so by the time the Rockettes reach the studio, they won’t miss a beat.
                </Text>
                <Button>{"SHOP COATS & JACKETS"}</Button>
            </Box>
        </Flex> 
    </Flex>
  )
}
