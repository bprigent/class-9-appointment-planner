# Appointment Planner React App
I use this ReadMe as a way to takes notes and clarify this project.

## Purpose of project
This project is part of the Codecademy Class. The purpose is to practice React JS. I have to work with stateful and stateless components, I have to use hooks.

## Diagram
![App Diagram](https://static-assets.codecademy.com/skillpaths/react-redux/appointments-components.png)

## Features
* 2 pages: one to view and add contacts and one to view and add appointments.
* 3 main files: App.js, ContactsPage.js, and AppointmentsPage.js

## App.js requirements: 
* Keep track of the contacts and appointments data, each being an array of objects
* Define a callback function that, given a name, phone number, and email, adds a new contact object with that data to the array of contacts
* Define a callback function that, given a name, contact, date, and time, adds a new appointment object with that data to the array of appointments
* Pass the array of contacts and the appropriate callback function as props to the ContactsPage component
* Pass the appointments array, contacts array, and the add appointment function as props to the AppointmentsPage component

## ContactsPage.js requirements:
* Stateful component to handle the logic for adding new contacts and listing current contacts.
* Receive two props: The current list of contacts. A callback function for adding a new contact.
* Keep track of three local state values: the current name, phone, and email entered into the form.
* Check for duplicates whenever the name in the form changes and indicate the name is a duplicate.
* Only add a new contact on form submission if it does not duplicate an existing contact’s name.
* A successful submission should clear the form.
* In the Add Contact section, render a ContactForm with the following passed via props:
    * local state variables
    * local state variable setter functions
    * handleSubmit callback function
* In the Contacts section, render a TileList with the contact array passed via props.

## ContactForm.js requirements:
* Stateless component that renders a web form to collect the necessary contact information.
* Render a form with:
    * The onSubmit attribute set
    * 3 controlled <input> elements, one for each piece of contact data
    * A submit button
* Include a pattern attribute to the phone <input> with a regex that matches the phone locale of your preference
