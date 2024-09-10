import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import logo from '../images/logo.webp';

export default function Header() {
    const smouth = true;
    const duration = 500;

    return (
       <div className="container1440">
          
           <RouterLink to="/"><img src={logo} alt="logo du site Niko Dev Web" /></RouterLink>
           
           <nav>
               <ul>
                  
                   <li><RouterLink to="/" >Accueil</RouterLink></li>
                   <li><ScrollLink to="competences" smooth={smouth} duration={duration}>Compétences</ScrollLink></li>
                   <li><ScrollLink to="projet" smooth={smouth} duration={duration}>Projet</ScrollLink></li>
                   <li><ScrollLink to="footer" smooth={smouth} duration={duration}>Contact</ScrollLink></li>
               </ul>
           </nav>
           <i className="fa-solid fa-bars burger"></i>
       </div> 
    )
}
