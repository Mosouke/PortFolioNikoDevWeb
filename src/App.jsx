import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Accueil from './pages/accueil';
import Projet from './pages/projet';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />}/>
        <Route path="/projet" element={<Projet />} />
      </Routes>
    </Router>
  );
}
