import React from "react";
import "./ContactForm.css";

export const ContactForm = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form className="formBlockWrapper" onSubmit={handleSubmit}>
      <div className="formLabelInputBlockWrapper">
        <label htmlFor="firstName" className="formInputLabel">First name</label>
        <input className="formInputBox" type="text" id="firstName" value={firstName} onChange={setFirstName}/>
      </div>

      <div className="formLabelInputBlockWrapper">
        <label htmlFor="lastName" className="formInputLabel">Last name</label>
        <input className="formInputBox" type="text" id="lastName" value={lastName} onChange={setLastName}/>
      </div>
      
      <div className="formLabelInputBlockWrapper">
        <label htmlFor="phone" className="formInputLabel">Phone number</label>
        <input className="formInputBox" type="tel" id="phone" value={phone} onChange={setPhone}/>
      </div>

      <div className="formLabelInputBlockWrapper">
        <label htmlFor="email" className="formInputLabel">Email</label>
        <input className="formInputBox" type="email" id="email" value={email} onChange={setEmail}/>
      </div>
      
      <input className="formInputButton" type="submit" value="Create new contact"/>
    
    </form>
  );
};

