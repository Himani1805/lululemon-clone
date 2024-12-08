
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex className="navbar" border={"5px solid red"}  >
      <Flex className="navbarContainer" width={"100%"} gap={"10px"} border={"5px solid yellow"} >
        <Flex className="logo" width={"15%"} border={" 3px solid red"}>
            <img src="https://corporate.lululemon.com/~/media/Images/L/Lululemon/logo/logo-black-full.svg" alt="logo" />
        </Flex>
        <Flex className="mainMenu" border={"5px solid yellowgreen"} width={"70%"} listStyleType={"none"} justifyContent={"space-evenly"} fontWeight={"500"}>
            <a href="#"><li className="menuItem">ABOUT US</li></a>
            <a href="#"><li className="menuItem">OUR BUSINESS</li></a>
            <a href=""> <li className="menuItem">OUR IMPACT</li></a>
            <a href=""> <li className="menuItem">INVESTORS</li></a>
            <a href=""> <li className="menuItem">MEDIA</li></a>
            <a href=""> <li className="menuItem">CAREERS</li></a>
        </Flex>
        <Flex className="navbarRight" border={"5px solid yellowgreen"} width={"20%"}>
          <button className="searchIcon">
            <i className="a aSearch"></i>
          </button>
          <a href="/shop" className="shopButton">
            Shop →
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;

