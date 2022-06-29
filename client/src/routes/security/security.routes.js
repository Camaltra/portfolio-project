import { useContext } from "react";
import { Navigate } from "react-router-dom";

import UserProvider from "../../context/user/user.context";

export const ProtectedRoute = ({ children }) => {
  const user = useContext(UserProvider.context);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export const AlreadyLogged = ({ children }) => {
  const user = useContext(UserProvider.context);
  if (user) {
    return <Navigate to="/dashboard" />;
  }
  return children;
};
