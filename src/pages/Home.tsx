import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'
import { ShieldCheck, FlaskConical, Clock, Scale, Briefcase, Banknote, Calculator, Users, Building2, Handshake, Lightbulb } from 'lucide-react'

const Home: React.FC = () => {
  const credibilityProofs = [
    { icon: ShieldCheck, title: 'Confidencialidade e ética', description: 'Garantimos a máxima discrição e integridade em todos os processos.' },
    { icon: FlaskConical, title: 'Metodologia e rastreabilidade', description: 'Cálculos transparentes e auditáveis, com base em normas e jurisprudência.' },
    { icon: Clock, title: 'Prazos e comunicação clara', description: 'Compromisso com a pontualidade e feedback constante sobre o andamento.' },
    { icon: Scale, title: 'Atuação judicial e extrajudicial', description: 'Suporte completo em todas as fases do processo ou negociação.' },
  ]

  const featuredServices = [
    { icon: Briefcase, title: 'Perícia Judicial e Extrajudicial', description: 'Análise técnica aprofundada para processos e acordos.', link: '/servicos' },
    { icon: Users, title: 'Assistência Técnica para Advogados', description: 'Elaboração de quesitos, impugnações e pareceres.', link: '/servicos' },
    { icon: Banknote, title: 'Cálculos Trabalhistas e Bancários', description: 'Liquidação de sentenças, revisão de contratos e encargos.', link: '/servicos' },
    { icon: Building2, title: 'Apuração de Haveres e Análises Patrimoniais', description: 'Avaliação de participações societárias e bens.', link: '/servicos' },
  ]

  const howItWorksSteps = [
    { icon: Handshake, title: '1. Entendimento e Documentação', description: 'Analisamos o caso, coletamos documentos e definimos o escopo do trabalho.' },
    { icon: FlaskConical, title: '2. Metodologia e Cálculos', description: 'Aplicamos a metodologia adequada, realizamos os cálculos e validamos os resultados.' },
    { icon: Lightbulb, title: '3. Entrega e Suporte', description: 'Entregamos o laudo/parecer completo e oferecemos suporte técnico contínuo.' },
  ]

  return (
    <div className="pt-24"> {/* Adjust padding to account for fixed header */}
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-32 relative overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Profissionais analisando documentos financeiros"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="font-montserrat text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Perícia Financeira e Cálculos Técnicos com Rigor e Clareza
          </h1>
          <p className="font-inter text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90 animate-fade-in-up delay-200">
            Apoio técnico especializado para advogados e empresas: laudos, pareceres e cálculos com metodologia, confidencialidade e precisão.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-400">
            <Button as="a" href="https://wa.me/[SEU_NUMERO_WHATSAPP]" target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
              Falar no WhatsApp
            </Button>
            <Button as={Link} to="/contato" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>

      {/* Credibility Proofs */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-6">
          <h2 className="font-montserrat text-3xl font-bold text-center mb-12 text-primary">Nossos Pilares de Confiança</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {credibilityProofs.map((proof, index) => (
              <Card key={index} className="text-center flex flex-col items-center p-8 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <proof.icon size={48} className="text-gold mb-4" strokeWidth={1.5} />
                <h3 className="font-montserrat text-xl font-semibold mb-2 text-primary">{proof.title}</h3>
                <p className="font-inter text-silver text-sm">{proof.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-montserrat text-3xl font-bold text-center mb-12 text-primary">Serviços em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <Card key={index} interactive onClick={() => { /* navigate to service.link */ }} className="p-8 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <service.icon size={40} className="text-primary-dark mb-4" strokeWidth={1.5} />
                <h3 className="font-montserrat text-xl font-semibold mb-2 text-primary">{service.title}</h3>
                <p className="font-inter text-silver text-sm">{service.description}</p>
                <Link to={service.link} className="mt-4 inline-flex items-center text-gold hover:underline text-sm">
                  Saiba Mais <span className="ml-1">&rarr;</span>
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button as={Link} to="/servicos" variant="secondary" size="lg">
              Ver Todos os Serviços
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-6">
          <h2 className="font-montserrat text-3xl font-bold text-center mb-12 text-primary">Como Funciona Nosso Processo</h2>
          <div className="relative flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-12 lg:space-y-0 lg:space-x-8">
            {/* Timeline Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-primary-steel transform -translate-y-1/2 z-0"></div>
            {/* Timeline Line (Mobile) */}
            <div className="lg:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-primary-steel transform -translate-x-1/2 z-0"></div>

            {howItWorksSteps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center max-w-sm animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <step.icon size={32} className="text-white" strokeWidth={2} />
                </div>
                <h3 className="font-montserrat text-xl font-semibold mb-2 text-primary">{step.title}</h3>
                <p className="font-inter text-silver text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-montserrat text-3xl font-bold mb-6 text-primary">Para Quem é a CRISPIMN?</h2>
          <p className="font-inter text-lg max-w-3xl mx-auto text-primary-dark mb-10">
            Nosso apoio técnico é essencial para advogados e empresas que atuam em diversas áreas do direito, buscando precisão e fundamentação em seus casos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <h3 className="font-montserrat text-xl font-semibold mb-2 text-primary">Advogados</h3>
              <p className="font-inter text-silver text-sm">
                Especialistas em Direito Trabalhista, Cível, Bancário, Empresarial, Tributário e outras áreas que demandam cálculos e pareceres técnicos.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-montserrat text-xl font-semibold mb-2 text-primary">Empresas</h3>
              <p className="font-inter text-silver text-sm">
                Que necessitam de análises financeiras, apuração de haveres, revisão de contratos ou suporte em litígios.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-montserrat text-xl font-semibold mb-2 text-primary">Contadores e Auditores</h3>
              <p className="font-inter text-silver text-sm">
                Em busca de validação independente ou suporte em casos complexos que exigem perícia especializada.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="bg-primary-dark text-white py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="font-montserrat text-3xl font-bold mb-4">
              Precisa estimar rapidamente o valor de tributos ou encargos?
            </h2>
            <p className="font-inter text-lg opacity-90">
              Use nossa calculadora interativa e gere um demonstrativo detalhado para seus clientes.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <Button as={Link} to="/calculadora" variant="primary" size="lg" className="flex items-center">
              <Calculator size={24} className="mr-2" /> Acessar Calculadora
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials (Placeholder) */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-montserrat text-3xl font-bold mb-12 text-primary">O Que Nossos Clientes Dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-left">
              <p className="font-inter text-primary-dark italic mb-4">
                "A Crispimn foi fundamental para o sucesso do nosso caso. A precisão dos cálculos e a clareza do laudo técnico foram impecáveis."
              </p>
              <p className="font-montserrat font-semibold text-primary">- Advogado(a) S.A.</p>
              <p className="font-inter text-silver text-sm">Escritório de Advocacia [Nome]</p>
            </Card>
            <Card className="p-8 text-left">
              <p className="font-inter text-primary-dark italic mb-4">
                "Profissionalismo e agilidade. A equipe da Crispimn superou nossas expectativas na apuração de haveres da empresa."
              </p>
              <p className="font-montserrat font-semibold text-primary">- Diretor(a) Financeiro(a) J.P.</p>
              <p className="font-inter text-silver text-sm">Empresa [Nome]</p>
            </Card>
          </div>
          <div className="mt-12">
            <Button as={Link} to="/contato" variant="primary" size="lg">
              Fale Conosco
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
