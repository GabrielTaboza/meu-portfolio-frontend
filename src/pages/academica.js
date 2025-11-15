import Head from 'next/head';

export default function Academica() {
  return (
    <>
      <Head>
        <title>Acadêmica | Portfólio</title>
      </Head>
      
      <div className="container">
        <h1 className="titulo-pagina">Experiência Acadêmica</h1>
        
        {/* CURSO PRINCIPAL */}
        <section className="secao-conteudo">
          <h3>🎓 Curso de Sistemas para Internet</h3>
          <p>
            <strong>Instituição:</strong> Universidade Católica de Pernambuco<br/>
            <strong>Período:</strong> 3º Semestre (Previsão de Conclusão: Dezembro de 2026)
          </p>
          <p>
            Ao longo do curso, venho desenvolvendo habilidades em programação front-end, back-end, banco de dados, 
            além de experiência com frameworks modernos como <strong>Next.js</strong> e <strong>Django</strong>.
            Também participo de projetos interdisciplinares com foco em design responsivo, usabilidade, Inteligência Artifical, entre outros.
          </p>
          <ul>
            <li>🧩 Estrutura de Dados</li>
            <li>💻 Frameworks Front-End</li>
            <li>🎨 Design de Interfaces</li>
            <li>🗄️ Banco de Dados e APIs</li>
          </ul>
        </section>

        {/* CURSOS LIVRES */}
        <section className="secao-conteudo">
          <h3>📚 Cursos Livres e Certificações</h3>
          <ul>
            <li>
              <strong>Rotas e HTTP, Fundamentos, Flask: primeiro frameworkt</strong> — Rocketseat <br/>
              <small>Duração: 11h | Conclusão: 2025</small>
            </li>
            <li>
              <strong>Administrando banco de dados</strong> — Fundação Bradesco <br/>
              <small>Duração: 15h | Conclusão: 2023</small>
            </li>
            <li>
              <strong>SEGURANÇA EM TECNOLOGIA DA INFORMAÇÃO</strong> — Fundação Bradesco <br/>
              <small>Duração: 12h | Conclusão: 2022</small>
            </li>
            <li>
              <strong>INTRODUÇÃO A REDES DE COMPUTADORES</strong> — Fundação Bradesco<br/>
              <small>Duração: 15h | Conclusão: 2023</small>
            </li>
          </ul>
        </section>

        {/* CERTIFICADOS */}
        <section className="secao-conteudo">
          <h3>🏅 Certificados</h3>
          <p>Abaixo alguns certificados emitidos pelas plataformas de ensino:</p>
          <ul>
            <li><a href="https://app.rocketseat.com.br/certificates/ddb6991a-2166-49e3-8065-b5a2189f98d0" target="_blank">Certificado Rocketseat - Rotas e HTTP, Fundamentos, Flask</a></li>
            <li><a href="https://lms.ev.org.br/mpls/Web/Lms/Student/PrintCertificateDownload.ashx?uid=8573788&p=4E0DAlsI1FzHBPKUI4jhsbRVNwR%252fK73P" target="_blank">Certificado Fundação Bradesco - Administrando banco de dados</a></li>
            <li><a href="https://lms.ev.org.br/mpls/Web/Lms/Student/PrintCertificateDownload.ashx?uid=8573788&p=4E0DAlsI1FweKZizuNJWcUf5pyKYQCqb" target="_blank">Certificado Fundação Bradesco - SEGURANÇA EM TECNOLOGIA DA INFORMAÇÃO</a></li>
            <li><a href="https://lms.ev.org.br/mpls/Web/Learning/LearningDetail/DefaultBlank.aspx?courseID=392&classID=1885&enrollmentID=31377828&historyID=20625642" target="_blank">Certificado Fundação Bradesco - INTRODUÇÃO A REDES DE COMPUTADORES</a></li>
          </ul>
        </section>
      </div>
    </>
  );
}