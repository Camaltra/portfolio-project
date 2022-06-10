import { useState, useEffect, createContext } from "react";
import axios from "axios";

const context = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchDataUser = async () => {
      axios
        .get("http://localhost:8000/auth/user", { withCredentials: true })
        .then((response) => {
          if (response.data !== {}) {
            setUser(response.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchDataUser();
  }, []);

  return <context.Provider value={user}>{children}</context.Provider>;
};

UserProvider.context = context;

export default UserProvider;
