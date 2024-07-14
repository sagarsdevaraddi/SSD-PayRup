import idea from '../images/idea.png'
import layer from '../images/layer.png'
import coding from '../images/coding.png'

export function FeaturesSection(){
    return(
        <div>
            <section id="features-section">
            <div className='headers'>


            <h5>MY SERVICE</h5>
            <h3>Features</h3>
            </div>
    <div id="features-div">
   
          
            <div id="features">
                  
                   <div id="feature-cards">

                     <div className="card">
                      <div className="card-content">
                             <div className="icon-style">
                              <img src={idea}></img>
                             </div>
                             <div className="card-links">

                               <a href="">Creative Design</a>
                               <a className="exp-small" href="">Explore More➡️</a>
                             </div>
                      </div>
                     </div>
                     <div className="card">
                      <div className="card-content">
                        <div className="icon-style">
                          <img src={coding}></img>
                         </div>
                        <div className="card-links">

                          <a href="">Web Design</a>
                          <a className="exp-small" href="">Explore More➡️</a>
                        </div>

                      </div>
                     </div>
                     <div className="card">
                      <div className="card-content">
                        <div className="icon-style">
                          <img src={layer}></img>
                         </div>
                         <div className="card-links">

                           <a href="">Brand Identity</a>
                           <a className="exp-small" href="">Explore More➡️</a>
                         </div>
                      </div>
                     </div>
                   </div>
            </div>
            
    </div>
  </section>
        </div>
    )
}