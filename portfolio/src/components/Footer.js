import footerLogo from '../images/logo.png'




export default function Footer(){
    return(
        <footer>
        <div id="footer-section">
          <div id="footer-logo"><img src={footerLogo} alt=""/></div>
          <div></div>
          <div className="footer-icons">
           <div><i  className="fa fa-facebook"></i></div>
           <div><i className="fa fa-instagram"></i></div>
           <div><i className="fa fa-twitter"></i></div>
           <div><i className="fa fa-dribbble"></i></div>
           <div><i className="fa fa-linkedin"></i></div>
          </div>
          <p className="h-line"></p>
          <p className='copyright' style={{color:" #fff;",fontSize: "14px !important;",margin: "5px;"}}>© 2021 Biodata. All rights reserved</p>

        </div>
        </footer>
    )
}