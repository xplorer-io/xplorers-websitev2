import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { IAccolade } from "../../types/IAccolade";

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
  return (
    <AccordionItem mt={5}>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            <b>{props.author}</b> : {props.message.substring(0, 100)}...
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{props.message}</AccordionPanel>
    </AccordionItem>
  );
};

export default AccoladeCard;
