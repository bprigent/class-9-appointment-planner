import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import "./ContactPage.css"
import { FontH2 } from "../../components/fonts/fonts";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addToContacts}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div className="mainPageWrapper">
      <Header H1="Contacts" />
      <div className="mainPageSecondaryWrapper">
        <div className="mainPageColumn1">
          <FontH2 copy="My Contacts"/>
          {/*contacts.map( (contact) => (
            <div>{contact.firstName}</div>
          ))*/}
        </div>
        <div className="mainPageColumn2"> 
          <FontH2 copy="Add contact"/>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
