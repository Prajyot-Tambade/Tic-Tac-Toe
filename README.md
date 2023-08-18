# Tic Tac Toe
Welcome to the Tic Tac Toe Game repository! This project features a classic game of Tic Tac Toe implemented using HTML, CSS, and JavaScript with a responsive design.Whether you're on a desktop or a mobile device, you can enjoy a fun and interactive gaming experience, competing against each other to achieve three in a row.

# Desktop view
![App Screenshot](https://clock-by-prajyot.000webhostapp.com/tic-tac-toe-desktop.png)

# Mobile view
![App Screenshot](https://clock-by-prajyot.000webhostapp.com/tic-tac-toe-mobile.png)

## Live Demo
Experience the Tic Tac Toe game by playing it in the [live demo](https://prajyot-tambade.github.io/Tic-Tac-Toe/).

## Tech Stack
The Tic Tac Toe Game Website was developed using the following technologies:
- HTML
- CSS
- JavaScript

## Topics Learned
During the development of this project, I learned the following topics:

**HTML:**
- **Disabling virtual keyboard on mobile using inputmode attribute:** This calculator does not open a virtual keyboard on mobile as it already has its keyboard. So I implemented this by declaring an **"inputmode"** attribute with the value **"none"** inside the input tag in HTML. This attribute disables the on-screen keyboard on the mobile phone. 

**CSS:**
- **Responsive design:** Responsive design principles to ensure optimal gameplay across different devices.

# Game logic
- **Win Conditions:** All win conditions are as follows:
[

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
- We can determine win if elements in the grid contain same character (i.e X or O) at the indexes described in the above array.
- **For Example:** If grid elements contain 'X' at positon "0, 1, 2" or "3, 4, 5"... likewise then 'X' will be the winner and wise versa.
