
import { Box, Button, Flex, HStack, Input } from "@chakra-ui/react";
import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiHeart2Line } from "react-icons/ri";
import { BsCart } from "react-icons/bs";
import { MdOutlineSearch } from "react-icons/md";



const Navbar = () => {
  return (
    <Flex>
      <Flex width={"100%"} justifyContent={"space-evenly"} >
        <Flex width={"15%"} >
          <img src="https://corporate.lululemon.com/~/media/Images/L/Lululemon/logo/logo-black-full.svg" alt="logo" width={"160px"} />
        </Flex>
        <Flex width={"60%"} listStyleType={"none"} gap={"20px"} fontWeight={"700"} alignItems={"center"} marginLeft={"20px"}>
          <a href="#"><li>Women</li></a>
          <a href="#"><li>Men</li></a>
          <a href="#"> <li>Accessories</li></a>
          <a href="#"> <li>Shoes</li></a>
          <a href="#"> <li>What's New</li></a>
          <a href="#"> <li style={{ color: "red" }}>Gifts</li></a>
        </Flex>
        <Flex width={"30%"} alignItems={"center"} gap={"20px"} justifyContent={"space-evenly"}>
          <Button backgroundColor={"white"} border={"1px solid black"} width={"8/12"} py={"24px"} color={"black"}><MdOutlineSearch />
            {"Search"}</Button>
          <FaRegCircleUser size={"25px"} />
          <RiHeart2Line size={"25px"} />
          <BsCart size={"25px"} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;

