import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {

  return (
    <>
      <Head>
        <title>Home | Gabriel Taboza - Portfólio</title>
      </Head>
      <div className="container home-page">
        <section className="secao-conteudo">
          <div className="apresentacao-home">

            <div className="foto-container">
              <Image 
                src="/perfil.jpg" 
                alt="Foto de Perfil do Aluno" 
                width={200} 
                height={200} 
                className="foto-perfil-circular" 
                priority
              />
            </div>
            

            <h1>Olá, eu sou **Gabriel**</h1>
            <h2>Desenvolvedor em Formação</h2>
            <p>
              Aluno do 3º período de Sistemas para Internet. Apaixonado em aprender coisas novas e se arriscar. 
              Este portfólio foi desenvolvido com Next.js para a disciplina de Front-End.
            </p>


            <Link href="/sobre" className="btn-vibrante">
              Saber Mais Sobre Mim &rarr;
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}