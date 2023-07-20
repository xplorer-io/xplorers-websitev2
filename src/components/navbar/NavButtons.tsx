import { Box, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NavButtons = () => {
  const navLinks = [
    { label: "Connect", href: "/connect" },
    { label: "Accolades", href: "/accolades" },
  ];
  return (
    <Flex sx={{ gap: "10px" }}>
      {navLinks.map(({ label, href }) => {
        return (
          <Button key={label}>
            <Link href={href}>{label}</Link>
          </Button>
        );
      })}
    </Flex>
  );
};

export default NavButtons;
