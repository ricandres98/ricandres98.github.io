import React from "react";
import './StaticBackground.css';
import { ReactIcon } from "../ReactIcon";
import { DevIcon } from "../DevIcon";

const StaticBackground = ({ children }) => {
  return (
  <div className="StaticBackground">
    <ReactIcon />
    <ReactIcon />
    <ReactIcon />
    <DevIcon />
    <DevIcon />
  </div>
  );
};

export { StaticBackground };
