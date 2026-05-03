const MENU_ITEMS = [
  { path: '/dashboard', label: 'Dashboard', roles: ['user', 'admin'] },
  { path: '/profile', label: 'My Profile', roles: ['user', 'admin'] },
  { path: '/admin', label: 'Admin Panel', roles: ['admin'] },
  { path: '/settings', label: 'Settings', roles: ['admin'] },
];

const Sidebar = () => {
  const { user } = useAuth(); // Assuming user object has a 'role' property

  // Filter items based on user role
  const visibleItems = MENU_ITEMS.filter(item => 
    item.roles.includes(user?.role)
  );

  return (
    <nav className="sidebar">
      <ul>
        {visibleItems.map(item => (
          <li key={item.path}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const AdminRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== 'admin') {
    // Deny access if user is logged in but not an admin
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

