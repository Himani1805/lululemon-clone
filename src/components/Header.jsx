import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineGiftTop } from "react-icons/hi2";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { TfiWorld } from "react-icons/tfi";

export default function Header() {
  return (
    <Box>
      <Flex>
        <Text>Wrap up gifts the Radio City Rockettes® strut, stretch, and swear by.</Text><Link to='/new'>Shop What's New</Link>
      </Flex>
      <Flex justifyContent={"end"} gap={"20px"} alignItems={"center"}>
        <Flex alignItems={"center"} gap={"8px"} >
          <IoLocationOutline />
          <Link>Store Locator</Link>
        </Flex>
        <Flex alignItems={"center"} gap={"8px"}>
          <HiOutlineGiftTop />
          <Link>Gift Cards</Link>
        </Flex>
        <Flex alignItems={"center"} gap={"8px"}>
          <IoIosHelpCircleOutline />
          <Link>Get Help</Link>
        </Flex>
        <Flex alignItems={"center"} gap={"8px"}>
          <TfiWorld />
          <Link>USA</Link>
        </Flex>
      </Flex>
    </Box>
  )
}
