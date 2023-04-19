import React from "react";
import './ProjectsList.css';

const ProjectsList = ({children}) => {
  return (
    <section class="ProjectsList">
      <h2>Projects</h2>
      <div class="cards-container">
        {children}
      </div>
    </section>
  );
};

export { ProjectsList };
