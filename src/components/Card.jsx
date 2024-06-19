import React from "react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGithub } from "react-icons/fa"
import { FaGlobe } from "react-icons/fa";
import "./card.css";
function Card({
  description1,
  description2,
  title,
  demo,
  glink,
  imageSrc,
  layout,
}) {
  return (
    <div id="card" className={` ${layout}`}>
      <div id="card-img">
        {/*<div  id="project-title"><p>{title}</p></div> */}
        <img src={imageSrc} alt="img" />
      </div>
        
      <div className="c-txt">
        <div className="project-data-container" id="project-data-container">
          <div className="project-title-section" id="title-description-section">
            <p className="project-title">Project Name:</p>
            <p className="project-title-text">Videos-Gallery-Freelance</p>
          </div>
          <div className="project-description-section">
            <p className="description-title">Description:</p>
            <p className="description-text">
              A frontend project featuring an immersive video gallery with
              autoplay functionality, providing users with a seamless experience
              to preview and enlarge videos with a single click. .`,
            </p>
          </div>

        
       
      </div>

      <div id="mid"></div>
       
      <div id="tech-demo">
          <div id="demo">
          <Link to={demo}>
          <FaGlobe id="web"/>
          </Link>
          <Link to={glink}><FaGithub id="git" /></Link>
        </div>

          <div id="tools">
          <span>
            <FaHtml5 className="icon" />
          </span>
          <span>
            {" "}
            <FaCss3Alt className="icon" />{" "}
          </span>
          <span>
            <IoLogoJavascript className="icon" />{" "}
          </span>
          <span>
            <BiLogoTypescript className="icon" />
          </span>
          <span>
            {" "}
            <FaReact className="icon" />
          </span>
        
        </div> 
          </div>

      </div>
    </div>
  );
}
export default Card;