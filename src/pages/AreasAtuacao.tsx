import React from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { Briefcase, Scale, Banknote, Building2, Landmark, Gavel } from 'lucide-react'

const AreasAtuacao: React.FC = () => {
  const areas = [
    {
      icon: Briefcase,
      title: 'Direito Trabalhista',
      description: 'Liquidações de sentenças, cálculos de horas extras, reflexos, adicionais, atualizações e juros. Análise de verbas rescisórias e indenizações.',
      examples: ['Cálculo de verbas rescisórias', 'Horas extras e adicionais', 'Diferenças salariais', 'Indenizações por acidente de trabalho'],
    },
    {
      icon: Scale,
      title: 'Direito Cível',
      description: 'Cálculos de indenizações por danos materiais e morais, lucros cessantes, atualização de valores, correção monetária e juros em diversas ações.',
      examples: ['Indenizações contratuais', 'Revisão de aluguéis', 'Cálculos de multas e juros', 'Atualização de dívidas'],
    },
    {
      icon: Banknote,
      title: 'Direito Bancário',
      description: 'Revisão de contratos bancários, apuração de juros abusivos, encargos financeiros, evolução de dívidas e saldo devedor em financiamentos e empréstimos.',
      examples: ['Revisão de juros em financiamentos', 'Cálculo de anatocismo', 'Apuração de saldo devedor', 'Revisão de contratos de leasing'],
    },
    {
      icon: Building2,
      title: 'Direito Empresarial',
      description: 'Apuração de haveres em dissolução societária, avaliação de participações, análises financeiras para fusões e aquisições, e cálculos em disputas comerciais.',
      examples: ['Apuração de haveres de sócios', 'Avaliação de empresas (valuation)', 'Cálculos em disputas contratuais', 'Análise de balanços'],
    },
    {
      icon: Landmark,
      title: 'Direito Tributário',
      description: 'Elaboração de memórias de cálculo e estimativas para ações de recuperação de tributos, revisão de lançamentos e planejamento tributário.',
      examples: ['Cálculo de restituição de impostos', 'Revisão de débitos fiscais', 'Estimativa de impacto tributário', 'Cálculos para ações de compensação'],
    },
    {
      icon: Gavel,
      title: 'Outras Áreas Jurídicas',
      description: 'Oferecemos suporte técnico em outras áreas que demandem cálculos financeiros e contábeis, adaptando nossa metodologia às especificidades de cada caso.',
      examples: ['Direito de Família (partilha de bens)', 'Direito Imobiliário (cálculos de correção)', 'Direito do Consumidor (revisão de dívidas)'],
    },
  ]

  return (
    <div className="pt-24 container mx-auto px-6 py-16">
      <h1 className="font-montserrat text-4xl font-extrabold text-primary text-center mb-12 animate-fade-in-up">
        Áreas de Atuação
      </h1>
      <p className="font-inter text-lg text-primary-dark text-center max-w-3xl mx-auto mb-16 animate-fade-in-up delay-100">
        Nossa expertise abrange um vasto leque de contextos jurídicos, oferecendo suporte técnico especializado para advogados e empresas em suas demandas mais complexas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {areas.map((area, index) => (
          <Card key={index} className="p-8 flex flex-col animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
            <area.icon size={48} className="text-primary-dark mb-6" strokeWidth={1.5} />
            <h2 className="font-montserrat text-2xl font-bold mb-4 text-primary">{area.title}</h2>
            <p className="font-inter text-primary-dark leading-relaxed mb-4 flex-grow">{area.description}</p>
            <div className="mb-6">
              <h3 className="font-montserrat text-lg font-semibold text-primary-steel mb-2">Exemplos de Atuação:</h3>
              <ul className="list-disc list-inside font-inter text-silver text-sm space-y-1">
                {area.examples.map((example, i) => (
                  <li key={i}>{example}</li>
                ))}
              </ul>
            </div>
            <Button as={Link} to="/contato" variant="primary" className="mt-auto">
              Solicitar Análise do Caso
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default AreasAtuacao
