import React from 'react'
import Card from './Card'
import cardImg from "../images/imgs1.jpg"
import "./projects.css"

const Data = [
  {
    id: 1,
    title: "Project 1",
  
    description1:`Ich bin ein Textabschnitt. Klicke hier, um Text
     hinzuzufügen und bearbeite mich. Klicke auf  Text bearbeiten“ oder doppelklicke, um Inhalt hinzuzufügen und die Schriftart zu ändern. Ziehe mich an eine beliebige Stelle auf deiner Website. Es ist der ideale Ort, um Besuchern etwas mehr über dich zu erzählen.`,
        description2:` Hier kannst du einen längeren Text über dein Unternehmen verfassen. Beschreibe dein Unternehmen etwas ausführlicher. Sprich über die Dienstleistungen, die du anbietest. Erzähle Besuchern die Geschichte deines Unternehmens, wie es entstanden ist und was dich von der Konkurrenz unterscheidet. Hebe hervor, was dein Unternehmen besonders macht und wer du`,
    
        imageSrc: "../images/imgs1.jpg"

  },
  {
    id: 2,
    title: "Project 2",
    description1:`Ich bin ein Textabschnitt. Klicke hier, um Text
     hinzuzufügen und bearbeite mich. Klicke auf  Text bearbeiten“ oder doppelklicke, um Inhalt hinzuzufügen und die Schriftart zu ändern. Ziehe mich an eine beliebige Stelle auf deiner Website. Es ist der ideale Ort, um Besuchern etwas mehr über dich zu erzählen.`,
    description2:` Hier kannst du einen längeren Text über dein Unternehmen verfassen. Beschreibe dein Unternehmen etwas ausführlicher. Sprich über die Dienstleistungen, die du anbietest. Erzähle Besuchern die Geschichte deines Unternehmens, wie es entstanden ist und was dich von der Konkurrenz unterscheidet. Hebe hervor, was dein Unternehmen besonders macht und wer du`,
    
    
    imageSrc: "../images/imgs1.jpg"
  },
  {
    id: 3,
    title: "Project 3",
    description1:`Ich bin ein Textabschnitt. Klicke hier, um Text
    hinzuzufügen und bearbeite mich. Klicke auf  Text bearbeiten“ oder doppelklicke, um Inhalt hinzuzufügen und die Schriftart zu ändern. Ziehe mich an eine beliebige Stelle auf deiner Website. Es ist der ideale Ort, um Besuchern etwas mehr über dich zu erzählen.`,
       description2:` Hier kannst du einen längeren Text über dein Unternehmen verfassen. Beschreibe dein Unternehmen etwas ausführlicher. Sprich über die Dienstleistungen, die du anbietest. Erzähle Besuchern die Geschichte deines Unternehmens, wie es entstanden ist und was dich von der Konkurrenz unterscheidet. Hebe hervor, was dein Unternehmen besonders macht und wer du`,
   
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
          const layout = index % 2 === 1 ? 'even' : 'odd';
          return <Card ClassName="card" key={index} layout={layout} title={element.title} description1={element.description1} description2={element.description2}    imageSrc={cardImg} />;
        })}
     
     
     {/* <Card ClassName="card"/> */}
     
     </div>
    
    </div>
  )
}

export default Projects
