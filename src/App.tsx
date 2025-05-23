import Home from "./components/Home";
import Nav from "./components/Nav";
import {Routes, Route} from "react-router-dom";
import Project from "./components/Project";
import Contact from "./components/Contact";
const App = () => {
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