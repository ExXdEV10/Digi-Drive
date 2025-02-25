import { Suspense } from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import UsersPage from "./pages/admin/users";
import StoragePage from "./pages/admin/storage";
import FilesPage from "./pages/admin/files";
import ReportsPage from "./pages/admin/reports";
import BillingPage from "./pages/admin/billing";
import LogsPage from "./pages/admin/logs";
import SettingsPage from "./pages/admin/settings";
import SupportPage from "./pages/admin/support";
import AnnouncementsPage from "./pages/admin/announcements";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {import.meta.env.VITE_TEMPO && useRoutes(routes)}
      <Routes>
        <Route path="/" element={<Navigate to="/admin" replace />} />
        <Route path="/admin" element={<Home />} />
        <Route path="/admin/users" element={<UsersPage />} />
        <Route path="/admin/storage" element={<StoragePage />} />
        <Route path="/admin/files" element={<FilesPage />} />
        <Route path="/admin/reports" element={<ReportsPage />} />
        <Route path="/admin/billing" element={<BillingPage />} />
        <Route path="/admin/logs" element={<LogsPage />} />
        <Route path="/admin/settings" element={<SettingsPage />} />
        <Route path="/admin/support" element={<SupportPage />} />
        <Route path="/admin/announcements" element={<AnnouncementsPage />} />
        {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}
      </Routes>
    </Suspense>
  );
}

export default App;
