console.log("Hello World");

const loginPageHeader = document.getElementById("login-header");

console.log(loginPageHeader);

loginPageHeader.textContent = "I have been changed by the script";

// console.log(document);


const loginFormInputs = document.getElementsByClassName("login-inputs");

console.log(loginFormInputs);


const paragraphElement = document.getElementsByTagName("p");

console.log(paragraphElement);



// select by css selector

const loginForm = document.querySelector("#login-form");

const elementsAllByQuerySelector = document.querySelectorAll(".login-inputs");



// Parent Child Sibling Elements

console.log(loginForm.parentElement.parentElement);

console.log(loginForm.firstElementChild);
console.log(loginForm.lastElementChild);
console.log(loginForm.children);

console.log(loginForm.firstElementChild.nextElementSibling.nextElementSibling);


// creating element

const newElement = document.createElement("p");
newElement.textContent = "Hello There";

loginForm.appendChild(newElement);
loginForm.removeChild(newElement);



// Events and Listeners
/*
    Critical to web development

    It allows your page to be interactive and responsive to user interaction

    We can attach event listeners to elements on the page, which when triggered, can run a specific function


    Events
        - Actions or occurrences that can happen in the browser, like clikcing, hovering, etc

    Event Listeners
        - These are JS functions that listen for the specific event
        - When the event occurs, the event listener callback function is executed
*/


// attach event listener

const loginButtonInput = document.querySelector("#login-button");

loginButtonInput.addEventListener("click", (event) => {
    console.log("i have been clicked");
    console.log(event);
})

/*
    Event object is created and passed to the event listener callback
    The event object contains information about the event, such as the target element
*/

// Bubbling and Capturing

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");


// By default it is bubbling

// parent.addEventListener("click", () => {
//     alert("parent has been clicked");
// })
child.addEventListener("click", () => {
    alert("child has been clicked");
})

// to make it capturing, we pass an additional argument of true after the callback
// By default, it is false

parent.addEventListener("click", () => {
    alert("parent has been clicked");
}, true)
// child.addEventListener("click", () => {
//     alert("child has been clicked");
// }, true)

