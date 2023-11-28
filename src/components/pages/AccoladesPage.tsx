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
  Checkbox,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import AccoladesBox from "@components/AccoladesBox";
import SearchBox from "@components/SearchBox";
import { NextPage } from "next";
import React, { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const metadata = {
  title: "Xplorers | Accolades",
  description: "Xplorers website",
};

const AccoladesPage: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState(false);
  const queryClient = useQueryClient();

  const createAccolade = async () => {
    mutateAsync({
      message: message,
      author: checked ? "Anonymous" : fullName,
    }).then(() => {
      onClose();
      queryClient.invalidateQueries("accolades");
    });

    // reset form
    setFullName("");
    setMessage("");
    setChecked(false);
  };

  const { data, isLoading: fetchingAccolades } = useQuery({
    queryKey: "accolades",
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/accolades`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await res.json();
    },
  });

  const { mutateAsync, isLoading: creatingAccolade } = useMutation(
    async (data: any) => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/accolades`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await res.json();
    }
  );

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
                placeholder="Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={checked}
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
            <FormControl isRequired mt={4}>
              <Checkbox
                isChecked={checked}
                onChange={(e) => {
                  setChecked(e.target.checked);
                  setFullName("");
                }}
              >
                Send Anonilously?
              </Checkbox>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={createAccolade}
              isLoading={fetchingAccolades || creatingAccolade}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {!data && !fetchingAccolades && (
        <Alert status="error">
          <AlertIcon />
          There was an error processing your request
        </Alert>
      )}
      {!fetchingAccolades && data && (
        <AccoladesBox accolades={data?.acaccolades} />
      )}
    </Stack>
  );
};

export default AccoladesPage;
