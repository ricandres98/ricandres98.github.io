import React from "react";
import './Introduction.css';

const Introduction = () => {
  return (
      <section className="Introduction">
        <div className="Introduction__name">
          <h1>Ricardo Ojeda</h1>
          <h2>Frontend Developer</h2>
        </div>
        <div className="Introduction__brief">
          <p>
            I am a Frontend Developer who loves building beautiful interfaces using React.js and Vanilla JS
          </p>
        </div>
      </section>
  );
};

export { Introduction };
