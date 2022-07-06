import { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import UserProvider from "../../context/user/user.context";

export const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const dataUser = useContext(UserProvider.context);

  useEffect(() => {
    setTimeout(() => {
      setUser(dataUser);
      setLoading(false);
    }, 250);
  }, [dataUser]);

  return loading ? <></> : <> {user ? children : <Navigate to="/" />}</>;
};

export const AlreadyLogged = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const dataUser = useContext(UserProvider.context);

  useEffect(() => {
    setTimeout(() => {
      setUser(dataUser);
      setLoading(false);
    }, 250);
  }, [dataUser]);

  return loading ? (
    <></>
  ) : (
    <> {!user ? children : <Navigate to="/dashboard" />}</>
  );
};
