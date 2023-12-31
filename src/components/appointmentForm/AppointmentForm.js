import React from "react";
import "./AppointmentForm.css";
import { ContactPicker } from "../contactPicker/ContactPicker";


export function AppointmentForm ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) {



  return (
    <form className="formBlockWrapper" onSubmit={handleSubmit}>
      <div className="formLabelInputBlockWrapper">
        <label htmlFor="title" className="formInputLabel">Title</label>
        <input className="formInputBox" type="text" id="title" value={title} onChange={setTitle} required/>
      </div>

      <div className="formLabelInputBlockWrapper">
        <label htmlFor="date" className="formInputLabel">Date</label>
        <input className="formInputBox" type="date" id="date" value={date} onChange={setDate} required/>
      </div>
      
      <div className="formLabelInputBlockWrapper">
        <label htmlFor="time" className="formInputLabel">Time</label>
        <input className="formInputBox" type="time" id="time" value={time} onChange={setTime} required/>
      </div>

      <div className="formLabelInputBlockWrapper">
        <ContactPicker setContact={setContact} contact={contact} arr={contacts}/>
      </div>
      
      <input className="formInputButton" type="submit" value="Create new appointment"/>
    
    </form>
  );
};
