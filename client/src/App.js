import { Routes, Route } from "react-router-dom";

import AdminDashboard from "./routes/admin/admin.component";
import Dashboard from "./routes/dashboard/dashboard.component";
import FullPath from "./routes/full-path/full-path.component";
import Info from "./routes/info/info.component";
import LoginPage from "./routes/login/login.component";
import Profile from "./routes/profile/profile.component";
import Randomize from "./routes/randomize/randomize.component";
import Welcome from "./routes/welcome/welcome.component";

function App() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />

      <Route path="info" element={<Info />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="full-path" element={<FullPath />} />
      <Route path="welcome" element={<Welcome />} />

      <Route path="*" element={<LoginPage />} />

      <Route path="profile" element={<Profile />} />
      <Route path="randomize" element={<Randomize />} />
      <Route path="admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
