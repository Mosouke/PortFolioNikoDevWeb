import { Link } from "react-router-dom";
import './styleError.css';

export default function ErrorPage404() {
    return (
        <div className="container1440 error404">
            <h1>404 - Page non trouvée</h1>
            <div>
                <p> Désolé, la page que vous cherchez n'existe pas ou à été déplacée.</p>
            </div>
            <img src="/error404.webp" alt="404 - Page non trouvée" />
            <div>
                <Link to="/">Retour à l'accueil</Link>
            </div>
        </div>
    )
}