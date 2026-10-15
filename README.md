
# PABW Meeting 8 — My Informatics Learning Roadmap

**Name:** Nada Taufik Shahbal  
**Student ID:** 25523266  
**Program:** Informatics International Program  
**University:** Universitas Islam Indonesia  
**Course:** Web-Based Application Development  
**Meeting:** 8 — JavaScript Modern ES6+, Data Structures, and Array Methods

## Overview

This project extends my previous Bootstrap-based
Informatics Learning Roadmap webpage by introducing
JavaScript to manage and display profile data dynamically.

Instead of manually maintaining the profile information,
technical skills, and learning goals in HTML, the webpage
uses JavaScript objects, arrays, functions, and DOM methods.

## Features

- Responsive webpage using Bootstrap 5
- Profile information stored in a JavaScript object
- Dynamic navigation, profile description, and footer
- Technical skill cards generated from JavaScript data
- Learning goals table generated from an array of objects
- Two pure functions for profile and skill formatting
- Array methods: map(), filter(), and find()
- Object and array copying using spread syntax
- Console logging and debugging practice

## Technologies

- HTML5
- CSS3
- Bootstrap 5.3.3
- Bootstrap Icons
- JavaScript ES6+
- Visual Studio Code
- Firefox Developer Tools
- Git and GitHub

## Project Structure

worksheet-p8/
├── profil.html
├── js/
│   └── app.js
├── screenshots/
│   ├── error.png
│   ├── fixed.png
│   └── console-table.png
└── README.md

The screenshots are included after completing
the debugging tests in Section E.

## JavaScript Concepts

### Section B — Variables and Objects

The project uses const and let, template literals,
optional chaining, and nullish coalescing to manage
profile information.

### Section C — Pure Functions

Two pure functions are implemented:

- buatPerkenalan(): creates an introduction from an object.
- formatKeahlian(): formats an array of skills into one line.

Both functions return values without modifying external data.

### Section D — Data Structures and Array Methods

Skills and projects are stored as arrays of objects.

- map() transforms data and generates page elements.
- filter() selects matching skills and projects.
- find() retrieves one matching project.
- Spread syntax creates copies without changing
  the original top-level data.

### Section E — Debugging

The debugging exercises cover:

- Accessing an incorrect object property
- Handling a null result from querySelector()
- Converting string input to numbers
- Inspecting data with console.table()
- Using browser breakpoints

The corresponding screenshots are stored in
the screenshots/ folder once verified.

## How to Run

1. Open the project in Visual Studio Code.
2. Install the Live Server extension if necessary.
3. Right-click profil.html.
4. Select "Open with Live Server".
5. Open Firefox Developer Tools using F12.
6. Select Console to inspect JavaScript output.

The page must be opened through a local server
rather than directly with the file:// protocol.

## AI Assistance Declaration

I used ChatGPT to help prepare and refine the
JavaScript implementation, explain ES6+ concepts,
structure the project code, suggest debugging exercises,
and draft documentation and worksheet responses.

The Informatics Learning Roadmap topic and the
original Bootstrap webpage came from my previous
coursework. My personal learning background,
including Java, Python, and current JavaScript study,
was provided by me.

I am responsible for reviewing the generated code,
testing the webpage in my browser, recording actual
debugging results, and confirming the accuracy of
the final GitHub submission.

## Author

Nada Taufik Shahbal  
Informatics International Program  
Universitas Islam Indonesia
