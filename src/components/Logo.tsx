"use client";
import Image from "next/image";
import React from "react";
import logo from "@assets/xplorers-logo-transparent.png";
import { Box } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Box>
      <Image
        src={logo}
        alt="xplorers-logo"
        style={{ maxHeight: "200px", maxWidth: "200px" }}
      />
    </Box>
  );
};

export default Logo;
