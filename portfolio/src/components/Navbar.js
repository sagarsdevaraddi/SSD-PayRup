          
import logo from '../images/logo.png'

// import {useEffect} from 'react'
import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown"
// let [scrollState,setScrollState] = useState()



export function Navbar(){

         return(
            <nav >
        <div id="navbar" >
          <div id="logo"><img src={logo} alt=""/></div>
          <div id="nav-items">
         
            <Dropdown/>
          </div>
                     
       
        </div>
          
       </nav>
         )
}