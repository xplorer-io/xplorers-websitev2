"use client";
import { Box, Tag } from "@chakra-ui/react";
import React from "react";
import css from "@components/AccoladeCard/accoladeCard.module.css";
import ClapIcon from "@assets/icons/ClapIcon";
// @ts-ignore
import { IAccolade } from "@types/IAccolade";
import { motion } from "framer-motion";
import Link from "next/link";
// @ts-ignore
import ROUTE from "@types/routes";

export const AnimatedBox = ({
  delay,
  children,
}: {
  delay?: number;
  children: React.ReactNode;
}) => {
  const boxVariants = {
    initial: { x: -500 },
    animate: { x: 0 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={boxVariants}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

const AccoladeCard = (props: IAccolade) => {
  const redirectUrl = ROUTE.ACCOLADES + `/${props.id}`;
  return (
    <Link
      href={{
        pathname: redirectUrl,
        query: { data: JSON.stringify(props) },
      }}
      as={redirectUrl}
    >
      <Box className={css.main}>
        <Box className={css.upperBox}>
          <Box className={css.heading}>{props.title}</Box>
          <Box className={css.description}>{props.description}</Box>
        </Box>
        <Box className={css.bottomBox}>
          <Box className={css.tagsBox}>
            {props.tags?.map((tag) => {
              return (
                <Tag key={tag} colorScheme="cyan">
                  {tag}
                </Tag>
              );
            })}
          </Box>
          <ClapIcon variant="outline" />
        </Box>
      </Box>
    </Link>
  );
};

export default AccoladeCard;
