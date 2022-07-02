import { Routes, Route } from "react-router-dom";

import AdminDashboard from "./routes/admin/admin.component";
import Dashboard from "./routes/dashboard/dashboard.component";
import FullPath from "./routes/full-path/full-path.component";
import Info from "./routes/info/info.component";
import LoginPage from "./routes/login/login.component";
import Profile from "./routes/profile/profile.component";
import Randomize from "./routes/randomize/randomize.component";
import Welcome from "./routes/welcome/welcome.component";
import {
  ProtectedRoute,
  AlreadyLogged,
} from "./routes/security/security.routes";

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

      <Route
        path="*"
        element={
          <AlreadyLogged>
            <LoginPage />
          </AlreadyLogged>
        }
      />

      <Route
        path="profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="randomize"
        element={
          <ProtectedRoute>
            <Randomize />
          </ProtectedRoute>
        }
      />
      <Route path="admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
