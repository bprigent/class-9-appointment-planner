import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import "./ContactPage.css"
import { FontH2 } from "../../components/fonts/fonts";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { ContactTile } from "../../components/tile/Tile";

export const ContactsPage = ({contacts, addToContacts}) => {

  useEffect(() => {
    document.title = "Contacts";  
  }, []);

  // manage form data in state variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // manage form data
  const updateFirstName = (e) => {setFirstName(e.target.value)};
  const updateLastName = (e) => {setLastName(e.target.value)};
  const updatePhone = (e) => {setPhone(e.target.value)};
  const updateEmail = (e) => {setEmail(e.target.value)};

  // Add contact info to contact list
  const handleSubmit = (e) => {
    e.preventDefault();
    // add contacts to array
    addToContacts(firstName, lastName, email, phone);
    // clear form after submit
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  

  return (
    <div className="mainPageWrapper">
      <Header copy="Contacts" />
      <div className="mainPageSecondaryWrapper">
        <div className="mainPageColumn1">
          <FontH2 copy="My Contacts"/>
          <div className="contactTilesList">
            {contacts.map((contact, index) => (
              <ContactTile key={index} firstName={contact.firstName} lastName={contact.lastName} phone={contact.phone} email={contact.email}/>
            ))}
          </div>
        </div>
        <div className="mainPageColumn2"> 
          <FontH2 copy="Add contact"/>
          <ContactForm handleSubmit={handleSubmit} firstName={firstName} lastName={lastName} phone={phone} email={email} setFirstName={updateFirstName} setLastName={updateLastName} setPhone={updatePhone} setEmail={updateEmail} />
        </div>
      </div>
    </div>
  );
};
