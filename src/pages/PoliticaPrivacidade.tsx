import React from 'react'

const PoliticaPrivacidade: React.FC = () => {
  return (
    <div className="pt-24 container mx-auto px-6 py-16">
      <h1 className="font-montserrat text-4xl font-extrabold text-primary text-center mb-12 animate-fade-in-up">
        Política de Privacidade e LGPD
      </h1>
      <p className="font-inter text-lg text-primary-dark text-center max-w-3xl mx-auto mb-16 animate-fade-in-up delay-100">
        A sua privacidade é de extrema importância para a CRISPIMN. Esta política descreve como coletamos, usamos e protegemos suas informações.
      </p>

      <Card className="p-8 animate-fade-in-up delay-200">
        <section className="mb-10">
          <h2 className="font-montserrat text-2xl font-bold text-primary mb-4">1. Introdução</h2>
          <p className="font-inter text-primary-dark leading-relaxed mb-4">
            A CRISPIMN — Consultoria & Perícia Financeira ("nós", "nosso", "nossa") está comprometida em proteger a privacidade e os dados pessoais de seus usuários e clientes. Esta Política de Privacidade detalha as práticas de coleta, uso, armazenamento e proteção de informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD) e outras legislações aplicáveis.
          </p>
          <p className="font-inter text-primary-dark leading-relaxed">
            Ao utilizar nossos serviços e navegar em nosso website, você concorda com os termos desta política.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-montserrat text-2xl font-bold text-primary mb-4">2. Dados Coletados</h2>
          <p className="font-inter text-primary-dark leading-relaxed mb-4">
            Coletamos diferentes tipos de informações para diversas finalidades, visando aprimorar nossos serviços e a experiência do usuário:
          </p>
          <ul className="list-disc list-inside font-inter text-primary-dark space-y-2 ml-4">
            <li>
              **Dados de Identificação e Contato:** Nome completo, e-mail, telefone/WhatsApp, cidade, estado, assunto e mensagem, coletados através do formulário de contato.
            </li>
            <li>
              **Dados de Navegação:** Informações sobre como o website é acessado e utilizado (dados de uso), como endereço IP, tipo de navegador, páginas visitadas, tempo de visita, etc., coletados via cookies e ferramentas de análise.
            </li>
            <li>
              **Dados de Serviços:** Informações fornecidas no contexto da prestação de serviços de perícia e consultoria, que podem incluir dados financeiros, contábeis e jurídicos, tratados com a máxima confidencialidade e sob contratos específicos.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-montserrat text-2xl font-bold text-primary mb-4">3. Finalidade da Coleta</h2>
          <p className="font-inter text-primary-dark leading-relaxed mb-4">
            Os dados coletados são utilizados para as seguintes finalidades:
          </p>
          <ul className="list-disc list-inside font-inter text-primary-dark space-y-2 ml-4">
            <li>
              **Comunicação:** Responder a solicitações de contato, orçamentos e dúvidas enviadas através do formulário.
            </li>
            <li>
              **Prestação de Serviços:** Executar os serviços contratados de perícia e consultoria, que podem envolver o tratamento de dados sensíveis, sempre com base legal e consentimento explícito quando necessário.
            </li>
            <li>
              **Melhoria do Website:** Analisar o uso do site para otimizar a experiência do usuário, conteúdo e funcionalidades.
            </li>
            <li>
              **Marketing (com consentimento):** Enviar informações sobre nossos serviços, novidades e conteúdos relevantes, caso o usuário tenha optado por recebê-los.
            </li>
            <li>
              **Cumprimento Legal:** Atender a obrigações legais e regulatórias.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-montserrat text-2xl font-bold text-primary mb-4">4. Compartilhamento de Dados</h2>
          <p className="font-inter text-primary-dark leading-relaxed mb-4">
            A CRISPIMN não compartilha, vende ou aluga suas informações pessoais a terceiros, exceto nas seguintes situações:
          </p>
          <ul className="list-disc list-inside font-inter text-primary-dark space-y-2 ml-4">
            <li>
              **Com Fornecedores de Serviços:** Empresas que nos auxiliam na operação do website, hospedagem, análise de dados, etc., sempre sob acordos de confidencialidade e proteção de dados.
            </li>
            <li>
              **Com Autoridades Legais:** Quando exigido por lei ou ordem judicial.
            </li>
            <li>
              **Com Consentimento:** Em outras situações, mediante seu consentimento explícito.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-montserrat text-2xl font-bold text-primary mb-4">5. Segurança dos Dados</h2>
          <p className="font-inter text-primary-dark leading-relaxed mb-4">
            Empregamos medidas de segurança técnicas e administrativas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia, firewalls, controle de acesso e treinamento de equipe.
          </p>
          <p className="font-inter text-primary-dark leading-relaxed">
            No entanto, é importante lembrar que nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro.
          </p>
        </section>

        <section className="mb-10" id="lgpd">
          <h2 className="font-montserrat text-2xl font-bold text-primary mb-4">6. Seus Direitos (LGPD)</h2>
          <p className="font-inter text-primary-dark leading-relaxed mb-4">
            De acordo com a LGPD, você possui os seguintes direitos em relação aos seus dados pessoais:
          </p>
          <ul className="list-disc list-inside font-inter text-primary-dark space-y-2 ml-4">
            <li>
              **Acesso:** Confirmar a existência de tratamento e acessar seus dados.
            </li>
            <li>
              **Correção:** Solicitar a correção de dados incompletos, inexatos ou desatualizados.
            </li>
            <li>
              **Anonimização, Bloqueio ou Eliminação:** Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.
            </li>
            <li>
              **Portabilidade:** Requisitar a portabilidade dos dados a outro fornecedor de serviço ou produto.
            </li>
            <li>
              **Eliminação:** Solicitar a eliminação dos dados pessoais tratados com o seu consentimento, exceto nas hipóteses previstas em lei.
            </li>
            <li>
              **Informação:** Obter informações sobre as entidades públicas e privadas com as quais o controlador realizou uso compartilhado de dados.
            </li>
            <li>
              **Revogação do Consentimento:** Revogar o consentimento a qualquer momento.
            </li>
          </ul>
          <p className="font-inter text-primary-dark leading-relaxed mt-4">
            Para exercer qualquer um desses direitos, entre em contato conosco através dos canais indicados na seção "Contato".
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-montserrat text-2xl font-bold text-primary mb-4">7. Cookies</h2>
          <p className="font-inter text-primary-dark leading-relaxed mb-4">
            Nosso website utiliza cookies para melhorar a experiência de navegação, analisar o tráfego e personalizar conteúdo. Cookies são pequenos arquivos de texto armazenados em seu dispositivo. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-montserrat text-2xl font-bold text-primary mb-4">8. Links para Outros Sites</h2>
          <p className="font-inter text-primary-dark leading-relaxed mb-4">
            Nosso website pode conter links para outros sites que não são operados por nós. Não temos controle sobre o conteúdo, políticas de privacidade ou práticas de sites de terceiros e não assumimos responsabilidade por eles. Recomendamos que você revise as políticas de privacidade de cada site que visitar.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-montserrat text-2xl font-bold text-primary mb-4">9. Alterações a Esta Política de Privacidade</h2>
          <p className="font-inter text-primary-dark leading-relaxed mb-4">
            Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página. Aconselhamos que você revise esta Política de Privacidade periodicamente para quaisquer alterações.
          </p>
        </section>

        <section>
          <h2 className="font-montserrat text-2xl font-bold text-primary mb-4">10. Contato</h2>
          <p className="font-inter text-primary-dark leading-relaxed mb-4">
            Se você tiver alguma dúvida sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre em contato conosco:
          </p>
          <ul className="list-disc list-inside font-inter text-primary-dark space-y-2 ml-4">
            <li>**E-mail:** [SEU_EMAIL]</li>
            <li>**Telefone:** [SEU_TELEFONE]</li>
            <li>**Endereço:** [Seu Endereço Completo]</li>
          </ul>
        </section>
      </Card>
    </div>
  )
}

export default PoliticaPrivacidade
