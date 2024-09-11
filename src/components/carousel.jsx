import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import imageSectionGeniarthub from '../images/image_carousel/image-section-projet_Geniarthub.webp';
import imagePortfolio from '../images/image_carousel/projetIntegrationPortFolio.webp';
import imagePokedex from '../images/image_carousel/pokédexe_carousel.webp';
import imageOraculus from '../images/image_carousel/projet_oraculus.webp';
import imageHomeKey from '../images/image_carousel/projetHomeKey.webp';
import imageRCGraphics from '../images/image_carousel/projetRCGraphics.webp';
import imageTicTacToe from '../images/image_carousel/tic-tac-toe-projet.webp';

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const apiCarousel = [
        {
            id: 0,
            img: imageSectionGeniarthub,
            title: "Geniarthub",
            description: "Application E-commerce pour la vente d'images créées par IA à différents formats de photos",
            tech: "JavaScript et React"
        },
        {
            id: 1,
            img: imagePortfolio,
            title: "Portfolio",
            description: "Intégration en HTML/CSS d'un portfolio fictif pour ma formation",
            tech: "HTML/CSS"
        },
        {
            id: 2,
            img: imagePokedex,
            title: "Pokédexe",
            description: "Création d'un Pokédexe avec Python",
            tech: "Python"
        },
        {
            id: 3,
            img: imageOraculus,
            title: "Projet Oraculus",
            description: "Ajout de fonction en JavaScript pour le projet Oraculus",
            tech: "JavaScript et React"
        },
        {
            id: 4,
            img: imageHomeKey,
            title: "Projet HomeKey",
            description: "Intégration en HTML/CSS d'un site de location d'appartements",
            tech: "HTML/CSS"
        },
        {
            id: 5,
            img: imageRCGraphics,
            title: "Projet RCGraphics",
            description: "Intégration en HTML/CSS d'un graphiste qui vend des modèles 3D",
            tech: "HTML/CSS"
        },
        {
            id: 6,
            img: imageTicTacToe,
            title: "Tic-Tac-Toe",
            description: "Création d'un jeu de Tic-Tac-Toe en version PvP, PvIA mode facile et PvIA mode hardcore",
            tech: "HTML/CSS/JavaScript"
        },
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? apiCarousel.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === apiCarousel.length - 1 ? 0 : prevIndex + 1));
    };

    const currentImage = apiCarousel[currentIndex].img;

    return (
        <>
            <div className='title'>
            <h2><span>Projets réalisés </span>en <span>Formation</span></h2>

            </div>
            <div 
                className="carouselcard container1920" 
                style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${currentImage})` ,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className='container'>
                    <div className="arrow_left" onClick={handlePrev}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    <div className="card">
                        <img src={currentImage} alt={apiCarousel[currentIndex].title} />
                        <h3>{apiCarousel[currentIndex].title}</h3>
                        <p>{apiCarousel[currentIndex].description}</p>
                        <p className='tech'>{apiCarousel[currentIndex].tech}</p>
                    </div>
                    <div className="arrow_right" onClick={handleNext}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>
            </div>
        </>
    );
}
