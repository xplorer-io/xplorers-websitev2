import { Box, Flex } from "@chakra-ui/react";
("use client");
import React from "react";
import NavLinks from "./NavLinks";
import Logo from "../Logo";

const SearchBox = () => {
  return <Box></Box>;
};

const Navbar = () => {
  return (
    <Flex>
      <Logo />
      <SearchBox />
      <NavLinks />
    </Flex>
  );
};

export default Navbar;
