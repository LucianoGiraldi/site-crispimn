import React, { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react'

const Contato: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    subject: '',
    message: '',
    lgpdConsent: false,
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to a backend API.
    // For this example, we'll just log it and show a success message.
    console.log('Formulário de Contato Enviado:', formData)
    setIsSubmitted(true)
    // Reset form after a short delay or on user action
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        state: '',
        subject: '',
        message: '',
        lgpdConsent: false,
      })
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div className="pt-24 container mx-auto px-6 py-16">
      <h1 className="font-montserrat text-4xl font-extrabold text-primary text-center mb-12 animate-fade-in-up">
        Fale Conosco
      </h1>
      <p className="font-inter text-lg text-primary-dark text-center max-w-3xl mx-auto mb-16 animate-fade-in-up delay-100">
        Estamos prontos para entender suas necessidades e oferecer a melhor solução em perícia e consultoria financeira.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <Card className="p-8 animate-fade-in-up delay-200">
          <h2 className="font-montserrat text-2xl font-bold text-primary mb-6">Envie sua Mensagem</h2>
          {isSubmitted ? (
            <div className="text-center py-10 text-green-600">
              <CheckCircle size={64} className="mx-auto mb-4" />
              <p className="font-montserrat text-xl font-semibold">Mensagem enviada com sucesso!</p>
              <p className="font-inter text-primary-dark mt-2">Em breve entraremos em contato.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-primary-dark text-sm font-medium mb-2">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-silver rounded-lg focus:ring-gold focus:border-gold transition-all duration-200 font-inter text-primary-dark"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-primary-dark text-sm font-medium mb-2">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-silver rounded-lg focus:ring-gold focus:border-gold transition-all duration-200 font-inter text-primary-dark"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-primary-dark text-sm font-medium mb-2">Telefone / WhatsApp</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full p-3 border border-silver rounded-lg focus:ring-gold focus:border-gold transition-all duration-200 font-inter text-primary-dark"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(XX) XXXXX-XXXX"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="city" className="block text-primary-dark text-sm font-medium mb-2">Cidade</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="w-full p-3 border border-silver rounded-lg focus:ring-gold focus:border-gold transition-all duration-200 font-inter text-primary-dark"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-primary-dark text-sm font-medium mb-2">Estado (UF)</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    className="w-full p-3 border border-silver rounded-lg focus:ring-gold focus:border-gold transition-all duration-200 font-inter text-primary-dark"
                    value={formData.state}
                    onChange={handleChange}
                    maxLength={2}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-primary-dark text-sm font-medium mb-2">Assunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full p-3 border border-silver rounded-lg focus:ring-gold focus:border-gold transition-all duration-200 font-inter text-primary-dark"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-primary-dark text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full p-3 border border-silver rounded-lg focus:ring-gold focus:border-gold transition-all duration-200 font-inter text-primary-dark"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="lgpdConsent"
                  name="lgpdConsent"
                  className="h-4 w-4 text-gold rounded border-silver focus:ring-gold"
                  checked={formData.lgpdConsent}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="lgpdConsent" className="ml-2 block text-primary-dark text-sm">
                  Concordo com o tratamento dos meus dados pessoais conforme a <a href="/politica-de-privacidade" className="text-gold hover:underline">Política de Privacidade</a>.
                </label>
              </div>
              <Button type="submit" className="w-full" size="lg">
                Enviar Mensagem
              </Button>
            </form>
          )}
        </Card>

        {/* Contact Info */}
        <Card className="p-8 animate-fade-in-up delay-300">
          <h2 className="font-montserrat text-2xl font-bold text-primary mb-6">Informações de Contato</h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <Mail size={24} className="text-gold mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-montserrat text-lg font-semibold text-primary mb-1">E-mail</h3>
                <p className="font-inter text-primary-dark">
                  <a href="mailto:[SEU_EMAIL]" className="hover:text-gold transition-colors duration-300">[SEU_EMAIL]</a>
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone size={24} className="text-gold mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-montserrat text-lg font-semibold text-primary mb-1">Telefone / WhatsApp</h3>
                <p className="font-inter text-primary-dark">
                  <a href="tel:[SEU_TELEFONE]" className="hover:text-gold transition-colors duration-300">[SEU_TELEFONE]</a>
                </p>
                <p className="font-inter text-primary-dark">
                  <a href="https://wa.me/[SEU_NUMERO_WHATSAPP]" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-300">Falar no WhatsApp</a>
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin size={24} className="text-gold mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-montserrat text-lg font-semibold text-primary mb-1">Endereço</h3>
                <p className="font-inter text-primary-dark">[Seu Endereço Completo]</p>
                <p className="font-inter text-primary-dark">[Cidade, Estado, CEP]</p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock size={24} className="text-gold mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-montserrat text-lg font-semibold text-primary mb-1">Horário de Atendimento</h3>
                <p className="font-inter text-primary-dark">[Horário de Atendimento]</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Contato
