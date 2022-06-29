import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import axios from "axios";

import NavBar from "../../components/navbar/navbar.component";
import CheckCardHistory from "../../components/check-card-history/check-card-history.component";

import "./admin.style.scss";

const AdminDashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/history", {
        withCredentials: true,
      })
      .then((res) => {
        setHistory(res.data);
        setIsAdmin(true);
        setIsLoading(true);
      })
      .catch((err) => {
        setIsLoading(true);
      });
  }, []);

  return isLoading ? (
    <>
      {!isAdmin ? (
        <Navigate to="/dashboard" />
      ) : (
        <>
          <NavBar isUserAdmin={true} />
          <div className="all-check-card-container">
            {history.map((check) => {
              return <CheckCardHistory key={check.checkId} dataCheck={check} />;
            })}
          </div>
        </>
      )}
    </>
  ) : (
    <></>
  );
};

export default AdminDashboard;
