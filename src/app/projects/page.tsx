import { ProjectsContainer } from "@components/projects";
import { NextPage } from "next";
import React from "react";

export const metadata = {
  title: "Xplorers | Projects",
  description: "Xplorers website",
};

const ProjectsPage: NextPage = () => {
  return <ProjectsContainer />;
};

export default ProjectsPage;
