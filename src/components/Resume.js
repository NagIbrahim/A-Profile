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
          <div className="res-card-left"><p className='t'>Recent Project</p></div>
           <div className="card1-right">
            <div className="first-row">
            <p className="date">12/2023-1/2024</p>
            <p className='t'>Freelance Services Project, Berlin</p>

            </div>
        
           <div id="second-row">
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
        <hr></hr>
        <div className="res-card">
          <div className="res-card-left"><p className='t'>Previous Experiece</p></div>
           <div id="card2-right">
          
            <div className="first-row">
            <p className="date">1/2022-Present</p>
            <p id="p1" className='t'>1 year of Freelance experience</p>
            </div>
           
            <div  id="card2-second">
            <p className="date">5/2022-9/2022</p>
            <div id="first-row-p2" >
            <p className='t'>Digital Career Institute , Full Stack Web Development, Berlin</p>
               <ul>
                <li>Gained expereinece building React, JavaScript, Typescript and even Vanilla
Javacript Apps.
                 </li>
                <li> Learned debugging and testing applications as well as new libraries.  </li>
              </ul>
              
              </div>
       

             {/* */}
           
            
           </div>


           <div  id="card2-third">
            <p className="date">4/2021-7/2021</p>
            <div id="p3">
            <p  className='t' > SPICED Academy, Full Stack Web Development, Berlin</p>
               <ul>
                <li>Full stack intensive web development bootcamp where i learned the
Fundamentals of JavaScript, HTML, CSS and the back-end.

                 </li>
                <li> Built lots of Front-end and Full-Stack projects.  </li>
              </ul>
              
              </div>
       

             {/* */}
           
            
           </div>

           
           <div  id="card2-fourth">
            <p className="date">2020</p>
            <div id="p4">
            <p  className='t' >Online courses, Web Development, Berlin, Germany</p>
               <ul>
                <li>
                  <Link   to="https://www.udemy.com/course/the-web-developer-bootcamp/">Web Developer bootcamp </Link><span>: Learned the Fundamentals of JS, HTML, CSS and the
backend.
 </span>
                 </li>
                <li> 
                  <Link to="https://www.udemy.com/course/the-advanced-web-developer-bootcamp/">The advanced Web Developer bootcamp  </Link><span>: Learned React, ES6, CSS Animations.</span>
                </li>

               
                <li>
                  <Link to="https://www.youtube.com/watch?v=T2sv8jXoP4s&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd">React Testing Tutorial </Link><span>: Helped me test my React Components and functions.  </span>
                </li>


                <li>
                  <Link to="https://www.udemy.com/course/understanding-typescript/?couponCode=24T6MT62024"> TypeScript - 2022 Edition </Link><span>: Learned Typescript and built a project using it.</span>
                </li>


                <li>
                <Link to="https://www.youtube.com/playlist?list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH"> Next.js Tutorial for Beginners 
</Link><span>: Learned the basics of Next.js and applied it on a
small project.
 </span>
          
                </li>
              </ul>
              
              </div>
       

             {/* */}
           
            
           </div>
           
          </div>
        


        </div>


        {/* */}
        <hr></hr>
             <div className="res-card">
          <div className="res-card-left"><p className='t'>Education</p></div>
           <div id="card2-right">
          
    
            <div  id="card2-second" className='last'>
            <p className="date">2013-2014</p>
            <div id="first-row-p2">
            <p  className='t'>Manager of Tourist Facilities, Hospitality Management, HPCTS, Syria</p>
               <ul>
                <li>Graduate degree
                 </li>
              
              </ul>
              
              </div>
       

             {/* */}
           
            
           </div>


           <div  id="card2-third">
            <p className="date">2011-2013</p>
            <div id="p3">
            <p  className='t'>Tourism and Travel Services Management, HPCTS, Syria</p>
               <ul>
                <li>Diploma of education
                 </li>
              
              </ul>
              
              </div>
       

             {/* */}
           
            
           </div>

           
           
           
          </div>
        


        </div>



        
  
    </div>
    </div>
    
  )
}

export default Resume

