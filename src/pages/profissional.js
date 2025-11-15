import Head from 'next/head';

export default function Profissional() {
  return (
    <>
      <Head>
        <title>Profissional | Portfólio</title>
      </Head>

      <div className="container">
        <h1 className="titulo-pagina">Experiência Profissional</h1>

        <section className="secao-conteudo">
          <h3>Atendente Júnior — Contax (Banco Itaú)</h3>
          <p>
            <strong>Período:</strong> Janeiro de 2019 — Maio de 2022 <br />
            <strong>Descrição:</strong> Atuação no atendimento ao cliente do Banco Itaú, realizando suporte telefônico, 
            resolução de problemas, abertura de chamados, acompanhamento de solicitações e atividades de vendas de serviços bancários. <br />
            Essa experiência reforçou habilidades de <strong>comunicação, empatia, organização</strong> e <strong>resolução de problemas sob pressão</strong>.
          </p>
        </section>

        <section className="secao-conteudo">
          <h3>Residência em Desenvolvimento Web — Neurotech</h3>
          <p>
            <strong>Período:</strong> Fevereiro de 2024 — Junho de 2024 <br />
            <strong>Descrição:</strong> Participação em um programa de residência tecnológica com foco em desenvolvimento web. 
            Atuação em equipe no desenvolvimento de soluções utilizando <strong>HTML, CSS, JavaScript</strong> e 
            <strong> Django</strong>, com metodologias ágeis e foco em usabilidade e design responsivo.
          </p>
        </section>

        <section className="secao-conteudo">
          <h3>Residência em Agentes de IA — Accenture</h3>
          <p>
            <strong>Período:</strong> Agosto de 2024 — Dezembro de 2024 <br />
            <strong>Descrição:</strong> Desenvolvimento de projetos voltados à criação e integração de <strong>Agentes de Inteligência Artificial</strong>, 
            com foco em automação e soluções inovadoras para negócios. 
            Envolvimento com ferramentas de IA, APIs e conceitos de <strong>machine learning</strong> aplicados a produtos digitais.
          </p>
        </section>

        <section className="secao-conteudo">
          <h3>Busca por Oportunidades</h3>
          <p>
            Atualmente, estuo em busca de uma oportunidade na área de <strong>Tecnologia da Informação</strong>, 
            seja como <strong>assistente, estagiário</strong> ou em funções relacionadas a <strong>suporte técnico, 
            desenvolvimento, análise de sistemas</strong> ou outras áreas que me permitam evoluir profissionalmente. 
            Tenho interesse em aprender continuamente, colaborar em equipe e aplicar meus conhecimentos adquiridos 
            durante a graduação e projetos práticos.
          </p>
        </section>
      </div>
    </>
  );
}