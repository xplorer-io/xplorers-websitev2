"use client";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import NavLinks from "./NavLinks";
import Logo from "../Logo";

const SearchBox = () => {
  return <Box></Box>;
};

const Navbar = () => {
  return (
    <Flex minH={"10vh"}>
      <Logo />
      <SearchBox />
      <NavLinks />
    </Flex>
  );
};

export default Navbar;
