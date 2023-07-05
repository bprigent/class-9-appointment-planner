import React from "react";
import "./Tile.css"
import { FontH3, FontP } from "../fonts/fonts";

export function ContactTile ({firstName, lastName, phone, email}) {
  return (
    <div className="tileParentWrapper">
      <div className="tileChildWrapper">
        <FontH3 copy={`${lastName}, ${firstName}`}/>
        <FontP copy={`${phone} - ${email}`}/>
      </div>
    </div>
  );
};

export function AppointmentTile ({title, date, time, contact}) {
  return (
    <div className="tileParentWrapper">
      <div className="tileChildWrapper">
        <FontH3 copy={`${title}, with ${contact}`}/>
        <FontP copy={`${date} - ${time}`}/>
      </div>
    </div>
  );
};
