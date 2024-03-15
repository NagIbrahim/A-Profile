import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Message from "./components/Message.js";
import Header from "./components/Header.js";


import  './app.css';

function App() {
  return (
   
      <Router>
      <div  className="app">
      <Header/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/message" element={<Message />} />

        </Routes>
      </div>
    </Router>
      
     

    
   
  );
}

export default App;
