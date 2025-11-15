import { useState, useEffect } from 'react';
import Head from 'next/head';

const GITHUB_USERNAME = 'GabrielTaboza'; 

export default function Projetos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Erro ao buscar repositórios: ${response.statusText}`);
        }

        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos(); 
  }, []);

  if (loading) return <div className="container"><p>Carregando repositórios do GitHub...</p></div>;
  if (error) return <div className="container"><p>Erro ao carregar dados: {error}. Verifique seu usuário GitHub!</p></div>;
  if (repos.length === 0) return <div className="container"><p>Nenhum repositório público encontrado no GitHub.</p></div>;

  return (
    <>
      <Head>
        <title>Projetos | Portfólio</title>
      </Head>
      <div className="container">
        <h1 className="titulo-pagina">Projetos Desenvolvidos</h1>
        
        <section className="secao-conteudo">
            <p>Abaixo estão meus repositórios públicos mais recentes, obtidos dinamicamente através da **GitHub REST API**:</p>
            <div className="lista-projetos">
              {repos.map((repo) => (
                <div key={repo.id} className="projeto-card">
                  <h3>{repo.name}</h3>
                  <p>{repo.description || 'Sem descrição.'}</p>
                  <div className="projeto-meta">
                    <span>Linguagem: **{repo.language || 'N/A'}**</span>
                    <span>Estrelas: ⭐ {repo.stargazers_count}</span>
                  </div>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn-vibrante-pequeno">
                    Ver no GitHub &rarr;
                  </a>
                </div>
              ))}
            </div>
        </section>
      </div>
    </>
  );
}