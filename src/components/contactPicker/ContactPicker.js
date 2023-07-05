import React from "react";
import { useState } from "react";

export function ContactPicker ({arr, setContact, contact}) {

  //get value of the first item on the list, so that we can have than as the initial value of the drop down
  const initialValue = arr[0].firstName;
  // create state variable, assign it initial value
  let [ddValue, setDdValue] = useState(initialValue);

 
  
  return (
    <>
      <label className="formInputLabel" htmlFor="contact">Pick a contact</label>
      <select onChange={setContact} className="formInputBox" name="contact" id="contact">
        <option hidden disabled selected value={contact}>{contact}</option>
        {arr.map((item) => 
          (<option value={item.firstName}>{item.firstName}</option>)
        )}
      </select>
    </>
  )
};
