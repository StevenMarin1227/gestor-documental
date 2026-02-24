import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Repository from "./pages/Repository";
import UploadPage from "./pages/UploadPage";
import Login from "./pages/Login";
import MainLayout from "./layouts/MainLayout";
import RequireAuth from "./components/RequireAuth";
import NoAutorizado from "./pages/NoAutorizado";
import UserList from "./pages/UserList";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* RUTAS QUE NO USAN LAYOUT */}
        <Route path="/login" element={<Login />} />
        <Route path="/no-autorizado" element={<NoAutorizado />} />

        {/* RUTAS QUE SÍ USAN LAYOUT */}
        <Route element={<MainLayout />}>

          {/* TODOS LOS USUARIOS AUTENTICADOS */}
          <Route element={<RequireAuth allowedRoles={["admin", "consulta"]} />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/repositorio" element={<Repository />} />
          </Route>

          {/* SOLO ADMIN */}
          <Route element={<RequireAuth allowedRoles={["admin"]} />}>
            <Route path="/subir" element={<UploadPage />} />
            <Route path="/usuarios" element={<UserList />} />
          </Route>

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;