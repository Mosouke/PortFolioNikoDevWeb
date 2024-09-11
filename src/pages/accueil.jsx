import React, { useState, useEffect } from 'react';
import Footer from '../components/footer.jsx';
import Header from '../components/header.jsx';
import Carousel from '../components/carousel.jsx';
import Skills from '../components/skills.jsx'; 
import './style.css';
import Img from '../images/image-section-1_num_2.webp';
import { Link } from 'react-router-dom';

export default function Accueil() {
    const [skillsData, setSkillsData] = useState([]);
    const [carouselData, setCarouselData] = useState([]);

   
    const fetchDataSkills = async () => {
        try {
            const response = await fetch('/mocks/skills.json');
            if (!response.ok) {
                throw new Error('Failed to fetch skills data');
            }
            const data = await response.json();
            setSkillsData(data);
        } catch (error) {
            console.error('Error fetching skills data:', error);
        }
    };

  
    const fetchDataCarousel = async () => {
        try {
            const response = await fetch('/mocks/apiCarousel.json');
            if (!response.ok) {
                throw new Error('Failed to fetch carousel data');
            }
            const data = await response.json();
            setCarouselData(data);
        } catch (error) {
            console.error('Error fetching carousel data:', error);
        }
    };

    useEffect(() => {
        fetchDataSkills();
        fetchDataCarousel();
    }, []); 

    return (
        <>
            <Header />
            <main>
                <section className='presentation'>
                    <div className='container1440' id='presentation'>
                        <div>
                            <h1><span>Salut le Monde ! Moi c'est</span> Niko Dev Web</h1>
                            <h2><span>Développeur Web</span> en formation. Je me forme pour aider les startups à <span>Créer</span> et <span>Améliorer </span>leurs produits.</h2>
                            <p>Je suis un développeur web en reconversion professionnelle avec une solide formation en développement. Actuellement en cours de formation, je développe des compétences variées pour créer et optimiser des sites web. Reconnu pour ma capacité à ne rien lâcher et à m'adapter aux nouvelles technologies, je m'efforce d'apporter des solutions efficaces et innovantes tout en respectant les délais et les objectifs du projet.</p>
                        </div>
                        <img src={Img} alt="image de la section de présentation" />
                    </div>
                    <span id='competences'></span>
                </section>
                
                <section className='competences'>
                    <div className='title'>
                        <h2><span>Language</span> de <span>Programmation</span></h2>
                    </div>
                    <Skills skillsData={skillsData} />
                </section>
                
                <section className='projet'>
                    <div className='title'>
                        <h2><span>Projets réalisés </span>en <span>Formation</span></h2>
                    </div>
                    <Carousel carouselData={carouselData} /> 
                    <Link to="/projet">Détails de tout les projets</Link >
                </section>
                
                <section className='citation'>
                    <div id='citation'>
                        <i className="fa-solid fa-quote-left"></i>
                        <h2>A website is never really finished, it's just waiting for the next iteration.</h2>
                        <i className="fa-solid fa-quote-right"></i>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
