import React, { ReactNode } from "react";

import { Stack } from "@chakra-ui/react";

interface IProjectsLayoutProps {
  children: ReactNode;
}
export function ProjectsLayout({ children }: IProjectsLayoutProps) {
  return (
    <Stack gap="5" wrap="wrap" alignItems="center">
      {children}
    </Stack>
  );
}
