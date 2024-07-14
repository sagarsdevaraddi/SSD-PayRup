
import ssd from "../files/ssd.pdf"

export function IntroSection(){
    return(
        <div>
            <section id="intro-section">
    <div id="my-intro-container">
     
      <div id="about-me">
            <h5>MY INTRO</h5>
            <h3>About Me</h3>
<p>Hi, I'm Sagar S D, a recent graduate in EEE, specializing in full-stack development. Proficient in HTML, CSS, JavaScript, Java, React.js,Next.js,  Node.js and Nest.js, I'm passionate about crafting intuitive user experiences. Eager to contribute, learn, and grow in the dynamic world of software development. Outside of coding, I enjoy outdoor adventures and tech meetups.</p>            <div id="about-lists">

              <ul>
                <li>Name</li>
                <li className="colon-style">:</li>
                <li>Sagar</li>
              </ul>
              <ul>
                <li>Age</li>
                <li className="colon-style">:</li>
                <li>22</li>
              </ul>
              <ul>
                <li>From</li>
                <li className="colon-style">:</li>
                <li>Dharwad,Karnataka,INDIA</li>
              </ul>
              <ul>
                <li>Email</li>
                <li className="colon-style">:</li>
                <li> <a href="mailto:sagardevaraddi@gmail.com">sagardevaraddi@gmail.com</a></li>
              </ul>
            </div>
            <button ><a className="dcv" href={ssd}>Download CV</a></button>
      </div>
    </div>
  </section>
        </div>
    )
}