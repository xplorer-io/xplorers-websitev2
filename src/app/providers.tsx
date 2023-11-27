"use client";

import { ChakraProvider, Stack } from "@chakra-ui/react";
import { UserContextProvider } from "contexts/UserContext";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <UserContextProvider>
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
        </UserContextProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
