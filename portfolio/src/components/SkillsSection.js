import java from '../images/icons/java.png'
import javascript from '../images/icons/javascript.png'
import css from '../images/icons/css.png'
import scss from '../images/icons/scss.png'
import html from '../images/icons/html.png'
import mysql from '../images/icons/mysql.png'
import nextjs from '../images/icons/nextjs.png'
import reactjs from '../images/icons/reactjs.png'
import nestjs from '../images/icons/nestjs.png'
import springboot from '../images/icons/springboot.png'
import jdbcservlet from '../images/icons/jdbcservelet.png'




export function SkillsSection(){

    return(
        <div>
             <section  id="skills-section">
                  <div id="skills-div">
                    <div className="section-header">
                  
                      <h5>Skills</h5>
                      <h3>My Expertise Area</h3>
                    </div>
                    <div className="skills-items">
                    <div className="skills-container1">
                      <h6><img className='skills-icons' src={java}></img>Java</h6>
                      
                      <h6><img className='skills-icons' src={javascript}></img>Javascript</h6>
                      
                      
                      <h6><img className='skills-icons' src={html}></img>HTML</h6>
                      <h6><img className='skills-icons' src={css}></img><img style={{maxWidth:"35%"}} src={scss}></img>CSS and SCSS</h6>
                      <h6><img style={{maxWidth:"35%"}} src={reactjs}></img>Reactjs</h6>
                    </div>
                    <div className="skills-container2">
                    <h6><img className='skills-icons' src={mysql}></img>MySQL</h6>
                      <h6><img className='skills-icons' src={nestjs}></img>NestJs</h6>
                      <h6><img className='skills-icons' src={springboot}></img>SpringBoot</h6>
                     
                      <h6><img className='skills-icons' src={jdbcservlet}></img>JDBC and Servlet</h6>
                      <h6><img className='skills-icons' src={nextjs}></img>Nextjs</h6>
                    </div>
                    </div>
                  </div>
       </section>
        </div>
    )
}