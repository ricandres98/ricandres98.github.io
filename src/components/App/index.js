import React from "react";
import { StaticBackground } from "../StaticBackground";
import { Introduction } from "../Introduction";
import { ProjectsList } from "../ProjectsList";
import { ContactInfo } from "../ContactInfo";
import { contacts, projects } from "../../services/data";
import { ProjectCard } from "../ProjectCard";
import "./App.css";
import { ContactCard } from "../ContactCard";

const App = () => {
  return (
    <>
      <StaticBackground />
      <Introduction />
      <ProjectsList>
        {projects.map((project) => (
          <ProjectCard 
            key={project.title} 
            description={project.description}
            title={project.title}
            imageSrc={project.imageSrc}
            projectSrc={project.projectSrc}
          />
        ))}
      </ProjectsList>
      <ContactInfo 
        contacts={contacts}
        render={(contact)=> (
          <ContactCard 
            username={contact.username}
            url={contact.url}
            img={contact.img}
            socialMedia={contact.socialMedia}
          />
        )}
      />
    </>
  );
};

export { App };
