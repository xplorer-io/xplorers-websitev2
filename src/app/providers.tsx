"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider>
        <ChakraProvider>
          <Box minH={"100vh"}>{children}</Box>
        </ChakraProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
}
