import Footer from '../components/footer';
import Header from '../components/header';
import './style.css'

export default function Projet() {
  return (
    <>
      <header>
          <Header />
      </header>
      <main className='projet container1440'>
          <div className="title">
            <h1>Projets</h1>
          </div>
      </main>
      <footer>
          <Footer />  
      </footer>
    </>
  );
}