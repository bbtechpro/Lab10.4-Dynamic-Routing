// import { Navigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// export const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth();

//   if (!user) {
//     // Redirect to login if not authenticated
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Save the current location in state so we can redirect back later
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    // If logged in but lacks permissions, send to Unauthorized page
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};
