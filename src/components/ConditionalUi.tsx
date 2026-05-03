import { useAuth } from "./AuthContext";
export const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav>
      <a href="/">Home</a>
      {user ? (
        <>
          <span>Welcome, {user.name}</span>
          <button onClick={logout}>Log Out</button>
        </>
      ) : (
        <a href="/login">Login</a>
      )}
    </nav>
  );
};


