"use client";
import { Accordion, Box } from "@chakra-ui/react";
import React from "react";
// @ts-ignore
import { IAccolade } from "@types/IAccolade";
import AccoladeCard, { AnimatedBox } from "@components/AccoladeCard";

const AccoladesBox = () => {
  const accoladesData = [
    {
      id: "1",
      message:
        "Lorem Ipsum is simply dummy text of th printing and typesetting industry. Lorem Ipsum has been the industry standa dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      dateAdded: "2020/07/21",
      dateUpdated: "2020/07/21",
      editToken: "asdfafasff",
      authorId: "45325635",
    },
    {
      id: "2",
      message:
        "Lorem Ipsum is simply dummy text of th printing and typesetting industry. Lorem Ipsum has been the industry standa dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      dateAdded: "2020/07/21",
      dateUpdated: "2020/07/21",
      editToken: "asdfafasff",
      authorId: "45325635",
    },
    {
      id: "3",
      message:
        "Lorem Ipsum is simply dummy text of th printing and typesetting industry. Lorem Ipsum has been the industry standa dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      dateAdded: "2020/07/21",
      dateUpdated: "2020/07/21",
      editToken: "asdfafasff",
      authorId: "45325635",
    },
  ] as IAccolade[];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Accordion defaultIndex={[0]} allowMultiple>
        {accoladesData.map((accolade, index) => {
          return (
            <AnimatedBox key={accolade.id} delay={0.05 * index}>
              <AccoladeCard {...accolade} />
            </AnimatedBox>
          );
        })}
      </Accordion>
    </Box>
  );
};

export default AccoladesBox;
