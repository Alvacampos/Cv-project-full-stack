# Tools, Technologies and More

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

# Architecture and Methodology

The project will consist in a basic [three-tier architecture](https://www.techopedia.com/definition/24649/three-tier-architecture) (we will see what this means later) and will be mainly focused on JavaScript.
We will use a very basic [kaban](https://en.wikipedia.org/wiki/Kanban) approach with tickets using the issue board provided by github plus we will implement dailies and every other necessary ceremony in order to have an idea of what a developers day to day activities are.

# Files and folders structure

The project will be separated in two folders, Front-End and Back-End, each folder contains _.md_ files for installation guides and more info regarding features.

This will be expand along with the project.

# Main branches

As previously explain we will have 3 main branches, please respect that. It will be very useful in order to have a clean development and learn a little about technology migration (when a client needs to migrate from an old technology to a newer one).

> **vanilla-front-end** will be the first branch to be developed, this one will only be a FE vanilla JS app, to help us reinforce what was learned.

> **node-back-end** will be for basic BE development, will contain only the necessary, in the next tab we will implement more advanced features.

> **full-stack** here we go all in!. You have the basics now it's time to go above and beyond. Here we will implement React in the front and advance features in the back, there are no limits. The idea is to fully simulate an end to end work like an experienced developer would work on.

# Branching Rules

To create a branch please follow the next structure. This should be respected regardless of the "current main branch".

|               | Branch structure                    |
| ------------- | ----------------------------------- |
| feature       | feature/001-title-of-the-ticket     |
| bugfix        | fix/002-title-or-concept-of-the-fix |
| documentation | doc/003-documentation-title         |

# Work flow

We will keep the work flow simple:
To-Do -> In progress -> In review -> Done/Blocked

- To-Do: A ticket that is ready to be worked on.

- In progress: A ticket that is currently in progress/in develop

- In review: A ticket/code that is waiting for a peer review.

- Done: The ticket was approved by you peers and was merge into the master code.

- Blocked: A ticket that cant be worked on for some reason.

We will have tags to clarified that a ticket is ready to be taken:
**groomed**

Other relevant tags will be listed here.

---

- [Return to README](README.md#project-cv-full-stack)

# Deployment

There are multiple ways to deploy projects, here we will use Netlify for the FE. It's free and allows us to deploy whatever we want with relative ease.
For the BE we will use Heroku, that also come with a free tier and gets along great with github.

## Netlify

For Netlify you can follow the [Get started with Netlify](https://docs.netlify.com/get-started/) you can deploy your project from the get go or wait until is more mature. Of course you will need a netlify account, no credit card is need it.

## Heroku

For Heroku is pretty much the same, you can do it now or later on the project. Here is the [documentation](https://devcenter.heroku.com/articles/getting-started-with-nodejs) you also need an account and no credit card is need it.
