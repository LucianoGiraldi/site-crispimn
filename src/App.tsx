import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import QuemSomos from './pages/QuemSomos'
import AreasAtuacao from './pages/AreasAtuacao'
import Servicos from './pages/Servicos'
import Calculadora from './pages/Calculadora'
import Contato from './pages/Contato'
import PoliticaPrivacidade from './pages/PoliticaPrivacidade'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/areas-de-atuacao" element={<AreasAtuacao />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
