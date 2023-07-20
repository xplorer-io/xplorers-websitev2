"use client";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NavLinks = () => {
  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Playlist", href: "/playlist" },
  ];

  return (
    <Flex
      sx={{
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      {navLinks.map(({ label, href }) => {
        return (
          <Link
            key={label}
            href={href}
            style={{
              color: "#A0A0A0",
              fontWeight: "bold",
            }}
          >
            {label}
          </Link>
        );
      })}
    </Flex>
  );
};

export default NavLinks;
