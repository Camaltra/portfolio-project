import { useContext } from "react";
import { Navigate } from "react-router-dom";

import UserProvider from "../../context/user/user.context";

const ProtectedRoute = ({ children }) => {
  const user = useContext(UserProvider.context);
  console.log(user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
