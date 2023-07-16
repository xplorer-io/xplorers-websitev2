"use client";
import { Flex } from "@chakra-ui/react";
import React from "react";
import Logo from "../Logo";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <Flex minH={"10vh"}>
      <Logo />
      <SocialLinks />
    </Flex>
  );
};

export default Footer;
