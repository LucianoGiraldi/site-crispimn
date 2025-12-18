import React, { useState, useRef } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { Calculator, Copy, Download, Printer, AlertCircle } from 'lucide-react'

const Calculadora: React.FC = () => {
  const [baseCalculo, setBaseCalculo] = useState<string>('')
  const [aliquota, setAliquota] = useState<string>('')
  const [multa, setMulta] = useState<string>('')
  const [jurosMensal, setJurosMensal] = useState<string>('')
  const [numMeses, setNumMeses] = useState<string>('')
  const [correcao, setCorrecao] = useState<string>('')
  const [observacoes, setObservacoes] = useState<string>('')

  const [imposto, setImposto] = useState<number | null>(null)
  const [valorMulta, setValorMulta] = useState<number | null>(null)
  const [valorJuros, setValorJuros] = useState<number | null>(null)
  const [valorCorrecao, setValorCorrecao] = useState<number | null>(null)
  const [total, setTotal] = useState<number | null>(null)

  const [showResults, setShowResults] = useState(false)
  const resultsRef = useRef<HTMLDivElement>(null)

  const formatCurrency = (value: number | null) => {
    if (value === null || isNaN(value)) return 'R$ 0,00'
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  const parseNumber = (value: string) => {
    const cleaned = value.replace(/\./g, '').replace(',', '.')
    return parseFloat(cleaned)
  }

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>, value: string, isCurrency = false) => {
    if (isCurrency) {
      // Allow only numbers and comma for decimal
      const numericValue = value.replace(/[^0-9,]/g, '')
      const parts = numericValue.split(',')
      if (parts.length > 2) {
        // Only allow one comma
        setter(parts[0] + ',' + parts.slice(1).join(''))
      } else if (parts[1] && parts[1].length > 2) {
        // Limit to 2 decimal places
        setter(parts[0] + ',' + parts[1].substring(0, 2))
      } else {
        setter(numericValue)
      }
    } else {
      // Allow only numbers and comma for percentage
      const numericValue = value.replace(/[^0-9,]/g, '')
      const parts = numericValue.split(',')
      if (parts.length > 2) {
        setter(parts[0] + ',' + parts.slice(1).join(''))
      } else {
        setter(numericValue)
      }
    }
  }

  const calculate = () => {
    const base = parseNumber(baseCalculo)
    const aliq = parseNumber(aliquota)
    const multaPerc = multa ? parseNumber(multa) : 0
    const jurosPerc = jurosMensal ? parseNumber(jurosMensal) : 0
    const meses = numMeses ? parseInt(numMeses, 10) : 0
    const correcaoPerc = correcao ? parseNumber(correcao) : 0

    if (isNaN(base) || isNaN(aliq) || base <= 0 || aliq < 0) {
      alert('Por favor, insira valores válidos para Base de Cálculo e Alíquota.')
      return
    }

    const imp = base * (aliq / 100)
    const valMulta = imp * (multaPerc / 100)
    const valJuros = imp * (jurosPerc / 100) * meses
    const subtotal = imp + valMulta + valJuros
    const valCorrecao = subtotal * (correcaoPerc / 100)
    const totalFinal = subtotal + valCorrecao

    setImposto(imp)
    setValorMulta(valMulta)
    setValorJuros(valJuros)
    setValorCorrecao(valCorrecao)
    setTotal(totalFinal)
    setShowResults(true)

    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const generateDemonstrativo = () => {
    let demonstrativo = `DEMONSTRATIVO DE CÁLCULO\n\n`
    demonstrativo += `Base de Cálculo: ${formatCurrency(parseNumber(baseCalculo))}\n`
    demonstrativo += `Alíquota: ${aliquota}%\n`
    if (multa) demonstrativo += `Multa: ${multa}%\n`
    if (jurosMensal) demonstrativo += `Juros Mensal: ${jurosMensal}%\n`
    if (numMeses) demonstrativo += `Número de Meses: ${numMeses}\n`
    if (correcao) demonstrativo += `Correção/Atualização: ${correcao}%\n`
    if (observacoes) demonstrativo += `Observações: ${observacoes}\n\n`

    demonstrativo += `RESULTADOS:\n`
    demonstrativo += `Imposto: ${formatCurrency(imposto)}\n`
    demonstrativo += `Multa (Valor): ${formatCurrency(valorMulta)}\n`
    demonstrativo += `Juros (Valor): ${formatCurrency(valorJuros)}\n`
    demonstrativo += `Correção (Valor): ${formatCurrency(valorCorrecao)}\n`
    demonstrativo += `TOTAL GERAL: ${formatCurrency(total)}\n\n`

    demonstrativo += `MEMÓRIA DE CÁLCULO:\n`
    demonstrativo += `Imposto = Base de Cálculo * (Alíquota / 100)\n`
    demonstrativo += `Multa = Imposto * (Multa % / 100)\n`
    demonstrativo += `Juros = Imposto * (Juros Mensal % / 100) * Número de Meses\n`
    demonstrativo += `Subtotal = Imposto + Multa + Juros\n`
    demonstrativo += `Correção = Subtotal * (Correção % / 100)\n`
    demonstrativo += `Total = Subtotal + Correção\n\n`

    demonstrativo += `AVISO: Simulação estimativa. Não substitui análise técnica e legislação aplicável.`

    return demonstrativo
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateDemonstrativo())
    alert('Demonstrativo copiado para a área de transferência!')
  }

  const exportToCSV = () => {
    const data = [
      ['Item', 'Valor', 'Fórmula'],
      ['Base de Cálculo', parseNumber(baseCalculo).toLocaleString('pt-BR'), ''],
      ['Alíquota (%)', aliquota.replace('.', ','), ''],
      ['Multa (%)', multa.replace('.', ','), ''],
      ['Juros (% ao mês)', jurosMensal.replace('.', ','), ''],
      ['Número de Meses', numMeses, ''],
      ['Correção (%)', correcao.replace('.', ','), ''],
      ['Imposto', imposto?.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }), `Base * (Alíquota/100)`],
      ['Multa (Valor)', valorMulta?.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }), `Imposto * (Multa/100)`],
      ['Juros (Valor)', valorJuros?.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }), `Imposto * (JurosMensal/100) * Meses`],
      ['Correção (Valor)', valorCorrecao?.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }), `(Imposto + Multa + Juros) * (Correcao/100)`],
      ['Total Geral', total?.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }), `Imposto + Multa + Juros + Correção`],
      ['Observações', observacoes, ''],
      ['Aviso', 'Simulação estimativa. Não substitui análise técnica e legislação aplicável.', ''],
    ]

    const csvContent = data.map(e => e.join(';')).join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.setAttribute('download', 'demonstrativo_crispimn.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const printPage = () => {
    window.print()
  }

  return (
    <div className="pt-24 container mx-auto px-6 py-16">
      <h1 className="font-montserrat text-4xl font-extrabold text-primary text-center mb-8 animate-fade-in-up">
        Calculadora de Impostos e Encargos
      </h1>
      <p className="font-inter text-lg text-primary-dark text-center max-w-3xl mx-auto mb-10 animate-fade-in-up delay-100">
        Ferramenta interativa para advogados estimarem rapidamente valores de tributos, multas, juros e correção monetária.
      </p>

      {/* Aviso Fixo */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 mb-10 rounded-lg flex items-start shadow-sm animate-fade-in-up delay-200">
        <AlertCircle size={24} className="flex-shrink-0 mr-3 mt-0.5" />
        <div>
          <p className="font-semibold">Atenção:</p>
          <p className="text-sm">Esta é uma simulação estimativa e não substitui a análise técnica aprofundada do caso concreto e a legislação aplicável. Consulte sempre um profissional.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Input Form */}
        <Card className="p-8 animate-fade-in-up delay-300 no-print">
          <h2 className="font-montserrat text-2xl font-bold text-primary mb-6">Parâmetros de Cálculo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="baseCalculo" className="block text-primary-dark text-sm font-medium mb-2">Base de Cálculo (R$)</label>
              <input
                type="text"
                id="baseCalculo"
                className="w-full p-3 border border-silver rounded-lg focus:ring-gold focus:border-gold transition-all duration-200 font-inter text-primary-dark"
                value={baseCalculo}
                onChange={(e) => handleInputChange(setBaseCalculo, e.target.value, true)}
                placeholder="Ex: 1.500,00"
              />
            </div>
            <div>
              <label htmlFor="aliquota" className="block text-primary-dark text-sm font-medium mb-2">Alíquota (%)</label>
              <input
                type="text"
                id="aliquota"
                className="w-full p-3 border border-silver rounded-lg focus:ring-gold focus:border-gold transition-all duration-200 font-inter text-primary-dark"
                value={aliquota}
                onChange={(e) => handleInputChange(setAliquota, e.target.value)}
                placeholder="Ex: 15"
              />
            </div>
            <div>
              <label htmlFor="multa" className="block text-primary-dark text-sm font-medium mb-2">Multa (%) (Opcional)</label>
              <input
                type="text"
                id="multa"
                className="w-full p-3 border border-silver rounded-lg focus:ring-gold focus:border-gold transition-all duration-200 font-inter text-primary-dark"
                value={multa}
                onChange={(e) => handleInputChange(setMulta, e.target.value)}
                placeholder="Ex: 10"
              />
            </div>
            <div>
              <label htmlFor="jurosMensal" className="block text-primary-dark text-sm font-medium mb-2">Juros (% ao mês) (Opcional)</label>
              <input
                type="text"
                id="jurosMensal"
                className="w-full p-3 border border-silver rounded-lg focus:ring-gold focus:border-gold transition-all duration-200 font-inter text-primary-dark"
                value={jurosMensal}
                onChange={(e) => handleInputChange(setJurosMensal, e.target.value)}
                placeholder="Ex: 1"
              />
            </div>
            <div>
              <label htmlFor="numMeses" className="block text-primary-dark text-sm font-medium mb-2">Número de Meses (para juros) (Opcional)</label>
              <input
                type="number"
                id="numMeses"
                className="w-full p-3 border border-silver rounded-lg focus:ring-gold focus:border-gold transition-all duration-200 font-inter text-primary-dark"
                value={numMeses}
                onChange={(e) => setNumMeses(e.target.value)}
                placeholder="Ex: 12"
              />
            </div>
            <div>
              <label htmlFor="correcao" className="block text-primary-dark text-sm font-medium mb-2">Correção/Atualização Monetária (%) (Opcional)</label>
              <input
                type="text"
                id="correcao"
                className="w-full p-3 border border-silver rounded-lg focus:ring-gold focus:border-gold transition-all duration-200 font-inter text-primary-dark"
                value={correcao}
                onChange={(e) => handleInputChange(setCorrecao, e.target.value)}
                placeholder="Ex: 5"
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="observacoes" className="block text-primary-dark text-sm font-medium mb-2">Observações (Opcional)</label>
            <textarea
              id="observacoes"
              rows={3}
              className="w-full p-3 border border-silver rounded-lg focus:ring-gold focus:border-gold transition-all duration-200 font-inter text-primary-dark"
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
              placeholder="Adicione detalhes relevantes para o cálculo..."
            ></textarea>
          </div>
          <Button onClick={calculate} className="w-full mt-8" size="lg">
            <Calculator size={20} className="mr-2" /> Calcular
          </Button>
        </Card>

        {/* Results Display */}
        {showResults && (
          <Card className="p-8 animate-fade-in-up delay-400 print-area" ref={resultsRef}>
            <h2 className="font-montserrat text-2xl font-bold text-primary mb-6">Resultados do Cálculo</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-light-gray p-4 rounded-lg">
                <p className="text-primary-steel text-sm">Imposto</p>
                <p className="font-montserrat text-xl font-bold text-primary">{formatCurrency(imposto)}</p>
              </div>
              <div className="bg-light-gray p-4 rounded-lg">
                <p className="text-primary-steel text-sm">Multa</p>
                <p className="font-montserrat text-xl font-bold text-primary">{formatCurrency(valorMulta)}</p>
              </div>
              <div className="bg-light-gray p-4 rounded-lg">
                <p className="text-primary-steel text-sm">Juros</p>
                <p className="font-montserrat text-xl font-bold text-primary">{formatCurrency(valorJuros)}</p>
              </div>
              <div className="bg-light-gray p-4 rounded-lg">
                <p className="text-primary-steel text-sm">Correção</p>
                <p className="font-montserrat text-xl font-bold text-primary">{formatCurrency(valorCorrecao)}</p>
              </div>
            </div>
            <div className="bg-primary-dark text-white p-5 rounded-lg text-center mb-8 shadow-lg">
              <p className="text-lg font-inter">TOTAL GERAL</p>
              <p className="font-montserrat text-3xl font-extrabold">{formatCurrency(total)}</p>
            </div>

            <h3 className="font-montserrat text-xl font-bold text-primary mb-4">Memória de Cálculo</h3>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-silver rounded-lg">
                <thead>
                  <tr className="bg-light-gray text-primary-dark text-left text-sm font-semibold">
                    <th className="py-3 px-4 border-b border-silver">Item</th>
                    <th className="py-3 px-4 border-b border-silver">Valor</th>
                    <th className="py-3 px-4 border-b border-silver">Fórmula</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-silver text-primary-dark text-sm">
                    <td className="py-3 px-4">Base de Cálculo</td>
                    <td className="py-3 px-4">{formatCurrency(parseNumber(baseCalculo))}</td>
                    <td className="py-3 px-4"></td>
                  </tr>
                  <tr className="border-b border-silver text-primary-dark text-sm">
                    <td className="py-3 px-4">Alíquota</td>
                    <td className="py-3 px-4">{aliquota}%</td>
                    <td className="py-3 px-4"></td>
                  </tr>
                  {multa && (
                    <tr className="border-b border-silver text-primary-dark text-sm">
                      <td className="py-3 px-4">Multa</td>
                      <td className="py-3 px-4">{multa}%</td>
                      <td className="py-3 px-4"></td>
                    </tr>
                  )}
                  {jurosMensal && (
                    <tr className="border-b border-silver text-primary-dark text-sm">
                      <td className="py-3 px-4">Juros Mensal</td>
                      <td className="py-3 px-4">{jurosMensal}%</td>
                      <td className="py-3 px-4"></td>
                    </tr>
                  )}
                  {numMeses && (
                    <tr className="border-b border-silver text-primary-dark text-sm">
                      <td className="py-3 px-4">Número de Meses</td>
                      <td className="py-3 px-4">{numMeses}</td>
                      <td className="py-3 px-4"></td>
                    </tr>
                  )}
                  {correcao && (
                    <tr className="border-b border-silver text-primary-dark text-sm">
                      <td className="py-3 px-4">Correção/Atualização</td>
                      <td className="py-3 px-4">{correcao}%</td>
                      <td className="py-3 px-4"></td>
                    </tr>
                  )}
                  <tr className="border-b border-silver text-primary-dark text-sm font-semibold">
                    <td className="py-3 px-4">Imposto</td>
                    <td className="py-3 px-4">{formatCurrency(imposto)}</td>
                    <td className="py-3 px-4">Base * (Alíquota/100)</td>
                  </tr>
                  <tr className="border-b border-silver text-primary-dark text-sm">
                    <td className="py-3 px-4">Multa (Valor)</td>
                    <td className="py-3 px-4">{formatCurrency(valorMulta)}</td>
                    <td className="py-3 px-4">Imposto * (Multa/100)</td>
                  </tr>
                  <tr className="border-b border-silver text-primary-dark text-sm">
                    <td className="py-3 px-4">Juros (Valor)</td>
                    <td className="py-3 px-4">{formatCurrency(valorJuros)}</td>
                    <td className="py-3 px-4">Imposto * (JurosMensal/100) * Meses</td>
                  </tr>
                  <tr className="border-b border-silver text-primary-dark text-sm">
                    <td className="py-3 px-4">Correção (Valor)</td>
                    <td className="py-3 px-4">{formatCurrency(valorCorrecao)}</td>
                    <td className="py-3 px-4">(Imposto + Multa + Juros) * (Correcao/100)</td>
                  </tr>
                  <tr className="bg-light-gray text-primary-dark text-sm font-extrabold">
                    <td className="py-3 px-4">TOTAL GERAL</td>
                    <td className="py-3 px-4">{formatCurrency(total)}</td>
                    <td className="py-3 px-4">Imposto + Multa + Juros + Correção</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {observacoes && (
              <div className="mb-8">
                <h3 className="font-montserrat text-xl font-bold text-primary mb-4">Observações</h3>
                <p className="font-inter text-primary-dark text-sm bg-light-gray p-4 rounded-lg">{observacoes}</p>
              </div>
            )}

            <div className="flex flex-wrap gap-4 justify-center no-print">
              <Button onClick={copyToClipboard} variant="secondary" size="sm">
                <Copy size={18} className="mr-2" /> Copiar
              </Button>
              <Button onClick={exportToCSV} variant="secondary" size="sm">
                <Download size={18} className="mr-2" /> Exportar CSV
              </Button>
              <Button onClick={printPage} variant="secondary" size="sm">
                <Printer size={18} className="mr-2" /> Imprimir / Salvar PDF
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}

export default Calculadora
