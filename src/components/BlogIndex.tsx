import { Link } from 'react-router-dom';
import { posts } from '../lib/posts';

export function BlogIndex() {
  return (
    <main style={{ padding: '1.5rem' }}>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
