"use client";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  const navLinks = [
    { label: "Playlist", href: "/playlist" },
    { label: "Projects", href: "/projects" },
  ];

  return (
    <Box
      sx={{
        justifyContent: "center",
        gap: "1rem",
        display: { sm: "none", md: "flex" },
      }}
    >
      {navLinks.map(({ label, href }) => {
        const isActive = pathname.includes(href);
        return (
          <Link key={label} href={href}>
            <Text
              sx={{
                fontWeight: "bold",
                color: isActive ? "black" : "#A0A0A0",
              }}
            >
              {label}
            </Text>
          </Link>
        );
      })}
    </Box>
  );
};

export default NavLinks;
