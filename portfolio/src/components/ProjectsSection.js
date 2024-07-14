import g1 from '../images/g1.png'
import g2 from '../images/g2.png'
import g3 from '../images/g3.png'
import g4 from '../images/g4.png'
import g5 from '../images/g5.png'
// import g6 from '../images/g6.png'

export function ProjectsSection(){
    return(
        <div>

        <section style={{margin:'5vh'}} id="projects-section">
        <div id="projects-div">
           <div className="section-header">
            <h5>Projects</h5>
            <h3 style={{marginBottom:'4vh'}}>My Recent Projects</h3>
           </div>
    
           <div className="projects-items">
            
            <div className='project-img'>

           <img src={g1} alt=""/ >
           <p><a href='https://shopping-cart-appp.netlify.app'>Shopping List Cart App</a></p>

            </div>
        
             
            <div className='project-img'>
             <img src={g2} alt="" />
             <p><a href='https://restaurant-menu-react-app-ssd.netlify.app'>Restaurant Menu Card App</a></p>
             </div>

             <div className='project-img'>
             <img src={g3} alt="" />
             <p><a href='https://todo-react-app-ssd.netlify.app'>To Do React App</a></p>
             </div>

             <div className='project-img'>
             <img src={g4} alt=""/>
             <p><a href='https://random-color-generator-app-ssd.netlify.app'>Random Color generator</a></p>
             </div>

             <div className='project-img'>
             <img src={g5} alt="" />
             <p><a href='https://image-search-app-unsplash-api.netlify.app'>Image Search App</a></p>
             </div>

             {/* <img src={g6} alt="" /> */}
           </div>
        </div>
       </section>
        </div>
    
    )
   
}