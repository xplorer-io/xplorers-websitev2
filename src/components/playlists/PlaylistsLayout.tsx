import React, { ReactNode } from "react";

import { Stack } from "@chakra-ui/react";

interface IPlaylistsLayoutProps {
  children: ReactNode;
}
export function PlaylistsLayout({ children }: IPlaylistsLayoutProps) {
  return (
    <Stack gap="5" wrap="wrap" alignItems="center">
      {children}
    </Stack>
  );
}
