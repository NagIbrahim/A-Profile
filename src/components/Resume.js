import React from 'react'
import { Link } from "react-router-dom"

import "./resume.css"

function Resume() {

  return (

    <div>

    <div id="res-container">
       <div id="top">

      <h3>Resume</h3>
       <div id='res-t'>
        
        <img src={"/images/ameer.jpg"} id ="res-image"alt="img"/>
        <div id="who">
          <p id="name">Ameer Alaswad</p>
          <p id="job">Webdeveloper</p>
        </div>

      </div>



      </div>
      
     <div id="profile"><h4 id="profile-title">Profile</h4>
      <p id="aboutme">
Driven web developer & Syrian refugee with 1 year freelance experience seeks role at a diverse, results-oriented tech company. Passionate about tech's positive impact, committed to clean code & collaboration. Eager to learn & contribute meaningfully.
•	Coding languages : JavaScript, Typescript, CSS, HTML.
•	Stack : React, Next.js, Jquery, Handlebars, Grid, Flexbox, Material-UI, Redux , Jest, React-testing-library, Jest, ES6, Node.js, Express, PostgreSQL, MongoDB, Socket.io, AWS, Git, Github, Netlify, Heroku.
.</p>

  <ul >
    <li className='tech'>Coding languages : JavaScript, Typescript, CSS, HTML.</li>
    <li className='tech'>Stack : React, Next.js, Jquery, Handlebars, Grid, Flexbox, Material-UI, Redux ,
Jest, React-testing-library, Jest, ES6, Node.js, Express, PostgreSQL, MongoDB,
Socket.io, AWS, Git, Github, Netlify, Heroku.</li>
  </ul>

      </div>   

       <div id="res-b">
          
     <div  id="line"></div> 
  
      <div className="res-card" id="res-card1">
          <div className="res-card-left"><p className='t-left' id="t1">Recent Project</p></div>
           <div className="card1-right">
            <div className="f-row" id="first">
            <p className="date">12/2023-1/2024</p>
            <p className='t' id="pt5">Freelance Services Project, Berlin</p>

            </div>
        
           <div id="second-row">
            <p id="p6">Frontend Project using React.js and Typescript</p>
           <div className='resume' id="list1">
            <p>
            	Crafted a responsive React.js and TypeScript website for Latakia GmbH, highlighting their security, logistics, and cleaning services.
            </p>
            <p>
            	Introduced Sentry for error tracking, expanding my expertise in frontend development and project management.
            </p>
           </div>

            </div>
           </div>




        </div>
        <div className='h-line'></div>

    
       <div className="res-card"  id="res-card2">
          <div className="res-card-left"><p className='t-left' id="t2">Previous Experiece</p></div>
           <div id="card2-right">
          
            <div className="f-row">
            <p className="date">1/2022-Present</p>
            <p id="p1" className='t'>1 year of Freelance experience</p>
            </div>
           
            <div  id="card2-second">
            <p className="date">5/2022-9/2022</p>
            <div id="first-row-p2" >
            <p className='t' id="pt1">Digital Career Institute , Full Stack Web Development, Berlin</p>
                <div className='resume' id="list2">
                <p>Gained expereinece building React, JavaScript, Typescript and even Vanilla
Javacript Apps.
                 </p>
                <p> Learned debugging and testing applications as well as new libraries.  </p>
              </div> 
              
              </div>
           
            
           </div>


           <div  id="card2-third">
            <p className="date">4/2021-7/2021</p>
            <div id="p3">
            <p  className='t' id="pt2" > SPICED Academy, Full Stack Web Development, Berlin</p>
               <div className='resume'>
                <p>Full stack intensive web development bootcamp where i learned the
Fundamentals of JavaScript, HTML, CSS and the back-end.

                 </p>
                <p> Built lots of Front-end and Full-Stack projects.  </p>
              </div>
              
              </div>
       

    
           
            
           </div>

           
           <div  id="card2-fourth">
            <p className="date">2020</p>
            <div id="p4">
            <p  className='t' id="pt3" >Online courses, Web Development, Berlin, Germany</p>
               <div className='resume'>
                <p>
                  <Link   to="https://www.udemy.com/course/the-web-developer-bootcamp/">Web Developer bootcamp </Link><span>: Learned the Fundamentals of JS, HTML, CSS and the
                     backend.
                </span>
                 </p>
                <p> 
                  <Link to="https://www.udemy.com/course/the-advanced-web-developer-bootcamp/">The advanced Web Developer bootcamp  </Link><span>: Learned React, ES6, CSS Animations.</span>
                </p>

               
                <p>
                  <Link to="https://www.youtube.com/watch?v=T2sv8jXoP4s&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd">React Testing Tutorial </Link><span>: Helped me test my React Components and functions.  </span>
                </p>


                <p>
                  <Link to="https://www.udemy.com/course/understanding-typescript/?couponCode=24T6MT62024"> TypeScript - 2022 Edition </Link><span>: Learned Typescript and built a project using it.</span>
                </p>


                <p>
                <Link to="https://www.youtube.com/playlist?list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH"> Next.js Tutorial for Beginners 
</Link><span>: Learned the basics of Next.js and applied it on a
small project.
 </span>
          
                </p>
              </div>
              
              </div>
      
           
            
           </div>
           
          </div>
        


        </div> 

           <div  className='h-line'></div>
              <div className="res-card" id="res-card3">
          <div className="res-card-left"><p className='t-left' id="t3">Education</p></div>
           <div id="card2-right">
          
    
            <div  id="card2-second" className='res-last'>
            <p className="date">2013-2014</p>
            <div id="first-row-p2">
            <p  className='t'  id="pt4">Manager of Tourist Facilities, Hospitality Management, HPCTS, Syria</p>
               <div className='resume'>
                <p>Graduate degree
                 </p>
              
              </div>
              
              </div>
       
           
            
           </div>


           <div  id="card2-third">
            <p className="date">2011-2013</p>
            <div id="p3">
            <p  className='t' id="pt4">Tourism and Travel Services Management, HPCTS, Syria</p>
               <div className='resume'>
                <p>Diploma of education
                 </p>
              
              </div>
              
              </div>
       
           
            
           </div>

           
           
           
          </div>
        


        </div> 
    
    </div>

    </div>

    <div id="arrow-link">
          <a href="#header" >
           
            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-6flbmm" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StraightIcon" ><path d="M11 6.83 9.41 8.41 8 7l4-4 4 4-1.41 1.41L13 6.83V21h-2z"></path></svg>
          </a>
        
          <p>Back to top</p>
        </div>

    

      
    </div>
    

    
    
  )
}

export default Resume

