import React from 'react'
import { Link } from "react-router-dom"

import "./resume.css"

function Resume() {
  return (
    <div id="res-container">
      <div id='res-t'>
        
        <img src={"/images/ameer.jpg"} id ="res-img"alt="img"/>
        <div id="who">
          <p>Ameer Alaswad</p>
          <p>Webdeveloper</p>
        </div>

      </div>
      <div id="profile"><h4>Profile</h4>
      <p>
Driven web developer & Syrian refugee with 1 year freelance experience seeks role at a diverse, results-oriented tech company. Passionate about tech's positive impact, committed to clean code & collaboration. Eager to learn & contribute meaningfully.
•	Coding languages : JavaScript, Typescript, CSS, HTML.
•	Stack : React, Next.js, Jquery, Handlebars, Grid, Flexbox, Material-UI, Redux , Jest, React-testing-library, Jest, ES6, Node.js, Express, PostgreSQL, MongoDB, Socket.io, AWS, Git, Github, Netlify, Heroku.
.</p>

  <ul>
    <li>Coding languages : JavaScript, Typescript, CSS, HTML.</li>
    <li>Stack : React, Next.js, Jquery, Handlebars, Grid, Flexbox, Material-UI, Redux ,
Jest, React-testing-library, Jest, ES6, Node.js, Express, PostgreSQL, MongoDB,
Socket.io, AWS, Git, Github, Netlify, Heroku.</li>
  </ul>

</div>
      <div id="res-b">
  
        <div className="res-card">
          <div className="res-card-left"><h3>Recent Project</h3></div>
           <div id="card1-right">
            <div id="x">
            <p className="x-p">12/2023-1/2024</p>
            <p>Freelance Services Project, Berlin</p>

            </div>
        
           <div id="y">
            <div className='fill'></div>

          
            <div>

            <p>Frontend Project using React.js and Typescript</p>
           <ul>
            <li>
            	Crafted a responsive React.js and TypeScript website for Latakia GmbH, highlighting their security, logistics, and cleaning services.
            </li>
            <li>
            	Introduced Sentry for error tracking, expanding my expertise in frontend development and project management.
            </li>
           </ul>

            </div>
        

           </div>
           </div>




        </div>
        <hr></hr>

       <div className="res-card">
       <div className="res-card-left"><h3>Previous Experience</h3></div>
        
       <div className="card2-right">
            <div id="x2">
            <p id="x2-p">1/2022-present</p>
            <p>1 year of Freelance experience</p>

            </div>
        
           <div id="y2">
            {/*<div className='fill'></div>*/}
            <div id="z2"><p>5/2022-11/2022</p></div>
            <div>

            <p>Digital Career Institute , Full Stack Web Development, Berlin</p>
           <ul>
            <li>
            Gained expereinece building React, JavaScript, Typescript and even Vanilla
Javacript Apps.

            </li>
            <li>
            Learned debugging and testing applications as well as new libraries.
            </li>
           </ul>

            </div>

              </div>

             <div id="card-y3">
           
            <div id="z3"><p>5/2022-11/2022</p></div>
            <div>

            <p>SPICED Academy, Full Stack Web Development, Berlin</p>
           <ul>
            <li>
            Full stack intensive web development bootcamp where i learned the
Fundamentals of JavaScript, HTML, CSS and the back-end.


            </li>
            <li>
            Built lots of Front-end and Full-Stack projects.
            </li>
           </ul>

            </div>

              </div>




              <div id="y4">
            {/*<div className='fill'></div>*/}
            <div id="z4"><p>2020</p></div>
            <div>

            <p>Online courses, Web Development, Berlin, Germany</p>
           <ul>
            <li>
             <Link to="https://www.udemy.com/course/the-web-developer-bootcamp/?couponCode=OF53124">Web Developer bootcamp </Link>
            </li>
            <li>
             <Link to="https://www.udemy.com/course/the-advanced-web-developer-bootcamp/?couponCode=OF53124">The advanced Web Developer bootcamp</Link>
            </li>
            <li>
              <Link to="https://www.youtube.com/watch?v=T2sv8jXoP4s&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd">React Testing Tutorial :</Link>
            </li>
            <li>
              <Link to=" https://www.udemy.com/course/understanding-typescript/">TypeScript - 2022 Edition </Link>
            </li>
            <li>
              <Link to="https://www.youtube.com/playlist?list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH">Next.js Tutorial for Beginners</Link>
            </li>
           </ul>

            </div>

              </div>




              

       </div>

       
       

       </div>

        </div>

        
     
        
        <hr></hr>

        
      </div>

    
    
  )
}

export default Resume

