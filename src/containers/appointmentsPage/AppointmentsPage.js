import React, { useState } from "react";
import Header from "../../components/header/Header";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";

export const AppointmentsPage = () => {
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
      <Header H1="Appointments" />
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