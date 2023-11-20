"use client";
import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const IndividualBlogPage = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(url);
  }, [pathname, searchParams]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>hello</Text>
      <Text>hello</Text>
    </Box>
  );
};

export default IndividualBlogPage;
