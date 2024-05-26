import React from 'react'
import Card from './Card'
import cardImg from "../images/imgs1.jpg"
import "./projects.css"

const Data = [
  {
    id: 1,
    title: "Project 1",
    description: "This is the description for Project 1.This is the description for Project 1.This is the description for Project 1.This is the description for Project 1. This is the description for Project 1.This is the description for Project 1",
    imageSrc: "../images/imgs1.jpg"
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is the description for Project 2.",
    imageSrc: "../images/imgs1.jpg"
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is the description for Project 3.",
    imageSrc: "../images/imgs1.jpg"
  },
  
];

function Projects() {
  return (
    <div id="bg-container">
      <div id="projects-title">
      <p>My projects</p>
      </div>
     <div id="projects-container">
     
     {Data.map((element, index) => {
          const layout = index % 2 === 0 ? 'even' : 'odd';
          return <Card ClassName="card" key={index} layout={layout} title={element.title} description={element.description} imageSrc={cardImg} />;
        })}
     
     
     {/* <Card ClassName="card"/> */}
     
     </div>
    
    </div>
  )
}

export default Projects
