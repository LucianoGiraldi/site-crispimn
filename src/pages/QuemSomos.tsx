import React from 'react'
import Card from '../components/Card'
import { Target, Gem, Lightbulb, Users, Briefcase, GraduationCap } from 'lucide-react'

const QuemSomos: React.FC = () => {
  return (
    <div className="pt-24 container mx-auto px-6 py-16">
      <h1 className="font-montserrat text-4xl font-extrabold text-primary text-center mb-12 animate-fade-in-up">
        Quem Somos
      </h1>

      {/* Missão, Valores, Diferenciais */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 animate-fade-in-up">
            <Target size={40} className="text-gold mb-4" strokeWidth={1.5} />
            <h2 className="font-montserrat text-2xl font-bold mb-4 text-primary">Nossa Missão</h2>
            <p className="font-inter text-primary-dark leading-relaxed">
              Entregar cálculos e pareceres técnicos com precisão inquestionável e linguagem clara, transformando dados complexos em informações estratégicas e acessíveis para advogados e empresas. Nosso compromisso é com a fundamentação e a segurança jurídica de cada cliente.
            </p>
          </Card>
          <Card className="p-8 animate-fade-in-up delay-100">
            <Gem size={40} className="text-gold mb-4" strokeWidth={1.5} />
            <h2 className="font-montserrat text-2xl font-bold mb-4 text-primary">Nossos Valores</h2>
            <ul className="list-disc list-inside font-inter text-primary-dark space-y-2">
              <li>**Ética e Integridade:** Atuamos com a máxima honestidade e transparência.</li>
              <li>**Confidencialidade:** Garantimos a proteção rigorosa de todas as informações.</li>
              <li>**Transparência Metodológica:** Nossos cálculos são rastreáveis e compreensíveis.</li>
              <li>**Compromisso com Prazos:** Respeitamos os cronogramas e a urgência de cada caso.</li>
              <li>**Excelência Técnica:** Buscamos a perfeição em cada detalhe dos nossos trabalhos.</li>
            </ul>
          </Card>
          <Card className="p-8 animate-fade-in-up delay-200">
            <Lightbulb size={40} className="text-gold mb-4" strokeWidth={1.5} />
            <h2 className="font-montserrat text-2xl font-bold mb-4 text-primary">Nossos Diferenciais</h2>
            <ul className="list-disc list-inside font-inter text-primary-dark space-y-2">
              <li>**Documentação Completa:** Laudos com memória de cálculo detalhada e organizada.</li>
              <li>**Organização de Evidências:** Apresentação clara e objetiva dos dados.</li>
              <li>**Comunicação Objetiva:** Linguagem acessível e direta para advogados.</li>
              <li>**Atualização Constante:** Acompanhamento das mudanças legislativas e jurisprudenciais.</li>
              <li>**Suporte Pós-Entrega:** Disponibilidade para esclarecimentos e dúvidas.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Dados da Empresa */}
      <section className="bg-white p-10 rounded-xl shadow-subtle mb-16 animate-fade-in-up delay-300">
        <h2 className="font-montserrat text-3xl font-bold text-primary mb-6 text-center">Dados da Empresa</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-primary-dark">
          <div>
            <p className="font-montserrat font-semibold text-lg mb-2">Nome Completo:</p>
            <p className="font-inter text-base">Crispimn Consultoria e Perícia LTDA</p>
          </div>
          <div>
            <p className="font-montserrat font-semibold text-lg mb-2">CNPJ:</p>
            <p className="font-inter text-base">54.314.879/0001-75</p>
          </div>
          <div>
            <p className="font-montserrat font-semibold text-lg mb-2">Endereço:</p>
            <p className="font-inter text-base">[Endereço Completo da Empresa]</p>
          </div>
          <div>
            <p className="font-montserrat font-semibold text-lg mb-2">Contato:</p>
            <p className="font-inter text-base">[Telefone/Email de Contato]</p>
          </div>
        </div>
      </section>

      {/* Equipe/Responsável Técnico */}
      <section className="mb-16">
        <h2 className="font-montserrat text-3xl font-bold text-primary text-center mb-12 animate-fade-in-up delay-400">
          Nossa Equipe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder para Membro da Equipe 1 */}
          <Card className="p-8 text-center animate-fade-in-up delay-500">
            <div className="w-32 h-32 rounded-full bg-light-gray mx-auto mb-6 flex items-center justify-center overflow-hidden">
              <Users size={64} className="text-silver" />
              {/* <img src="[URL_FOTO_MEMBRO]" alt="Nome do Membro" className="w-full h-full object-cover" /> */}
            </div>
            <h3 className="font-montserrat text-xl font-semibold mb-2 text-primary">[Nome do Responsável Técnico]</h3>
            <p className="font-inter text-gold text-sm mb-3">Perito(a) Financeiro(a) e Contábil</p>
            <ul className="list-disc list-inside text-primary-dark text-sm text-left mx-auto max-w-xs space-y-1">
              <li><GraduationCap size={16} className="inline mr-2 text-primary-steel" /> Formação: [Formação Acadêmica]</li>
              <li><Briefcase size={16} className="inline mr-2 text-primary-steel" /> Registro: [CRC/CNAI/Outros Registros]</li>
              <li><Lightbulb size={16} className="inline mr-2 text-primary-steel" /> Experiência: [Anos de Experiência]</li>
              <li><Target size={16} className="inline mr-2 text-primary-steel" /> Especialidades: [Lista de Especialidades]</li>
            </ul>
            <p className="font-inter text-silver text-xs mt-4">
              [Breve descrição sobre a experiência e expertise do profissional, focando na credibilidade e rigor técnico.]
            </p>
          </Card>

          {/* Placeholder para Membro da Equipe 2 (se houver) */}
          <Card className="p-8 text-center animate-fade-in-up delay-600">
            <div className="w-32 h-32 rounded-full bg-light-gray mx-auto mb-6 flex items-center justify-center overflow-hidden">
              <Users size={64} className="text-silver" />
            </div>
            <h3 className="font-montserrat text-xl font-semibold mb-2 text-primary">[Nome do Membro da Equipe]</h3>
            <p className="font-inter text-gold text-sm mb-3">[Cargo]</p>
            <ul className="list-disc list-inside text-primary-dark text-sm text-left mx-auto max-w-xs space-y-1">
              <li><GraduationCap size={16} className="inline mr-2 text-primary-steel" /> Formação: [Formação Acadêmica]</li>
              <li><Briefcase size={16} className="inline mr-2 text-primary-steel" /> Experiência: [Anos de Experiência]</li>
              <li><Target size={16} className="inline mr-2 text-primary-steel" /> Especialidades: [Lista de Especialidades]</li>
            </ul>
            <p className="font-inter text-silver text-xs mt-4">
              [Breve descrição sobre a experiência e expertise do profissional.]
            </p>
          </Card>

          {/* Placeholder para Membro da Equipe 3 (se houver) */}
          <Card className="p-8 text-center animate-fade-in-up delay-700">
            <div className="w-32 h-32 rounded-full bg-light-gray mx-auto mb-6 flex items-center justify-center overflow-hidden">
              <Users size={64} className="text-silver" />
            </div>
            <h3 className="font-montserrat text-xl font-semibold mb-2 text-primary">[Nome do Membro da Equipe]</h3>
            <p className="font-inter text-gold text-sm mb-3">[Cargo]</p>
            <ul className="list-disc list-inside text-primary-dark text-sm text-left mx-auto max-w-xs space-y-1">
              <li><GraduationCap size={16} className="inline mr-2 text-primary-steel" /> Formação: [Formação Acadêmica]</li>
              <li><Briefcase size={16} className="inline mr-2 text-primary-steel" /> Experiência: [Anos de Experiência]</li>
              <li><Target size={16} className="inline mr-2 text-primary-steel" /> Especialidades: [Lista de Especialidades]</li>
            </ul>
            <p className="font-inter text-silver text-xs mt-4">
              [Breve descrição sobre a experiência e expertise do profissional.]
            </p>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default QuemSomos
