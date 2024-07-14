import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.png'
import logo5 from '../images/logo5.png'
export function CompaniesLogos(){

    return(
        <div>
                 <section id="companies-logo">
      <div><img src={logo1}  alt=""/></div>
      <div><img src={logo2} alt=""/></div>
      <div><img src={logo3} alt=""/></div>
      <div><img src={logo4} alt=""/></div>
      <div><img src={logo5} alt=""/></div>
       </section>
        </div>
    )
}