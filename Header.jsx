
import Link from "next/link";

export default function Header() {
  return (
    <header className="container">
      <nav className="nav">
        <Link className="brand" href="/">🎓 Foro Educativo</Link>
        <Link href="/topics">Temas</Link>
        <Link href="/api/health" prefetch={false}>API</Link>
        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
      </nav>
    </header>
  );
}
