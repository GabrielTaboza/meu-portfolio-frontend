import Link from 'next/link';

export default function Header() {
  return (
    <header className="header-portfolio">
      <div className="container-header">
    
        <div className="logo-nome">
          <Link href="/">

            <strong>Gabriel Soares Taboza</strong> | Dev. em formação
          </Link>
        </div>


        <nav className="nav-menu">
          <Link href="/">Home</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/academica">Acadêmica</Link>
          <Link href="/profissional">Profissional</Link>
          <Link href="/projetos">Projetos</Link>
        </nav>
      </div>
    </header>
  );
}