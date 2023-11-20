import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NavButtons = () => {
  const navLinks = [{ label: "Log In", href: "/accolades" }];

  const menuItems = [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Playlist", href: "/playlist" },
  ];

  return (
    <>
      <Box sx={{ gap: "10px", display: { sm: "none", md: "flex" } }}>
        {navLinks.map(({ label, href }) => {
          return (
            <Button key={label}>
              <Link href={href}>{label}</Link>
            </Button>
          );
        })}
      </Box>
      <Box sx={{ gap: "10px", display: { sm: "flex", md: "none" } }}>
        <Menu>
          <MenuButton
            as={Button}
            variant={"text"}
            rightIcon={<ChevronDownIcon />}
          >
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          </MenuButton>
          <MenuList>
            {menuItems.map(({ label, href }) => {
              return (
                <MenuItem as={"a"} href={href} key={label}>
                  {label}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};

export default NavButtons;
