# Sprint-Challenge Applied Javascript - Lambda Times

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored the DOM and the concept of components. During this Sprint, you studied the DOM, DOM Events, and Components, as well as HTTP GET requests, and the axios library. In your challenge this week, you will demonstrate proficiency by creating an online Lambda newspaper called "Lambda Times."

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your Tead Lead and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Applied JavaScript.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your Team Lead.

## Description

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page. You will do this at first with static data, then you will request data from a server to create dynamic components.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. What is the DOM?

ANS: The DOM is an object representation of an HTML document which can be modified with a scripting language such as JavaScript. 
The DOM is not the HTML page itself but only an object representation of it. Being an object, the DOM has a bunch of Methods 
and properties attached to it and that makes it possible for us to manipulate what and how a browser renders an HTML page at the 
end of the day.

2. What is an event?
ANS: Events and "occurences" or "things" that happen with or to our html elements/document. Events fire pretty much all the time 
and events may refer to things a user does or things the browser does. Using Javascript, such events can be responded to accordingly.
e.g of events include: the page loading, the user click a button, the user hovering on a particular section or the entire web
page, rolling the mouse wheel etc

3. What is an event listener?
ANS: An event listener is a function that we set up to respond to certain events as they fire within our html document. The browser
listens for an event and invokes a particular call back function whenever that event fires.

4. Why would we convert a NodeList into an Array?
ANS: Why would we convert a NodeList into an Array?
A nodeList is not an array, it is only similar to an array in the sense that it is an array-like structure
that contains all the selected node types. NodeList is an object that consists of a list of all nodes in a 
document or of all the nodes within a particular selected set of nodes. Therefore, for us to be able to call 
certain array method on a NodeList, we first need to covert it to an array using the Array.from() method, 
passing the NodeList as an argument.

5. What is a component?
ANS: Generally speaking, a component means a segment or a fragment of an integrated whole! A web component, however, could mean a function which can be used together to create custom elements or functionality and can be reused over and over again.
It could also mean a function which performs certain logic/algorithms and returns an DOM/HTML element as we have seen during the course of our lecture week.
### Git Set up

* [ ] Fork the project into your GitHub user account
* [ ] Clone the forked project into a directory on your machine
* [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
* [ ] You are now ready to build this project with your preferred IDE

## Minimum Viable Product

Your finished project must include all of the following requirements:

* [ ] Look through the HTML code and familiarize yourself with the different sections. Some of them already exist, but some need to be filled in. DO NOT add any code to the HTML file itself.

* [ ] Following the instructions in the `Header/index.js` file, create the Header component. 

* [ ] Following the instructions in the `Tabs/index.js` file, create individual Tabs components.

* [ ] Following the instructions in the `Cards/index.js` file, create individual Cards components.

## Stretch Problems

Your stretch challenge is to write the functionality of a `Carousel` component. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. This is going to be a bit different because you are going to need to create some advanced functionality for the carousel. There is no need to request data for this exercise.

* [ ] Complete the carousel functionality in `Carousel.js`

* [ ] If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.

* [ ] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.

* [ ] If you have finished the above, research `data attributes`. Implement data attributes within your tabs as well as your cards. Give the tabs functionality so that when they are clicked they filter the cards to only display the cards that contain that topic.
