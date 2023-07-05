import React from "react";

export const ContactPicker = ({arr, onChange, value}) => {
  

  return (
    <>
      <label className="formInputLabel" htmlFor="contact">Pick a contact</label>
      <select className="formInputBox" name="contact" id="contact">
        {arr.map((contact) => 
          (<option value="hello">{contact.name}</option>)
        )}
      </select>
    </>
  );
};
