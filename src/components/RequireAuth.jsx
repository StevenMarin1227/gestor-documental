import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function RequireAuth({ allowedRoles }) {
  const { user } = useContext(AuthContext);

  // 1. No autenticado → al login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 2. Usuario autenticado pero sin rol permitido
  if (!allowedRoles.includes(user.rol)) {
    return <Navigate to="/no-autorizado" replace />;
  }

  // 3. Usuario autorizado → continuar
  return <Outlet />;
}