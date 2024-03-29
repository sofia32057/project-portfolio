<h1 align="center">
  <a href="">
    <img src="/react-p.svg" alt="Project Banner Image">
  </a>
</h1>

# Technigo - React Portfolio Project

Congratulations on completing Sprint 2 of the boot camp! For the final phase, we will now take your skills in React to the next level by building your very own portfolio website using the concepts learned in class

## Instructions

[Check this projects instructions here](https://github.com/Technigo/project-portfolio/blob/main/instructions.md)

## Set up your own version of your portfolio

We will use [Vite](https://vitejs.dev/guide/) to setup our project 😉

```bash
  npm create vite@latest my-react-portfolio --template
```

#### Follow this GIF to setup your project

![Alt Text](https://res.cloudinary.com/dfkxydgqg/image/upload/v1691073155/WEB/Sprint-2/week-8/vite-react_vjp0ep.gif)

## Installation

Use the `cd` command to move into the folder

```bash
  cd my-react-portfolio
```

Install the dependencies

```bash
  npm i
```

Open the project in a separate VS Code editor

```bash
  code .
```

Open up a terminal inside VS code and lets run the project in a local environment

```bash
  npm run dev
```

## The problem

For week 8 we're creating a portfolio using React, to showcase the projects we're completed this far in the Bootcamp. The design is provided and we should follow is closely, practicing working with reusable components and figma.

I forked the project and then followed the instructions on how to install - resultning in a somewhat confusing folder structure. It took some time before I got the hang of using git and npm within the structure.

I decided to use the Github APi straight away, since putting the data into a json would be just as much work. I used the provided instructions for custom project images due to images not being included in the API.

Since reusable compontens is part of the assignment, I opted to create a stylesheet for each component. I still feel this results in more repetition, but suspects it's necessary while for example working with design systems.

Further into the project I created more reusable components, trying to get into the way of thinking. I still kind of feel it's MORE code making headings a component than just using the tag and classes.

The biggest styling issue I had with skills, since the design breaks the skills after two - while the width supports three. Due to putting my skills in a json I couldn't just put the box where I needed it, so I had to google a way to create new boxes every two element while mapping. I kind of get how it works...

### Next step

## View it live

[https://sofias-portfolio.netlify.app/](https://sofias-portfolio.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/0b243f6d-7544-4a2e-86ca-417d353add22/deploy-status)](https://app.netlify.com/sites/sofias-portfolio/deploys)
