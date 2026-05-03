import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './useAuth';

export function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from =
    (location.state as { from?: { pathname: string } } | null)?.from
      ?.pathname ?? '/';

  return (
    <main style={{ padding: '1.5rem' }}>
      <h1>Log In</h1>
      <button
        type="button"
        onClick={() => {
          login();
          navigate(from, { replace: true });
        }}
      >
        Log In
      </button>
    </main>
  );
}
