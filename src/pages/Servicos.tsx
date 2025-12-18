import React from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { Gavel, FileText, Calculator, Banknote, Users, Building2, Scale, TrendingUp } from 'lucide-react'

const Servicos: React.FC = () => {
  const services = [
    {
      icon: Gavel,
      title: 'Perícia Judicial',
      what: 'Elaboração de laudos periciais contábeis e financeiros para processos judiciais, atuando como perito do juízo ou assistente técnico das partes.',
      when: 'Em ações que exigem prova técnica para elucidação de fatos contábeis ou financeiros, como revisões contratuais, apuração de haveres, liquidação de sentenças, etc.',
      receives: ['Laudo Pericial Completo', 'Memória de Cálculo Detalhada', 'Planilhas Auxiliares', 'Esclarecimentos e Suporte Técnico'],
    },
    {
      icon: FileText,
      title: 'Perícia Extrajudicial',
      what: 'Análise técnica e elaboração de pareceres para negociações, acordos, auditorias internas ou para subsidiar decisões estratégicas fora do âmbito judicial.',
      when: 'Para embasar acordos extrajudiciais, renegociações de dívidas, auditorias internas, due diligence ou para avaliação de riscos e oportunidades.',
      receives: ['Parecer Técnico', 'Relatório de Análise', 'Simulações Financeiras', 'Reuniões de Esclarecimento'],
    },
    {
      icon: Users,
      title: 'Assistência Técnica para Advogados',
      what: 'Suporte especializado ao advogado na formulação de quesitos, impugnação de laudos, elaboração de pareceres técnicos e acompanhamento de perícias.',
      when: 'Quando o advogado necessita de um especialista para auxiliar na estratégia processual que envolve questões contábeis/financeiras, garantindo a defesa dos interesses do cliente.',
      receives: ['Formulação de Quesitos', 'Análise e Impugnação de Laudos', 'Pareceres Técnicos', 'Acompanhamento de Diligências'],
    },
    {
      icon: Calculator,
      title: 'Cálculos Trabalhistas',
      what: 'Cálculos de liquidação de sentenças, verbas rescisórias, horas extras, adicionais (noturno, insalubridade, periculosidade), reflexos, juros e correção monetária.',
      when: 'Em ações trabalhistas para quantificar valores devidos, seja para o reclamante ou para a defesa da reclamada, garantindo a precisão dos valores.',
      receives: ['Planilha de Cálculos Detalhada', 'Memória de Cálculo', 'Relatório Resumo', 'Suporte para Acordos'],
    },
    {
      icon: Banknote,
      title: 'Cálculos Bancários e Revisional',
      what: 'Análise e recálculo de contratos de financiamento, empréstimos, cheque especial, cartão de crédito, apurando juros abusivos, capitalização e outras irregularidades.',
      when: 'Para ações revisionais de contratos bancários, defesa em execuções ou para renegociação de dívidas, buscando a adequação dos valores à legislação.',
      receives: ['Relatório de Revisão Contratual', 'Planilha de Recálculo', 'Comparativo de Valores', 'Parecer Técnico'],
    },
    {
      icon: Building2,
      title: 'Apuração de Haveres',
      what: 'Determinação do valor da participação de um sócio em uma empresa em casos de saída, dissolução societária, falecimento ou exclusão.',
      when: 'Em processos de dissolução de sociedade, saída de sócios, herança ou em qualquer situação que exija a valoração da quota-parte de um membro da empresa.',
      receives: ['Laudo de Apuração de Haveres', 'Metodologia de Avaliação', 'Demonstrativos Financeiros', 'Suporte em Negociações'],
    },
    {
      icon: Scale,
      title: 'Análises Patrimoniais e Financeiras',
      what: 'Estudo aprofundado da situação financeira e patrimonial de pessoas físicas ou jurídicas, para fins de planejamento, due diligence ou litígios.',
      when: 'Para planejamento sucessório, avaliação de bens, análise de capacidade de pagamento, ou em processos que demandem a comprovação da situação financeira.',
      receives: ['Relatório de Análise Patrimonial', 'Fluxo de Caixa Projetado', 'Avaliação de Ativos', 'Parecer Consultivo'],
    },
    {
      icon: TrendingUp,
      title: 'Cálculos/Estimativas Tributárias',
      what: 'Elaboração de memórias de cálculo para recuperação de créditos tributários, revisão de lançamentos fiscais e estimativas de impacto tributário.',
      when: 'Em ações de repetição de indébito, compensação de tributos, ou para planejamento fiscal, auxiliando na otimização da carga tributária e conformidade.',
      receives: ['Memória de Cálculo Tributário', 'Relatório de Estimativa', 'Análise de Legislação Aplicável', 'Suporte para Defesas Fiscais'],
    },
  ]

  return (
    <div className="pt-24 container mx-auto px-6 py-16">
      <h1 className="font-montserrat text-4xl font-extrabold text-primary text-center mb-12 animate-fade-in-up">
        Nossos Serviços
      </h1>
      <p className="font-inter text-lg text-primary-dark text-center max-w-3xl mx-auto mb-16 animate-fade-in-up delay-100">
        Oferecemos uma gama completa de serviços de perícia e consultoria financeira, projetados para atender às necessidades específicas de advogados e empresas, com foco em precisão e clareza.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <Card key={index} className="p-8 flex flex-col animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
            <service.icon size={48} className="text-primary-dark mb-6" strokeWidth={1.5} />
            <h2 className="font-montserrat text-2xl font-bold mb-4 text-primary">{service.title}</h2>

            <div className="mb-4 flex-grow">
              <h3 className="font-montserrat text-lg font-semibold text-primary-steel mb-2">O que é:</h3>
              <p className="font-inter text-primary-dark leading-relaxed text-sm">{service.what}</p>
            </div>

            <div className="mb-4 flex-grow">
              <h3 className="font-montserrat text-lg font-semibold text-primary-steel mb-2">Quando usar:</h3>
              <p className="font-inter text-primary-dark leading-relaxed text-sm">{service.when}</p>
            </div>

            <div className="mb-6 flex-grow">
              <h3 className="font-montserrat text-lg font-semibold text-primary-steel mb-2">O que o cliente recebe:</h3>
              <ul className="list-disc list-inside font-inter text-silver text-sm space-y-1">
                {service.receives.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <Button as={Link} to="/contato" variant="primary" className="mt-auto">
              Solicitar Orçamento
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Servicos
