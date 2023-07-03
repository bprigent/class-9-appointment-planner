import {  Outlet, NavLink } from "react-router-dom";
import "./Root.css";
import logo from './logo192.png';
import appointment from './appointment.png';
import contact from './contact.png';



export const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

function Root() {
    return (
        <div className="mainApp">
            <nav id="mainNav" className="mainNav">
                <div className="navLogoWrapper">
                    <img className="navLogo" src={logo}/>
                </div>
                <NavLink className="subNavWrapper" to={ROUTES.CONTACTS} >
                    <img className="subNavIcon" src={contact}/>
                </NavLink>
                <NavLink className="subNavWrapper" to={ROUTES.APPOINTMENTS} >
                    <img className="subNavIcon" src={appointment}/>
                </NavLink>
            </nav>
            <Outlet/>
        </div>
    );

}

export default Root;