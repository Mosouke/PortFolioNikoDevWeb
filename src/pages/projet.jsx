import { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import './style.css';
import Article from '../components/article_projet';

export default function Projet() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('/mocks/apiProjet.json'); // Assurez-vous que ce chemin est correct
      if (!response.ok) {
        throw new Error('Failed to fetch projet data');
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching projet data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <header>
        <Header />
      </header>
      <main className='projet container1440'>
        <div className="title">
          <h1>Projets</h1>
        </div>
        <section className='article-section'>
          <Article data={data} />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
