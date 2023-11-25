"use client";
import { Accordion, Box } from "@chakra-ui/react";
import React from "react";
import { IAccolade } from "../types/IAccolade";
import AccoladeCard, { AnimatedBox } from "@components/AccoladeCard";

const AccoladesBox = ({ accolades }: { accolades: IAccolade[] }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Accordion defaultIndex={[0]} allowMultiple>
        {accolades.map((accolade, index) => {
          return (
            <AnimatedBox key={accolade.accoladeId} delay={0.05 * index}>
              <AccoladeCard {...accolade} />
            </AnimatedBox>
          );
        })}
      </Accordion>
    </Box>
  );
};

export default AccoladesBox;
