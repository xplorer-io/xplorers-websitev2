import React, { ReactNode } from "react";

import { Stack } from "@chakra-ui/react";

interface IPlaylistPageLayoutProps {
  children: ReactNode;
}
export function PlaylistContainerLayout({ children }: IPlaylistPageLayoutProps) {
  return (
    <Stack paddingY="12" marginX="12">
      {children}
    </Stack>
  );
}
