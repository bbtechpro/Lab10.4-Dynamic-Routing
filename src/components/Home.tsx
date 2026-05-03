import { Link } from 'react-router-dom';
import { useAuth } from './useAuth';

export function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <main style={{ padding: '1.5rem' }}>
      <h1>Welcome</h1>
      {isAuthenticated ? (
        <p>
          Welcome back! You can access the <Link to="/admin">Admin Dashboard</Link>.
        </p>
      ) : (
        <p>
          Please <Link to="/login">log in</Link> to access admin features.
        </p>
      )}
      <p>
        Visit the <Link to="/blog">blog</Link> to browse posts.
      </p>
    </main>
  );
}
