
import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <article className="card">
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <div style={{marginTop: 8, display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <small className="kicker">{post.category} • {new Date(post.createdAt).toLocaleDateString()}</small>
        <Link href={`/topics/${post.id}`}>Leer</Link>
      </div>
    </article>
  );
}
