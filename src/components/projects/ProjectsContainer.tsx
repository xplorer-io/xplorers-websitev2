"use client";

import React, { useMemo, useState } from "react";
import { Box, Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import { IResponse } from "../../types/response";
import { PlaylistContainerLayout } from "@components/playlists/PlaylistPageLayout";
import { IProject } from "../../types/project";
import { Projects } from "./Projects";

export function ProjectsContainer() {
  const [projects, setProjects] = useState<Array<IProject>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useMemo(async () => {
    setIsLoading(true);
    const projectsData = await fetProjects();

    if (!projectsData.projects) {
      setIsLoading(false);
      return [];
    }

    setProjects(
      projectsData.projects.filter(
        (project) => project.title !== "Introduction to React by Pramish"
      )
    );
    setIsLoading(false);
  }, []);

  const onGoToProjectClick = (projectURL: string) => {
    window.open(projectURL, "_blank");
  };

  return (
    <PlaylistContainerLayout>
      {!projects?.length && isLoading && (
        <Flex justifyContent="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      )}

      {!projects?.length && !isLoading && <EmptyState />}

      {!!projects?.length && !isLoading && (
        <Projects
          projects={projects!}
          onGoToProjectClick={onGoToProjectClick}
        />
      )}
    </PlaylistContainerLayout>
  );
}

interface IPlayListResponse extends IResponse {
  projects?: Array<IProject>;
}

function EmptyState() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h2" size={{ base: "md", md: "lg", lg: "xl" }}>
        Empty List
      </Heading>
      <Text color={"gray.500"} mb={6}>
        We&apos;re sorry, we don&apos;t have any project to show at the moment.
      </Text>
    </Box>
  );
}

async function fetProjects(): Promise<IPlayListResponse> {
  try {
    const BASE_URL = String(process.env.NEXT_PUBLIC_BASE_URL);
    const projectURL = `${BASE_URL}/projects`;
    const projectResponse = await fetch(projectURL);

    const projectResponseData: IPlayListResponse = await projectResponse.json();

    return {
      projects: projectResponseData.projects,
      message: projectResponseData.message,
    };
  } catch (err) {
    const error = err as Error;

    return {
      message: error.message,
    };
  }
}
