import { Link, useParams } from 'react-router-dom';
import { posts } from '../lib/posts';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

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
      <p>
        <Link to="/blog">Back to blog</Link>
      </p>
    </article>
  );
}
