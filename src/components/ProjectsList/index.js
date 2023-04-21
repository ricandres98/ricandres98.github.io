import React from "react";
import './ProjectsList.css';

const ProjectsList = ({children}) => {
  return (
    <section className="ProjectsList">
      <h2>Projects</h2>
      <div className="cards-container">
        {children}
      </div>
    </section>
  );
};

export { ProjectsList };
