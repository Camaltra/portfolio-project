import { Routes, Route } from "react-router-dom";

import Dashboard from "./routes/dashboard/dashboard.component";
import FullPath from "./routes/full-path/full-path.component";
import LoginPage from "./routes/login/login.component";
import Profile from "./routes/profile/profile.component";
import Welcome from "./routes/welcome/welcome.component";
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
      <Route
        path="*"
        element={
          <AlreadyLogged>
            <LoginPage />
          </AlreadyLogged>
        }
      />
    </Routes>
  );
}

export default App;
