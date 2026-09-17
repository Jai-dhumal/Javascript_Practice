# Todo App — JavaScript Practice

This is a simple **Todo App created strictly for practice purposes** while learning **JavaScript DOM manipulation and Event Handling**.

> ⚠️ **Note:** This project is created **JUST FOR PRACTICE PURPOSES**.
> It is a learning project and is not intended to be a production-ready application.

## 📌 Project Purpose

The main purpose of this project is to practice how JavaScript can interact with HTML elements and dynamically modify a webpage.

Through this project, I practiced:

* Selecting HTML elements using JavaScript
* Creating HTML elements dynamically
* Adding text to elements
* Adding CSS classes using JavaScript
* Appending elements to the DOM
* Handling button click events
* Using Event Listeners
* Understanding Event Delegation
* Using `event.target`
* Removing elements from the DOM

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript

## 📂 Project Structure

```text
Todo-App/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

## ⚙️ How It Works

### 1. Add a Task

The user enters a task in the input field and clicks the **Add Task** button.

JavaScript creates a new `<li>` element dynamically and adds the entered task to the list.

### 2. Delete a Task

Each newly created task receives a **Delete** button.

When the Delete button is clicked, JavaScript identifies the corresponding `<li>` element and removes it from the page.

### 3. Event Delegation

The Delete functionality uses **Event Delegation**.

Instead of adding a separate event listener to every Delete button, the click event is handled by the `<ul>` element.

```javascript
ul.addEventListener("click", function(event) {

    if (event.target.nodeName === "BUTTON") {
        let liitem = event.target.parentElement;
        liitem.remove();
    }

});
```

This was done specifically to practice event bubbling and event delegation.

## 🎯 Learning Objectives

This project was created to understand the following JavaScript concepts:

```text
DOM Selection
     ↓
DOM Manipulation
     ↓
Creating Elements
     ↓
Appending Elements
     ↓
Event Listeners
     ↓
Event Delegation
     ↓
event.target
     ↓
Removing Elements
```

## 🚀 Future Improvements

These features may be added later as further practice:

* Prevent adding empty tasks
* Mark tasks as completed
* Add task editing functionality
* Add a Clear All button
* Store tasks using Local Storage
* Improve responsive design

## 📚 Purpose of This Repository

This repository contains **practice programs and learning projects** created while learning web development.

The Todo App is **not intended to demonstrate a complete production application**. Its primary purpose is to practice JavaScript concepts and understand how JavaScript interacts with HTML and CSS.

---

### ⚠️ Practice Project

**This project is created JUST FOR PRACTICE PURPOSES and learning.**
