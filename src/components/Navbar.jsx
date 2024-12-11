
import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiHeart2Line } from "react-icons/ri";
import { BsCart } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";


const Navbar = () => {
  return (
    <Flex className="navbar" border={"5px solid red"}  >
      <Flex className="navbar-container" width={"100%"} gap={"10px"} border={"5px solid yellow"} >
        <Flex className="logo" width={"15%"} border={" 3px solid red"}>
            <img src="https://corporate.lululemon.com/~/media/Images/L/Lululemon/logo/logo-black-full.svg" alt="logo" />
        </Flex>
        <Flex border={"5px solid yellowgreen"} width={"70%"} listStyleType={"none"} justifyContent={"space-evenly"} fontWeight={"500"}>
            <a href="#"><li>Women</li></a>
            <a href="#"><li>Men</li></a>
            <a href="#"> <li>Accessories</li></a>
            <a href="#"> <li>Shoes</li></a>
            <a href="#"> <li>What's New</li></a>
            <a href="#"> <li>Gifts</li></a>
        </Flex>
        <Flex border={"5px solid yellowgreen"} width={"20%"}>
          <Button backgroundColor={"white"} color={"black"} border={"2px solid black"}>{"Search"}</Button>
          <FaRegCircleUser />
          <RiHeart2Line />
          <BsCart />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;

