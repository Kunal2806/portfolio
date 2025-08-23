import Home from "./components/Home";
import Nav from "./components/Nav";
import {Routes, Route} from "react-router-dom";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // Add structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Kunal Goswami",
      "jobTitle": "Full Stack Web Developer",
      "description": "Passionate Full Stack Web Developer specializing in React, Node.js, and modern web technologies",
      "url": "https://kunalgoswami.com",
      "sameAs": [
        "https://www.linkedin.com/in/kunal2806-dev/",
        "https://github.com/Kunal2806"
      ]
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="w-screen h-screen overflow-x-hidden bg-[#0B0D11] cursor-default">
      <Nav/>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
    </div>
  )
}

export default App;