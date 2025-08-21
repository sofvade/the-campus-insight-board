
import Link from "next/link";
import { posts } from "../../lib/posts";

export const metadata = { title: "Temas | Foro Educativo" };

export default function Topics() {
  const groups = posts.reduce((acc, p) => {
    acc[p.category] = acc[p.category] || [];
    acc[p.category].push(p);
    return acc;
  }, {});

  const categories = Object.keys(groups);

  return (
    <section>
      <h1>Temas</h1>
      <p className="kicker">Explora por categoría.</p>
      <div className="grid" style={{gridTemplateColumns: "repeat(2, 1fr)"}}>
        {categories.map(cat => (
          <div key={cat} className="card">
            <h3>{cat}</h3>
            <ul style={{margin:0, paddingLeft: "18px"}}>
              {groups[cat].map(p => (
                <li key={p.id} style={{marginBottom: 6}}>
                  <Link href={`/topics/${p.id}`}>{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
