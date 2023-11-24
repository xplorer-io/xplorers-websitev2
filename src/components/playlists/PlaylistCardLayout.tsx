import React, { ReactNode } from "react";

import { Flex } from "@chakra-ui/react";

interface IPlaylistCardLayoutProps {
  children: ReactNode;
}
export function PlaylistCardLayout({ children }: IPlaylistCardLayoutProps) {
  return (
    <Flex
      flexDirection="column"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p="4"
      gap="5"
    >
      {children}
    </Flex>
  );
}
