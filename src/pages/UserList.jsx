import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import UserForm from "../components/UserForm";

export default function UserList() {
  const { token } = useContext(AuthContext);
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);

  const cargarUsuarios = async () => {
    const res = await fetch("http://localhost:4000/api/auth/users", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const data = await res.json();
    setUsuarios(data);
    setCargando(false);
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  if (cargando) return <p>Cargando usuarios...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Gestión de Usuarios</h2>

      {/* FORMULARIO PARA CREAR USUARIO */}
      <UserForm onUserCreated={cargarUsuarios} />

      {/* TABLA DE USUARIOS */}
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ background: "#1e1e2d", color: "white" }}>
            <th style={th}>Nombre</th>
            <th style={th}>Correo</th>
            <th style={th}>Rol</th>
            <th style={th}>Estado</th>
            <th style={th}>Creado</th>
          </tr>
        </thead>

        <tbody>
          {usuarios.map((u) => (
            <tr key={u._id}>
              <td style={td}>{u.nombre}</td>
              <td style={td}>{u.email}</td>
              <td style={td}>{u.rol}</td>
              <td style={td}>{u.estado}</td>
              <td style={td}>{new Date(u.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const th = {
  padding: "10px",
  border: "1px solid #ddd"
};

const td = {
  padding: "10px",
  border: "1px solid #ddd"
};