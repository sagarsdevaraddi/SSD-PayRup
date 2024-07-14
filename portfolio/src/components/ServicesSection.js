



export function ServicesSection(){


    return(
        <div>
          <section id="services-section">
        <div style={{margin:'10vh'}} className="section-header">
         <h5>What I Do</h5>
         <h3>How I can help your next project</h3>
        </div>
        <div className="services-div">
         <div className="services-items">
           <div className="icon"><i className="fa fa-laptop"></i></div>
         
             <div className="icon-details">
              <div><a>Web Design and Development</a></div> 
             </div>
               
        
         </div>
         <div className="services-items">
           <div className="icon"><i className="fa fa-mobile"></i></div>
           <div className="icon-details">
             <div><a>Mobile app  development</a></div> 
           </div>
         </div>
         <div className="services-items">
           <div className="icon"><i className="fa fa-android"></i></div>
           <div className="icon-details">
             <div><a>Android app
               development</a></div> 
           </div>
         </div>
       
         <div className="services-items">
           <div className="icon"><i className="fa fa-code"></i></div>
           <div className="icon-details">
             <div><a>JQuery & Java
               programming</a></div> 
           </div>
         </div>
         
         <div className="services-items">
           <div className="icon"><i className="fa fa-cloud"></i></div>
           <div className="icon-details">
             <div><a>Cloud Services and solutions</a></div> 
           </div>
         </div>
        </div>
        <div>
        </div>
    </section>  
        </div>
    )
}