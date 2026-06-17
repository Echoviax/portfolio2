import Link from "next/link";
import { getAllPosts } from "../lib/posts";

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <main>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Blog
        </h2>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
        </main>
    );
}