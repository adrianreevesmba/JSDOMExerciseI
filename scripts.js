// DOM
// Access const elementById = document.getElementById('myElementId');
// const elementByQuery = document.querySelector('.myClass');
// const elementsByClass = document.getElementsByClassName('myClass'); //

// const myElement = document.getElementById('myElementId');
// myElement.textContent = 'New Text Content';

// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'This is a new paragraph.';
// document.body.appendChild(newParagraph);
// const paragraphElement = document.getElementById('myParagraph');
// const parentElement = paragraphElement.parentNode;
// const nextElement = paragraphElement.nextSibling;
// const previousElement = paragraphElement.previousSibling;


// Assignment
// Get the header element/

let headertag = document.querySelector("header")
// Get all the section elements
let sections = document.getElementsByClassName("col")[0].children
// Get the section element with class="current"
let current = document.getElementsByClassName("current")[0]
// Get the section that comes after the current section
 current.nextElementSibling

// Get the h2 node from the section before the 'current' section
current.previousElementSibling.children
// Get the div that contains the section that has an h2 with a class of 'highlight'
document.getElementsByClassName("col")
// Get all the sections that contain an H2 (using a single statement);
document.getElementsByTagName("h2")[0, 1]
