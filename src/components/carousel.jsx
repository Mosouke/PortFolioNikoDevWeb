import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Carousel({ carouselData }) { 

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
    };

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft') {
            handlePrev();
        } else if (event.key === 'ArrowRight') {
            handleNext();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [carouselData]); // Le tableau de dépendances inclut carouselData

    if (carouselData.length === 0) {
        return <p>Loading carousel...</p>;
    }

    const currentImage = carouselData[currentIndex].img;

    return (
        <div
            className="carouselcard container1920"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${currentImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='container'>
                <div className="arrow_left" onClick={handlePrev}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <div className="card">
                    <img src={currentImage} alt={carouselData[currentIndex].alt} />
                    <h3>{carouselData[currentIndex].title}</h3>
                    <p>{carouselData[currentIndex].description}</p>
                    <p className='tech'>{carouselData[currentIndex].tech}</p>
                </div>
                <div className="arrow_right" onClick={handleNext}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        </div>
    );
}
