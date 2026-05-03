import { createContext, useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Determine where the user was trying to go
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (userData) => {
    login(userData);
    // Redirect back to the original destination
    navigate(from, { replace: true });
  };

  return (
    <button onClick={() => handleLogin({ name: 'Admin', role: 'admin' })}>
      Log In
    </button>
  );
};

const Unauthorized = () => (
  <div style={{ textAlign: 'center', padding: '50px' }}>
    <h1>403 - Access Denied</h1>
    <p>You do not have the required permissions to view this page.</p>
    <button onClick={() => window.history.back()}>Go Back</button>
  </div>
);

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // 1. Lazy Initialization: Load user from localStorage if it exists
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('app_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // 2. Sync to Storage: Update localStorage whenever the user state changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('app_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('app_user');
    }
  }, [user]);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
