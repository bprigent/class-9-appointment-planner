import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import "./ContactPage.css"

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts}) => {
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
          <h2>Contacts</h2>
        </div>
        <div className="mainPageColumn2">
          <h2>Add Contact</h2> 
        </div>
      </div>
    </div>
  );
};
