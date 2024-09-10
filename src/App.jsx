import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Accueil from './page/accueil.jsx'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
    </Router>
  )
}