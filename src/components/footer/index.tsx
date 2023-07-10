"use client";
import { Flex } from "@chakra-ui/react";
import React from "react";
import Logo from "../Logo";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <Flex>
      <Logo />
      <SocialLinks />
    </Flex>
  );
};

export default Footer;
