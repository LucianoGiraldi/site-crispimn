import React from 'react'
import { Link } from 'react-router-dom'
// Removed Shield, Key imports

const Footer: React.FC = () => {
  const MonochromaticLogo = () => (
    <Link to="/" className="flex items-center py-1">
      <img src="/crispimn-logo-light.svg" alt="CRISPIMN Logo" className="h-10 md:h-12 w-auto" /> {/* Adjust size as needed */}
    </Link>
  )

  return (
    <footer className="bg-primary-dark text-white py-12 mt-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <MonochromaticLogo />
          <p className="mt-4 text-silver text-sm">
            CNPJ: 54.314.879/0001-75 <br />
            Cidade: [Sua Cidade/UF]
          </p>
        </div>

        <div className="col-span-1">
          <h4 className="font-montserrat text-lg font-semibold mb-4">Navegação</h4>
          <ul className="space-y-2 text-silver text-sm">
            <li><Link to="/" className="hover:text-gold transition-colors duration-300">Home</Link></li>
            <li><Link to="/quem-somos" className="hover:text-gold transition-colors duration-300">Quem Somos</Link></li>
            <li><Link to="/areas-de-atuacao" className="hover:text-gold transition-colors duration-300">Áreas de Atuação</Link></li>
            <li><Link to="/servicos" className="hover:text-gold transition-colors duration-300">Serviços</Link></li>
            <li><Link to="/calculadora" className="hover:text-gold transition-colors duration-300">Calculadora</Link></li>
            <li><Link to="/contato" className="hover:text-gold transition-colors duration-300">Contato</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-montserrat text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-silver text-sm">
            <li><Link to="/politica-de-privacidade" className="hover:text-gold transition-colors duration-300">Política de Privacidade</Link></li>
            <li><Link to="/politica-de-privacidade#lgpd" className="hover:text-gold transition-colors duration-300">LGPD</Link></li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-3 lg:col-span-1">
          <h4 className="font-montserrat text-lg font-semibold mb-4">Aviso Legal</h4>
          <p className="text-silver text-xs leading-relaxed">
            As simulações e informações contidas neste site são estimativas e não substituem a análise técnica aprofundada do caso concreto e a legislação aplicável. Consulte sempre um profissional.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-8 pt-8 border-t border-primary-steel text-center text-silver text-sm">
        <p>&copy; {new Date().getFullYear()} CRISPIMN — Consultoria & Perícia Financeira. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
