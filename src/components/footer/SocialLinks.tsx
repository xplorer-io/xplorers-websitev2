"use client";

import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { navLinks } from "../../types/constants";

const SocialLinks = () => {
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
          {navLinks
            .filter((project) => project.enabled)
            .map((link) => {
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
