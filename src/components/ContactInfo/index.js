import React from "react";
import './ContactInfo.css';

const ContactInfo = (props) => {
    return (
        <section className="ContactInfo">
        <h2>Contact info:</h2>
        <ul>
            {props.contacts.map(contact => (
                <li>
                    {props.render(contact)}
                </li>
            ))}
        </ul>
    </section>
    );
}

export { ContactInfo };