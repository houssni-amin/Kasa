import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Propos from './pages/Propos'
import Logement from './pages/Logement'
import Footer from './components/Footer'
import Error from './pages/Error'
import './style.css'

// Racine de l'application, où le rendu React commence
const root = ReactDOM.createRoot(document.getElementById('root'))

// Rendu de l'application
root.render(
  <React.StrictMode>
    {/* Utilisation du Router pour gérer les routes de l'application */}
    <Router>
      <Header />
      <div className="content-body">
        {/* Configuration des routes avec le composant Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propos" element={<Propos />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>,
)
