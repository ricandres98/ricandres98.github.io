import React from "react";
import './ProjectCard.css';

const ProjectCard = (props) => {
  return (
    <div className="ProjectCard">
      <a target="_blank" href={props.projectSrc}>
        <img src={props.imageSrc} alt={props.title} />
        <div className="ProjectCard__content">
          <p>{props.description}</p>
          <h3>{props.title}</h3>
        </div>
      </a>
    </div>
  );
};

export { ProjectCard };
