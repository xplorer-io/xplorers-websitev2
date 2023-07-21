"use client";
import React from "react";
import { NextPage } from "next";
import { Box, Text } from "@chakra-ui/react";
import logo from "@assets/images/xplorers-logo-transparent.png";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text fontSize="4xl" color={"blue"} sx={{ fontWeight: "bold" }}>
        We Are
      </Text>
      <Image src={logo} alt="logo" height={500} width={500} />
    </Box>
  );
};

export default Home;
