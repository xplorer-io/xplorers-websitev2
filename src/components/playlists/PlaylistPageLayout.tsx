import React, { ReactNode } from "react";

import { Stack } from "@chakra-ui/react";

interface IPlaylistPageLayoutProps {
  children: ReactNode;
}
export function PlaylistPageLayout({ children }: IPlaylistPageLayoutProps) {
  return (
    <Stack paddingY="12" marginX="12">
      {children}
    </Stack>
  );
}
