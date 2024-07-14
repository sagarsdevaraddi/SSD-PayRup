import "./App.css";
import { useEffect } from "react";
import { AboutMe } from "./components/AboutMe";
// import { Banner } from "./components/Banner";
import { CompaniesLogos } from "./components/CompaniesLogos";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { IntroSection } from "./components/IntroSection";
import { Navbar } from "./components/Navbar";
import { ProjectsSection } from "./components/ProjectsSection";
import { ResumeSection } from "./components/ResumeSection";
import { ServicesSection } from "./components/ServicesSection";
import { SkillsSection } from "./components/SkillsSection";
import { ContactForm } from "./components/ContactForm";



function App() {
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        let navbar = document.querySelector("#navbar");
        if (window.scrollY > 50) {
          navbar?.classList.add("nav-colored");
        } else {
          navbar?.classList.remove("nav-colored");
        }
      },
      []
    );
  });

  return (
    <div className="App">
      <div className="container">
     
          <Navbar />
          <AboutMe />
         
          {/* <FeaturesSection />
          <IntroSection />
          <ResumeSection />
          <SkillsSection />
          <ProjectsSection />
          <ServicesSection />
          <Footer /> */}
      </div>
    </div>
  );
}

export default App;
