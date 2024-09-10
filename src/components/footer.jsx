import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <>
            <div className="contact">
                <div className="title container1024">
                    <h2>Contact</h2>
                </div>
                <div className="social">
                    <Link className="colorbtn1" to="https://github.com/Mosouke">
                        <h3>GitHub</h3>
                        <i className="fa-brands fa-github"></i>
                    </Link>
                    <Link className="colorbtn2" to="https://www.linkedin.com/in/barboux-nicolas-129225324/">
                        <h3>LinkedIn</h3>
                        <i className="fa-brands fa-linkedin"></i>
                    </Link>
                    <Link className="colorbtn3" to="#">
                        <h3>FaceBook</h3>
                        <i className="fa-brands fa-facebook"></i>
                    </Link>
                </div>
                <div className="email">
                    <Link to={"mailto:nikodevweb@gmail.com"}>
                        <p>Merci de me contacter par e-mail ici</p>
                        <i className="fa-solid fa-envelope"></i>
                    </Link>
                </div>
            </div>
            <div className="copyright">
                <p>© Copyrigt 2024 - Niko Dev Web. Tous drois réservés.</p>
            </div>
        </>
    )
}