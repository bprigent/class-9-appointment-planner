import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {




  // state vars for contacts and appointments
  const [contacts, setContacts] = useState([
    {
      firstName:"Ben",
      lastName:"Prigent",
      email:"hello@bprigent.com",
      phone:"0635125225"
    },
    {
      firstName:"Iris",
      lastName:"Prigent",
      email:"iris.prigent@gmail.com",
      phone:"0612141644"
    },
    {
      firstName:"Juliette",
      lastName:"Prigent",
      email:"julprigent@gmail.com",
      phone:"0613421214"
    },
    {
      firstName:"Christophe",
      lastName:"Prigent",
      email:"cpri35@gmail.com",
      phone:"0625344556"
    }
  ]);
  const [appointments, setAppointments] = useState([
    {
      title:"This is appointment title",
      attendee:"Benjamin Prigent",
      date:"22/11/24",
      time:"1200",
      duration:2
    },
    {
      title:"This is appointment title",
      attendee:"Benjamin Prigent",
      date:"22/11/24",
      time:"1200",
      duration:2
    },
    {
      title:"This is appointment title",
      attendee:"Benjamin Prigent",
      date:"22/11/24",
      time:"1200",
      duration:2
    }
  ]);




  // Functions to add data to contacts and appointments
  function addToContacts (newFirstName, newLastName, newEmail, newPhone) {
    // create new object
    const newContactObject = {
      firstName: newFirstName,
      lastName: newLastName,
      email: newEmail,
      phone: newPhone
    };
    //create new array
    const newArray = [...contacts, newContactObject ];
    // update contact array with new array containing new object
    setContacts(newArray);
  };
  function addToAppointments (newTitle, newAttendee, newDate, newTime, newDuration) {
    // create new object
    const newAppointmentObject = {
      title: newTitle,
      attendee: newAttendee,
      date: newDate,
      time: newTime,
      duration: newDuration
    };
    //create new array
    const newArray = [...appointments, newAppointmentObject ];
    // update contact array with new array containing new object
    setAppointments(newArray);
  };




  // set up the router
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>

      {/* adding routes to contact and appointments with the right props*/}
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage addToContacts={addToContacts} contacts={contacts} /> }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage addToAppointments={addToAppointments} appointments={appointments} /> }/>
    </Route>
  ));




  // return the router
  return (
    <RouterProvider router={router}/>
  );



}

export default App;
