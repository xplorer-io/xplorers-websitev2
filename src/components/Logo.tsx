"use client";
import Image from "next/image";
import React from "react";
import logo from "@assets/images/xplorers-logo-transparent.png";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
// @ts-ignore
import ROUTE from "@types/routes";

const Logo = () => {
  return (
    <Box>
      <Link href={ROUTE.HOME}>
        <Image
          src={logo}
          alt="xplorers-logo"
          style={{ maxHeight: "200px", maxWidth: "200px" }}
        />
      </Link>
    </Box>
  );
};

export default Logo;
