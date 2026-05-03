import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdminDashboard } from './components/AdminDashboard';
import { AuthProvider } from './components/AuthProvider';
import { BlogIndex } from './components/BlogIndex';
import { BlogPost } from './components/BlogPost';
import { Navbar } from './components/ConditionalUi';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
