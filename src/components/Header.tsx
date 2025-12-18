import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, PhoneCall } from 'lucide-react' // Removed Shield, Key
import Button from './Button'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Quem Somos', path: '/quem-somos' },
    { name: 'Áreas de Atuação', path: '/areas-de-atuacao' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Calculadora', path: '/calculadora' },
    { name: 'Contato', path: '/contato' },
  ]

  const Logo = () => (
    <Link to="/" className="flex items-center py-1"> {/* Adjusted padding for logo */}
      <img src="/crispimn-logo.svg" alt="CRISPIMN Logo" className="h-10 md:h-12 w-auto" /> {/* Adjust size as needed */}
    </Link>
  )

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-subtle py-3' : 'bg-white py-4'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-inter text-primary-dark hover:text-gold transition-colors duration-300 relative group ${
                  isActive ? 'font-semibold text-gold' : ''
                }`
              }
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </NavLink>
          ))}
          <Button as={Link} to="/contato" className="ml-4">
            Solicitar Orçamento
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <Button as={Link} to="/contato" className="mr-4 text-sm px-4 py-2">
            <PhoneCall size={16} className="mr-2" /> Orçamento
          </Button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-primary-dark focus:outline-none">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-primary-dark bg-opacity-95 flex flex-col items-center justify-center z-40 animate-fade-in">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-white focus:outline-none">
            <X size={32} />
          </button>
          <nav className="flex flex-col space-y-6 text-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `font-montserrat text-2xl text-white hover:text-gold transition-colors duration-300 ${
                    isActive ? 'font-bold text-gold' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Button as={Link} to="/contato" onClick={() => setIsMenuOpen(false)} className="mt-8 text-lg px-8 py-4">
              Solicitar Orçamento
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
