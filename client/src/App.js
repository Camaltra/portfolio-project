import { Routes, Router, Route, Navigate, Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import LoginPage from "./routes/login/login.component";
import FullPath from "./routes/full-path/full-path.component";
import Dashboard from "./routes/dashboard/dashboard.component";
import Welcome from "./routes/welcome/welcome.component";
import Profile from "./routes/profile/profile.component";
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
            <Dashboard />
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
      <Route
        path="welcome"
        element={
          <ProtectedRoute>
            <Welcome />
          </ProtectedRoute>
        }
      />

      <Route path="profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
