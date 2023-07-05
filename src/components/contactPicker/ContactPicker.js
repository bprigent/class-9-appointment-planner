import React from "react";

export const ContactPicker = ({arr, onChange, value, index}) => {
  
  
  return (
    <>
      <label className="formInputLabel" htmlFor="contact">Pick a contact</label>
      <select className="formInputBox" name="contact" id="contact">
        {arr.map((item) => 
          (<option key={index} value={item.firstName}>{item.firstName}</option>)
        )}
      </select>
    </>
  )
};
