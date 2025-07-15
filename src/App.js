// App.js
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Classes from "./classes";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import "./App.css";

function App() {
  return (
    
      <div className="app-container">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    
  );
}

export default App; 
