import { Suspense } from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import UsersPage from "./pages/admin/users";
import StoragePage from "./pages/admin/storage";
import FilesPage from "./pages/admin/files";
import ReportsPage from "./pages/admin/reports";
import BillingPage from "./pages/admin/billing";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Navigate to="/admin" replace />} />
          <Route path="/admin" element={<Home />} />
          <Route path="/admin/users" element={<UsersPage />} />
          <Route path="/admin/storage" element={<StoragePage />} />
          <Route path="/admin/files" element={<FilesPage />} />
          <Route path="/admin/reports" element={<ReportsPage />} />
          <Route path="/admin/billing" element={<BillingPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
