import { Link } from 'react-router-dom';
import { useAuth } from './useAuth';

export function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        padding: '0.75rem 1.5rem',
        borderBottom: '1px solid #ccc',
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      {isAuthenticated ? (
        <>
          <Link to="/admin">Admin</Link>
          <button type="button" onClick={logout}>
            Log Out
          </button>
        </>
      ) : (
        <Link to="/login">Log In</Link>
      )}
    </header>
  );
}
