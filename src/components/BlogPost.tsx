import { Link, useParams } from 'react-router-dom';
import { posts } from '../lib/posts';
import { useAuth } from './useAuth';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);
  const { isAuthenticated } = useAuth();

  if (!post) {
    return (
      <main style={{ padding: '1.5rem' }}>
        <p>Post not found</p>
        <p>
          <Link to="/blog">Back to blog</Link>
        </p>
      </main>
    );
  }

  return (
    <article style={{ padding: '1.5rem' }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {isAuthenticated && (
        <button style={{ marginBottom: '1rem', cursor: 'pointer' }} type="button">
          Edit Post
        </button>
      )}
      <p>
        <Link to="/blog">Back to blog</Link>
      </p>
    </article>
  );
}
