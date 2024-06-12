import React from 'react'
import Card from './Card'
/*import cardImg from "../images/imgs1.jpg"*/
import "./projects.css"

const Data = [
  {
    id: 1,
    title: "Videos-Gallery-Freelance",
  
    description1:`A frontend project featuring an immersive video gallery with autoplay functionality, providing users with a seamless experience to preview and enlarge videos with a single click.
.`,

        imageSrc: "../images/project1.png",
        demo:`https://videos-gallery.netlify.app/`,
        gitlink:`https://github.com/Ameer-Alaswad/videos-gallery`

  },
  {
    id: 2,
    title: "Latakia-GmbH-Services-Freelance ",
    description1:`Frontend Website Latakia GmbH's security, logistics, and cleaning services. Leveraged React.js and TypeScript for seamless user experience and introduced Sentry for effective error tracking, enhancing the overall functionality.`,
    description2:` Hier kannst du einen längeren Text über dein Unternehmen verfassen. Beschreibe dein Unternehmen etwas ausführlicher. Sprich über die Dienstleistungen, die du anbietest. Erzähle Besuchern die Geschichte deines Unternehmens, wie es entstanden ist und was dich von der Konkurrenz unterscheidet. Hebe hervor, was dein Unternehmen besonders macht und wer du`, 
    imageSrc: "../images/project2.png",
    demo:"https://latakia-gmbh.netlify.app/ ",
    gitlink:"https://github.com/Ameer-Alaswad/latakia-gmbh-services-freelance"
  },
  {
    id: 3,
    title: "E-commerce ",
    description1:`This full-stack e-commerce website features a responsive design, product browsing, cart management, and PayPal integration.`,
   
    imageSrc: "../images/project3.png",
    demo:"https://ameer-alaswad.netlify.app/ProjectsList/E-commerce%20(on%20going%20project) "   ,
    gitlink:"https://github.com/Ameer-Alaswad/E-commerce "
  },

  {
    id: 4,
    title: "Interior Designer Website (Freelance)  ",
    description1:`Display the work of an interior designer and how to make a contract with him`,
   
    imageSrc: "../images/project4.png",
    demo:"https://3d-gk.netlify.app/"   ,
    gitlink:"https://github.com/Ameer-Alaswad/Interior-Design-Portfolio"
  },

  {
    id: 5,
    title: "Weather Forecast  ",
    description1:`Forecasting the weather involves recording the ongoing measurements of temperature Depending on where you are in the world.`,
   
    imageSrc: "../images/project5.png",
    demo:"https://weather-forcast-ameer.netlify.app/ "   ,
    gitlink:"https://github.com/Ameer-Alaswad/Weather-app "
  },
  {
    id: 6,
    title: "Todolist ",
    description1:`A list of things that one wants to get done or that need to get done`,
    imageSrc: "../images/project6.png",
    demo:"https://my-todolist-typescript.netlify.app/ "   ,
    gitlink:"https://github.com/Ameer-Alaswad/Todolist-Typescript "
  },
  {
    id: 7,
    title: "Pokedex ",
    description1:`Pokedex is a pokemon app where you can dive into pokemon world, you can find all Pokemon including your favorite one with it's stats, type(S), evolutions .`,
   
    imageSrc: "../images/project7.png",
    demo:"https://pokemon-dexx.netlify.app "   ,

    gitlink:"https://github.com/Ameer-Alaswad/Pokedex "
  },
{
  id: 8,
  title: "TodoList ",
  description1:`list the things that you want to get done or that need to get done..`,
  imageSrc: "../images/project8.png",
  demo:"https://todolist-ameer-vjs.netlify.app/"   ,
  gitlink:"https://github.com/Ameer-Alaswad/Todolist-VJS"

}


  
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
          return <Card ClassName="card" key={index} layout={layout} title={element.title} description1={element.description1}  demo={element.demo} projectLink={element.gitlink} imageSrc={element.imageSrc} />;
        })}
     
     
     {/* <Card ClassName="card"/> */}
     
     </div>
    
    </div>
  )
}

export default Projects
