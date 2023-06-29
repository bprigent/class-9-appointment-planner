# Appointment Planner React App
I use this ReadMe as a way to takes notes and clarify this project.

## Purpose of project
This project is part of the Codecademy Class. The purpose is to practice React JS. I have to work with stateful and stateless components, I have to use hooks.

## Diagram
![App Diagram](https://static-assets.codecademy.com/skillpaths/react-redux/appointments-components.png)

## Features
* 2 pages: one to view and add contacts and one to view and add appointments.
* 3 main files: ```App.js```, ```ContactsPage.js```, and ```AppointmentsPage.js```

## App.js
* Keep track of the contacts and appointments data, each being an array of objects
* Define a callback function that, given a name, phone number, and email, adds a new contact object with that data to the array of contacts
* Define a callback function that, given a name, contact, date, and time, adds a new appointment object with that data to the array of appointments
* Pass the array of contacts and the appropriate callback function as props to the ```ContactsPage``` component
* Pass the appointments array, contacts array, and the add appointment function as props to the ```AppointmentsPage``` component

## ContactsPage.js
* Stateful component to handle the logic for adding new contacts and listing current contacts.
* Receive two props: The current list of contacts. A callback function for adding a new contact.
* Keep track of three local state values: the current name, phone, and email entered into the form.
* Check for duplicates whenever the name in the form changes and indicate the name is a duplicate.
* Only add a new contact on form submission if it does not duplicate an existing contact’s name.
* A successful submission should clear the form.
* In the Add Contact section, render a ```ContactForm``` with the following passed via props:
    * local state variables
    * local state variable setter functions
    * handleSubmit callback function
* In the Contacts section, render a ```TileList``` with the contact array passed via props.

## ContactForm.js
* Stateless component that renders a web form to collect the necessary contact information.
* Render a form with:
    * The ```onSubmit``` attribute set
    * 3 controlled input elements, one for each piece of contact data
    * A submit button
* Include a pattern attribute to the phone input with a regex that matches the phone locale of your preference

## TileList.js
* Stateless component that renders a list of Tile components using an array of objects.
* Receive one prop: An array of objects to render as a list.
* Use the array passed via props to render Tile components, using each object in the array to pass the name and description props to each rendered Tile component.
* **IMPORTANT:** The requirements for the ```TileList``` component are generalized and allow it to be shared by the ```ContactsPage``` and ```AppointmentsPage``` components. As long as an array of objects with either the contact data or appointments data is passed then the content will be handled appropriately.

## Tile.js
* Stateless component that renders the data from an object.
* Receive two props: name, description
* Render a ```p``` element with the name prop. Give this element a className of "tile-title"
* Iterate over the values in the description object, passed in via props, and render a ```p``` element for each value and give each a className of "tile"
* Just like the ```TileList``` component, the Tile component is generalized to work with data from any object. This allows it to be used in both the ```ContactsPage``` and AppointmentsPage`````` components.

## AppointmentsPage.js
* Stateful component that handles the logic for adding new appointments and listing current appointments.
* Receive three props:
    * The current list of appointments
    * The current list of contacts
    * A callback function for adding a new appointment
* Keep track of four local state variables, the current name, contact, date, and time entered into the form
* Add a new appointment on form submission
* Clear the form on submission
* In the Add Appointment section, render an ```AppointmentForm``` with the following passed via ```props```:
    * local state variables
    * local state variable setter functions
    * handleSubmit callback function
* In the Appointments section, render a ```TileList``` with the appointment array passed via ```props```
