import React from "react";
import { StaticBackground } from "../StaticBackground";
import { Introduction } from "../Introduction";
import { ProjectsList } from "../ProjectsList";
import { ContactInfo } from "../ContactInfo";
import { projects } from "../../../scripts/data";
import { ProjectCard } from "../ProjectCard";
import "./App.css";

const App = () => {
  return (
    <>
      <StaticBackground />
      <Introduction />
      <ProjectsList>
        {projects.map((project) => (
          <ProjectCard key={project.title} />
        ))}
      </ProjectsList>
      <ContactInfo />
    </>
  );
};

export { App };
