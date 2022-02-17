# Project Cv Full Stack

This is a full stack project to show what we have learned. The idea is to mimic the full work experience of a developer in 2022, so when we get a job as a dev we can be ready for anything, from ticket creating and grooming to working on an end to end ticket!.

If you fork this project it can served you as a guideline to arm your self with the basics(and a little more) to become a developer. The following text will explain the plan of action and some basic guidelines.

This file will be the only guide and a helpful tool for newcomers, all the other .md files will be topic specific and for knowledge transference purposes. The idea is to keep a good documentation (to learn how to document) for the benefit of other project members and future developers that will join the team.

From now on some words and phrases will be shorten to the following:

Front End - FE

Back End - BE

JavaScript - Js

Data Base - DB

Application - App

## What is vanilla js?

Using "VanillaJS" means using plain JavaScript without any additional libraries like jQuery. So for the first few months you will develop using the very core of Js, no extras, no sweeteners.

# Road Map

![Road Map](/roadmap.PNG?raw=true 'Title')

Here is the roadmap, as you can see there are learning stages and implementation stages. The idea is to follow this roadmap, learn what you have to learn and then implement it, once the basics are mastered we can jump to the next learning stage and so on.
At the end you will see a more detail [path](#month-to-month-work)

## Architecture and Methodology

The project will consist in a basic [three-tier architecture](https://www.techopedia.com/definition/24649/three-tier-architecture) (we will see what this means later) and will be mainly focused on JavaScript.
We will use a very basic [kaban](https://en.wikipedia.org/wiki/Kanban) approach with tickets using the issue board provided by github plus we will implement dailies and every other necessary ceremony in order to have an idea of what a developers day to day activities are.

# Main branches

As previously explain we will have 3 main branches, please respect that. It will be very useful in order to have a clean development and learn a little about technology migration (when a client needs to migrate from an old technology to a newer one).

> **vanilla-front-end** will be the first branch to be developed, this one will only be a FE vanilla JS app, to help us reinforce what was learned.

> **node-back-end** will be for basic BE development, will contain only the necessary, in the next tab we will implement more advanced features.

> **full-stack** here we go all in!. You have the basics now it's time to go above and beyond. Here we will implement React in the front and advance features in the back, there are no limits. The idea is to fully simulate an end to end work like an experienced developer would work on.

# Tools, Technologies & More

Things that we will learn and implement in this project.

## FE

- HTML
- CSS
- JavaScript
- Axios
- ReactJs
- Redux
- MaterialDesign
- HighCharts
- ApolloClient with GraphQL

## BE

- NodeJs
- Classes/Schemas
- Data Validation
- Query Injection Prevention
- Status Report
- Batch Processor
- Hash & Salt
- GraphQL

## DB

- MongoDB

## Hosting

- Heroku/Netlify

# Stages of the project

Next the different stages of the project will be listed and explain, feel free to return to X date commit or checkout to an specific branch to see the project development process.

## Basic Vanilla Front End

Due to learning purposes first the FE will be developed with vanilla JS (plus html and css) to get a better grasp on the previously mention topics.

## Basic Back End

Here we will begin working on the BE, like the FE at the start we will do the basics, take a request and return a response.

## Data Base

Now that we have a basic BE we can hook it up to a DB, a free tier mongo DB for this project will be more than enough.

## Upgrade to React

At this point we have a better understanding on the basics of HTML, CSS and JS and we will migrate to ReactJs to do the same learning process. Here we will implement the basics of ReactJs.

## End 2 End

Now at we have all the basics we can work on all the tiers. At this point most tickets will involved a full stack work. **IF** possible we will try to implement most of Reacts features even if they sound overkill for a project of this scale. (Remember we aim to learn). The same goes for the BE, we will try to show off what we can do!.

## Testing

Since testing is not the main focus but a nice to have we will start implementing testing at the end and the coverage won't be a main concern, we will try to reach 100% of the code with unit tests but we make no promises.

# Files and folders structure

The project will be separated in two folders, Front-End and Back-End, each folder contains _.md_ files for installation guides and more info regarding features.

# Work flow

We will keep the work flow simple:
To-Do -> In progress -> In review -> Done/Blocked

- To-Do: A ticket that is ready to be worked on.

- In progress: A ticket that is currently in progress/in develop

- In review: A ticket/code that is waiting for a peer review.

- Done: The ticket was approved by you peers and was merge into the master code.

- Blocked: A ticket that cant be worked on for some reason.

We will have tags to clarified that a ticket is ready to be taken:
_groomed_

Other relevant tags will be listed here.

# Branching Rules

To create a branch please follow the next structure. This should be respected regardless of the "current main branch".

|               | Branch structure                    |
| ------------- | ----------------------------------- |
| feature       | feature/001-title-of-the-ticket     |
| bugfix        | fix/002-title-or-concept-of-the-fix |
| documentation | doc/003-documentation-title         |

# Issues

Since this is part a personal project/study guide we will create tickets/issues to distribute the work among the current participants, feel free to fork this repo and create your own [project](https://github.com/features/issues) this is a new github feature that will help you simulate a real work process.

# Month to Month work

We will try to sort the project in "months", what does this means? We will divide each month with topics to learn or implement. Feel free to take more or less time this is just a guide and follow the guide to develop your own project or follow mine.

Here you will have some basic definitions with links to free crash courses or tutorials in youtube. In the future this section might get expand.

## Months 1 & 2:

First we need to learn a few things. And install a few others.

### What we need to learn?

- What is [HTML](https://www.youtube.com/watch?v=qz0aGYrrlhU&ab_channel=ProgrammingwithMosh)? HTML means HyperText Markup Language. If we think of think this project like a human body HTML would be the bones, the basic structure and what serves as the structure that will support all the rest. This is **NOT** a programming language, is a markup language.

- What is [CSS](https://www.youtube.com/watch?v=yfoY53QXEnI&ab_channel=TraversyMedia)? CSS means Cascading Style Sheets. This would be the skin of the body, the "pretty" part, what we look at every time we visit the page. With this we can give our project color, shapes and much more.

- What is [JS](https://www.youtube.com/watch?v=W6NZfCO5SIk&ab_channel=ProgrammingwithMosh)? Js, JavaScript ECMAScript (basically they are all the same JavaScript) its a programming language, you can think about it like the muscles of the body what enables movement and allows us to interact with others. I few things to have into account, JS is not similar or a lost brother of Java, the Java in JS was just to lure developers into check in it out when it was in its early steps. Now a days its more common to call it just JS. [Here](https://www.youtube.com/watch?v=PkZNo7MFNFg&ab_channel=freeCodeCamp.org) is a more in depth course but also a lot longer.

- What is [GIT](https://www.youtube.com/watch?v=SWYqp7iY_Tc&t=843s&ab_channel=TraversyMedia)? It's a version control for tracking changes in a computer files, this allows multiple programmers to work on the same project. You can think of it as a stop light, it coordinates who can pass through in an orderly fashion. It comes with it own CMD and many other features. Remember that you should respect the [Main Branches](#main-branches) and try to follow the [Branching Rules](#branching-rules)

### What you need to install?

For most project you will use a few things.

- [GIT](https://www.youtube.com/watch?v=SWYqp7iY_Tc&t=843s&ab_channel=TraversyMedia)
- [NodeJS](https://nodejs.org/en/download/)
- [VsCode](https://code.visualstudio.com/download)

## Months 3, 4 & 5:
