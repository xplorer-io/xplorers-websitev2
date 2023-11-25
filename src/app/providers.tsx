"use client";

import { ChakraProvider, Stack } from "@chakra-ui/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Stack
          sx={{
            width: "100vw",
            minHeight: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </Stack>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
