"use client";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import NavLinks from "@components/navbar/NavLinks";
import Logo from "@components/Logo";
import NavButtons from "./NavButtons";
import { HamburgerIcon } from "@chakra-ui/icons";
import ROUTE from "../../types/routes";

const Navbar = () => {
  const footerLinks = [
    {
      name: "About",
      route: ROUTE.ABOUT,
    },
    {
      name: "Playlist",
      route: ROUTE.PLAYLIST,
    },
    {
      name: "Project",
      route: ROUTE.PROJECTS,
    },
    {
      name: "Accolades",
      route: ROUTE.ACCOLADES,
    },
  ];
  return (
    <Flex
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 5px #c9c9c9",
        width: "100%",
        padding: "1rem",
      }}
    >
      <Box sx={{ display: { sm: "flex", md: "none" } }}>
        <Menu>
          <MenuButton as={Button} variant={"text"}>
            <HamburgerIcon />
          </MenuButton>
          <MenuList>
            {footerLinks.map(({ name, route }) => {
              return (
                <MenuItem as={"a"} href={route} key={route}>
                  {name}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </Box>
      <Box sx={{ display: { sm: "none", md: "flex" } }}>
        <Logo />
      </Box>
      <NavLinks />
      <NavButtons />
    </Flex>
  );
};

export default Navbar;
