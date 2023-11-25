"use client";
import { Flex } from "@chakra-ui/react";
import React from "react";
import Logo from "../Logo";
import SocialLinks from "./SocialLinks";
import NavIcons from "../navbar/NavIcons";

const Footer = () => {
  return (
    <Flex
      sx={{
        justifyContent: "space-around",
        alignItems: "center",
        boxShadow: "0 2px 5px #c9c9c9",
        width: "100%",
        padding: "1rem",
      }}
    >
      <Logo />
      <NavIcons />
      <SocialLinks />
    </Flex>
  );
};

export default Footer;
