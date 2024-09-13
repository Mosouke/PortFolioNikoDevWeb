import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Accueil from './pages/accueil';
import Projet from './pages/projet';
import ErrorPage404 from './pages/errorpage404';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />}/>
        <Route path="/projet" element={<Projet />} />
        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
    </Router>
  );
}
