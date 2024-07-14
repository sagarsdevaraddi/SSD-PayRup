import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContactForm } from './components/ContactForm';
import { AboutMe } from './components/AboutMe';
import { FeaturesSection } from './components/FeaturesSection';
import { IntroSection } from './components/IntroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <BrowserRouter>
  
 

  </BrowserRouter>

   <BrowserRouter>
     <Navbar/>

     <Routes>
       <Route path='/' element={<App/>}/>
       <Route path="contact" element={<ContactForm />} />
       <Route path="aboutme" element={<AboutMe />} />
      
       <Route path="featuressection" element={<FeaturesSection/>} />
       <Route path="introsection" element={<IntroSection/>} />
       
       <Route path="projectssection" element={<ProjectsSection/>} />
       <Route path="servicessection" element={<ServicesSection/>} />
       <Route path="skillssection" element={<SkillsSection />} />
     
     </Routes>
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
