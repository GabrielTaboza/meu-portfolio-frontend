import Head from 'next/head';

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre | Portfólio</title>
      </Head>
      <div className="container">
        <h1 className="titulo-pagina">Sobre Mim e as Tecnologias</h1>
        

        <section className="secao-conteudo">
          <h2>Quem Eu Sou</h2>
          <p>
            Meu nome é <strong>Gabriel Soares Taboza</strong>, tenho 28 anos e sou estudante de 
            <strong> Sistemas para Internet</strong> na <strong>Universidade Católica de Pernambuco (UNICAP)</strong>. 
            Sou apaixonado por tecnologia e por tudo que envolve criar, aprender e evoluir. 
            Gosto de explorar novas ideias, entender como as coisas funcionam e transformar curiosidade em aprendizado.
          </p>
          <p>
            Fora do mundo da tecnologia, também sou movido por desafios. Fui atleta de <strong>Wrestling</strong> por alguns anos, 
            o que me ensinou disciplina, foco e persistência — qualidades que levo para minha vida acadêmica e profissional. 
            Gosto de estar sempre em movimento, seja aprendendo algo novo, desenvolvendo um projeto ou ajudando outras pessoas.
          </p>
          <p>
            Atualmente, busco aprimorar meus conhecimentos em <strong>desenvolvimento web</strong> e compreender de forma mais ampla 
            o ecossistema da <strong>Tecnologia da Informação</strong>, com o objetivo de construir soluções criativas, funcionais e acessíveis.
          </p>
        </section>

        <section className="secao-conteudo">
          <h2>Tecnologias Utilizadas Neste Portfólio</h2>
          <ul>
            <li><strong>Next.js:</strong> Framework React para construção de sites de alto desempenho.</li>
            <li><strong>React:</strong> Biblioteca JavaScript para interfaces de usuário.</li>
            <li><strong>CSS Puro/Global:</strong> Estilização moderna com tema escuro (Dark Theme).</li>
            <li><strong>Fetch API:</strong> Integração com API pública na página de Projetos.</li>
            <li><strong>Vercel:</strong> Plataforma utilizada para deploy do site.</li>
            <li><strong>GitHub:</strong> Controle de versão e hospedagem do código-fonte.</li>
          </ul>
        </section>
      </div>
    </>
  );
}