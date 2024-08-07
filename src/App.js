import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects.js";
import Message from "./components/Message.js";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.jsx";

import "./app.css";

function App() {

  return (
    <Router>
      <div style={{ height: "100vh" }} id="app" >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />      
      </div>
     
    </Router>
  );
}

export default App;
