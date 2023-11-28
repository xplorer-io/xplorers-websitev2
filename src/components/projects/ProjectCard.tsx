import React from "react";

import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import { IProject } from "../../types/project";

interface IProjectCardProps {
  project: IProject;
  onGoToProjectClick: (projectURL: string) => void;
}

export function ProjectCard({
  project,
  onGoToProjectClick,
}: IProjectCardProps) {
  const { title, description, projectId, sourceCodeUrl } = project;

  const handleGoToPlayListClick = () => {
    console.log(sourceCodeUrl);
    console.log("clicked");

    onGoToProjectClick(sourceCodeUrl);
  };

  return (
    <Flex
      flexDirection="column"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p="4"
      gap="5"
      width={"30vw"}
    >
      <Heading as="h3" size="md" mb="2">
        {title}
      </Heading>
      <Text color="gray.600" mb="4">
        {description}
      </Text>
      <Button
        rightIcon={<ExternalLinkIcon />}
        colorScheme="teal"
        variant="outline"
        onClick={handleGoToPlayListClick}
      >
        Visit
      </Button>
    </Flex>
  );
}
