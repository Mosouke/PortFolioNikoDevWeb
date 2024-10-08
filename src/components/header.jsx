import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import logo from '../images/logo.webp';
import { useEffect, useState } from "react";

export default function Header() {
    const smooth = true;
    const duration = 500;

    const [menuActive, setMenuActive] = useState(false); 

    const toggleMenu = () => {
        setMenuActive(!menuActive); 
    };

    const closeMenu = () => {
        setMenuActive(false); 
    };

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") {
                setMenuActive(false); 
            }
        };

        document.addEventListener("keydown", handleEsc);

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, []);

    const accueilLink = () => { 
        if (window.location.pathname === "/") {
            return (
                <ScrollLink to="up" smooth={smooth} duration={duration} onClick={closeMenu}>Accueil</ScrollLink>
         );
        } else {
            return (
                <RouterLink to = "/">Accueil</RouterLink>
            )
        }
    }

    return (
        <header>
            <div className="container1440">
                <RouterLink to="/"><img src={logo} alt="logo du site Niko Dev Web" /></RouterLink>

                <nav className={menuActive ? 'active' : ''}>
                    <ul>
                        <li>{accueilLink()}</li>
                        <li><ScrollLink to="competences" smooth={smooth} duration={duration} onClick={closeMenu}>Compétences</ScrollLink></li>
                        <li><ScrollLink to="projet" smooth={smooth} duration={duration} onClick={closeMenu}>Projet</ScrollLink></li>
                        <li><ScrollLink to="footer" smooth={smooth} duration={duration} onClick={closeMenu}>Contact</ScrollLink></li>
                    </ul>
                </nav>
                
                <i className="fa-solid fa-bars burger" onClick={toggleMenu}></i>
            </div> 
        </header>
    );
}
