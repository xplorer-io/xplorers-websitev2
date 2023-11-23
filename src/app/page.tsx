"use client";
import React from "react";
import { NextPage } from "next";
import { Box, Button, Text } from "@chakra-ui/react";
import logo from "@assets/images/xplorers-logo-transparent.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { joinSlackUrl } from "../types/constants";
import slackIcon from "../../public/images/slackIcon.svg";

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
      <motion.div
        initial={{ scale: 0.5, position: "relative", bottom: "100px" }}
        animate={{ scale: 1, bottom: "0px" }}
        transition={{ duration: 0.3 }}
      >
        <Text
          fontSize="4xl"
          sx={{
            fontWeight: "bold",
            color: "black.500",
          }}
        >
          We Are
        </Text>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Image src={logo} alt="logo" height={500} width={500} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, position: "relative", bottom: "100px" }}
        animate={{ opacity: 1, bottom: "0px" }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Button
          mt={4}
          rightIcon={
            <motion.div
              whileHover={{ scale: 1.5, rotate: 90 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
            >
              <Image src={slackIcon} alt={""} height={20} width={20}></Image>
            </motion.div>
          }
        >
          <a href={joinSlackUrl} target="_blank" rel="noreferrer">
            Join us in
          </a>
        </Button>
      </motion.div>
    </Box>
  );
};

export default Home;
