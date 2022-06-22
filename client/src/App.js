import { Routes, Router, Route, Navigate, Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import LoginPage from "./routes/login/login.component";
import FullPath from "./routes/full-path/full-path.component";
import NavBar from "./components/navbar/navbar.component";
import {
  ProtectedRoute,
  AlreadyLogged,
} from "./routes/security/security.routes";

const Info = () => {
  return <h1>This is some information about the project</h1>;
};

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <AlreadyLogged>
            <LoginPage />
          </AlreadyLogged>
        }
      />

      <Route path="info" element={<Info />} />
      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <FullPath />
          </ProtectedRoute>
        }
      />
      <Route
        path="full-path"
        element={
          <ProtectedRoute>
            <FullPath />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
