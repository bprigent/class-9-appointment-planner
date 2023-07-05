import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";

export const AppointmentsPage = () => {

  // change the title of the html page
  useEffect(() => {
    document.title = "Appointments";  
  }, []);

  /*
  Define state variables for 
  appointment info
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div className="mainPageWrapper">
      <Header copy="Appointments" />
      <div className="mainPageSecondaryWrapper">
        <div className="mainPageColumn1">
          <h2>Appointment</h2>
        </div>
        <div className="mainPageColumn2">
          <h2>Add Appointment</h2> 
        </div>
      </div>
    </div>
  );
};