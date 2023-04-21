import React from "react";
import './ContactCard.css';

const ContactCard = (props) => {
  return (
    <a target="_blank" href={props.url} className="ContactCard">
      {props.img()}
      {props.username}
    </a>
  );
};

export { ContactCard };
