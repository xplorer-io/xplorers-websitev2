import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { IProject } from "../../types/project";
import { ProjectsLayout } from "./ProjectsLayout";
import { ProjectCard } from "./ProjectCard";

interface IProjectsProps {
  projects: Array<IProject>;
  onGoToProjectClick: (playlistURL: string) => void;
}

export function Projects({ projects, onGoToProjectClick }: IProjectsProps) {
  return (
    <ProjectsLayout>
      <Heading as="h2" size={{ base: "md", md: "lg", lg: "xl" }}>
        Here are some projects for you!
      </Heading>
      <Flex gap="5" flexWrap="wrap" justifyContent="space-between">
        {projects.map((project) => (
          <ProjectCard
            key={project.projectId}
            project={project}
            onGoToProjectClick={onGoToProjectClick}
          />
        ))}
      </Flex>
    </ProjectsLayout>
  );
}
