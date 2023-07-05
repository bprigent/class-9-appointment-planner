import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";

import { FontH2 } from "../../components/fonts/fonts";
import { AppointmentTile } from "../../components/tile/Tile";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";

export const AppointmentsPage = ({contacts, appointments, addToAppointments}) => {

  // change the title of the html page
  useEffect(() => {
    document.title = "Appointments";  
  }, []);

  // manage form data in state variables
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [contact, setContact] = useState("");

  // manage form data
  const updateTitle = (e) => {setTitle(e.target.value)};
  const updateDate = (e) => {setDate(e.target.value)};
  const updateTime = (e) => {setTime(e.target.value)};
  const updateContact = (e) => {setContact(e.target.value)};



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("test handle submit")
    addToAppointments(title, date, time, contact);
    setTitle("");
    setDate("");
    setTime("");
    setContact("");
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div className="mainPageWrapper">
      <Header copy="Appointments" />
      <div className="mainPageSecondaryWrapper">
        <div className="mainPageColumn1">
          <FontH2 copy="My appointments"/>
          <div>
            {appointments.map((appointment, index) => (
              <AppointmentTile key={index} title={appointment.title} date={appointment.date} time={appointment.time} contact={appointment.contact}/>
            ))}
          </div>
        </div>
        <div className="mainPageColumn2">
          <FontH2 copy="Add appointment"/>
          <AppointmentForm 
            handleSubmit={handleSubmit}

            title={title}
            date={date}
            time={time}
            contact={contact}

            contacts={contacts}

            setTitle={updateTitle}
            setDate={updateDate}
            setTime={updateTime}
            setContact={updateContact}
          />
        </div>
      </div>
    </div>
  );
};