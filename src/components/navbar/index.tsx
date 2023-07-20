"use client";
import { Flex } from "@chakra-ui/react";
import React from "react";
import NavLinks from "@components/navbar/NavLinks";
import Logo from "@components/Logo";
import NavButtons from "./NavButtons";

const Navbar = () => {
  return (
    <Flex
      sx={{
        minHeight: "10vh",
        justifyContent: "space-around",
        alignItems: "center",
        boxShadow: "0 2px 5px #c9c9c9",
        width: "100%",
      }}
    >
      <Logo />
      <NavLinks />
      <NavButtons />
    </Flex>
  );
};

export default Navbar;
