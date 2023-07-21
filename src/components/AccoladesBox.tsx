"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
// @ts-ignore
import { IAccolade } from "@types/IAccolade";
import AccoladeCard, { AnimatedBox } from "@components/AccoladeCard";

const AccoladesBox = () => {
  const accoladesData = [
    {
      id: "1",
      title: "this is a title 1",
      description:
        "Lorem Ipsum is simply dummy text of th printing and typesetting industry. Lorem Ipsum has been the industry standa dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      dateAdded: "2020/07/21",
      dateUpdated: "2020/07/21",
      editToken: "asdfafasff",
      tags: ["react", "js"],
      authorId: "45325635",
    },
    {
      id: "2",
      title: "this is a title 2",
      description:
        "Lorem Ipsum is simply dummy text of th printing and typesetting industry. Lorem Ipsum has been the industry standa dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      dateAdded: "2020/07/21",
      dateUpdated: "2020/07/21",
      editToken: "asdfafasff",
      tags: ["next"],
      authorId: "45325635",
    },
    {
      id: "3",
      title: "this is a title 3",
      description:
        "Lorem Ipsum is simply dummy text of th printing and typesetting industry. Lorem Ipsum has been the industry standa dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      dateAdded: "2020/07/21",
      dateUpdated: "2020/07/21",
      editToken: "asdfafasff",
      tags: ["db"],
      authorId: "45325635",
    },
  ] as IAccolade[];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {accoladesData.map((accolade, index) => {
        console.log(accolade);

        return (
          <AnimatedBox key={accolade.id} delay={0.05 * index}>
            <AccoladeCard {...accolade} />
          </AnimatedBox>
        );
      })}
    </Box>
  );
};

export default AccoladesBox;
