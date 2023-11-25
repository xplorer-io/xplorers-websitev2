"use client";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import ROUTE from "../../types/routes";
import { useRouter } from "next/navigation";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const SocialLinks = () => {
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

  const router = useRouter();
  return (
    <div>
      <Menu>
        <MenuButton
          as={Button}
          variant={"text"}
          rightIcon={<ChevronDownIcon />}
        >
          Links
        </MenuButton>
        <MenuList>
          {footerLinks.map((link) => {
            return (
              <MenuItem
                key={link.route}
                onClick={() => router.push(link.route)}
              >
                {link.name}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </div>
  );
};

export default SocialLinks;
