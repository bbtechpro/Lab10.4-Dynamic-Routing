import { Link } from 'react-router-dom';

export function Home() {
  return (
    <main style={{ padding: '1.5rem' }}>
      <h1>Welcome</h1>
      <p>
        Visit the <Link to="/blog">blog</Link> to browse posts.
      </p>
    </main>
  );
}
