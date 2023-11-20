"use client";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  Textarea,
} from "@chakra-ui/react";
import AccoladesBox from "@components/AccoladesBox";
import SearchBox from "@components/SearchBox";
import { NextPage } from "next";
import React, { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";

export const metadata = {
  title: "Xplorers | Accolades",
  description: "Xplorers website",
};

const AccoladesPage: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState<any>(null);
  const createAccolade = () => {};

  return (
    <Stack gap={5} my={5}>
      <SearchBox />
      <Flex gap={5} alignItems={"center"}>
        <Text fontSize="3xl" as="b">
          This month&apos;s new accolades
        </Text>
        <Button colorScheme="teal" rightIcon={<AddIcon />} onClick={onOpen}>
          Add
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new accolade</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name (Optional) :</FormLabel>
              <Input
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel>Message :</FormLabel>
              <Textarea
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={createAccolade}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <AccoladesBox />
    </Stack>
  );
};

export default AccoladesPage;
