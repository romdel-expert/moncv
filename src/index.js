import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Accueil from  "./pages/Accueil";
import Competences from  "./pages/Competences";
import Experiences from  "./pages/Experiences";
import Formations from  "./pages/Formations";
import Hobbies from  "./pages/Hobbies";
import References from  "./pages/References";
import Contact from  "./pages/Contacts";
import Langues from  "./pages/Langues";
import NotMatch from  "./pages/NotMatch";

import "./App.css";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" exact element={<Accueil />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/references" element={<References />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/langues" element={<Langues />} />
        {/* <Route path="/linkedin" element={"https://www.linkedin.com/in/jeandelince-romelus"} /> */}
        <Route path="*" element={<NotMatch/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

