import { Routes, Route } from "react-router-dom";
import Client from "../pages/client";
import Dashboard from "../pages/dashboard";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/client" element={<Client />} />
    </Routes>
  );
};
