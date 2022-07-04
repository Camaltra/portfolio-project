import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { Helmet } from "react-helmet";
import axios from "axios";

import NavBar from "../../components/navbar/navbar.component";
import CheckCardHistory from "../../components/check-card-history/check-card-history.component";

import "./admin.style.scss";

const AdminDashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredHistoryByUser, setFilteredHistoryByUser] = useState(history);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const URL =
      process.env.REACT_APP_ENV === "dev"
        ? "http://localhost:8000"
        : process.env.REACT_APP_API_URL;
    axios
      .get(`${URL}/api/v1/history`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data[0].checkDetails[0]);
        setHistory(res.data);
        setIsAdmin(true);
        setIsLoading(true);
      })
      .catch((err) => {
        setIsLoading(true);
      });
  }, []);

  useEffect(() => {
    const newFilteredHistoryByUser = history.filter((check) => {
      return check.userUsername.toLocaleLowerCase().includes(searchField);
    });

    setFilteredHistoryByUser(newFilteredHistoryByUser);
  }, [history, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return isLoading ? (
    <>
      {!isAdmin ? (
        <Navigate to="/dashboard" />
      ) : (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Admin</title>
          </Helmet>
          <NavBar isUserAdmin={true} />
          <div className="admin-controller">
            <div className="admin-search-box">
              <input
                className="search-box"
                type="search"
                placeholder="User"
                onChange={onSearchChange}
              />
            </div>
            <div className="all-check-card-container">
              {filteredHistoryByUser.map((check) => {
                return (
                  <CheckCardHistory key={check.checkId} dataCheck={check} />
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  ) : (
    <></>
  );
};

export default AdminDashboard;
