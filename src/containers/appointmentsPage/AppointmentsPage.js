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

  // get today's date
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  // manage form data in state variables
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(getTodayString);
  const [time, setTime] = useState("");
  const initContactValue = contacts[0].firstName;
  const [contact, setContact] = useState(initContactValue ? initContactValue : "");

  // manage form data
  const updateTitle = (e) => {setTitle(e.target.value)};
  const updateDate = (e) => {setDate(e.target.value)};
  const updateTime = (e) => {setTime(e.target.value)};
  const updateContact = (e) => {setContact(e.target.value)};

  // add appointment data to array
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("test handle submit")
    addToAppointments(title, date, time, contact);
    setTitle("");
    setDate("");
    setTime("");
    setContact("");   
  };

  return (
    <div className="mainPageWrapper">
      <Header copy="Appointments" />
      <div className="mainPageSecondaryWrapper">
        <div className="mainPageColumn1">
          <FontH2 copy="My appointments"/>
          <div className="TilesListWrapper">
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