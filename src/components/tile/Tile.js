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
