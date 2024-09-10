import Footer from '../components/footer.jsx'
import Header from '../components/header.jsx'
import Carousel from '../components/carousel.jsx'
import './accueil.css'
import Img from '../images/image-section-1_num_2.webp'

export default function Accueil() {
  return (
    <>
        <header>
            <Header />
        </header>
        <main>
            <section className='presentation'>
                <div className='container1440' id='presentation'>
                    <div >
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
                <div className="competenceL container1024">
                    <article className="card">
                    <i className="fa-brands fa-react"></i>
                        <h3>REACT</h3>
                    </article>
                    <article className="card">
                        <i className="fa-brands fa-html5"></i>
                        <h3>HTML</h3>
                    </article>
                    <article className="card">
                        <i className="fa-brands fa-css3-alt"></i>
                        <h3>CSS</h3>
                    </article>
                    <article className="card">
                        <i className="fa-brands fa-js"></i>
                        <h3>JAVASCRIPT</h3>
                    </article>
                    <article className="card">
                        <i className="fa-brands fa-php"></i>
                        <h3>PHP</h3>
                    </article>
                    <article className="card">
                        <i className="fa-solid fa-database"></i>
                        <h3>MySQL</h3>
                    </article>
                    <article className="card">
                        <i className="fa-brands fa-sass"></i>
                        <h3>SASS</h3>
                    </article>
                    <article className="card">
                        <i className="fa-brands fa-figma"></i>
                        <h3>FIGMA</h3>
                    </article>
                    <article className="card">
                        <i className="fa-brands fa-node-js"></i>
                        <h3>NodeJS</h3>
                    </article>
                    <article className="card">
                        <i className="fa-brands fa-python"></i>
                        <h3>PYTHON</h3>
                    </article>
                </div>
            </section>
            <section className='projet'>
                <Carousel />
            </section>
            <section className='citation'>
                <div id='citation'>
                    <i className="fa-solid fa-quote-left"></i>
                    <h2>A website is never really finished, it's just waiting for the next iteration.</h2>
                    <i className="fa-solid fa-quote-right"></i>
                </div>
            </section>
        </main>
        <footer className='container1920' id='footer'>
            <Footer />
        </footer>
    </>
  )
}