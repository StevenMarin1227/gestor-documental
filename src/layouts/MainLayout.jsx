import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido principal */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        
        {/* Navbar */}
        <Navbar />

        {/* Aquí se renderizan las páginas */}
        <div style={{ padding: 20, overflowY: "auto" }}>
          <Outlet />
        </div>

      </div>
    </div>
  );
}