import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function UserForm({ onUserCreated }) {
  const { token } = useContext(AuthContext);

  const [nombre, setNombre] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [area, setArea] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");   // <-- vacío por defecto

  const [mensaje, setMensaje] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        nombre,
        identificacion,
        area,
        email,
        password,
        rol
      })
    });

    const data = await res.json();

    if (!res.ok) {
      setMensaje({ tipo: "error", texto: data.msg });
      return;
    }

    setMensaje({ tipo: "ok", texto: "Usuario creado correctamente" });

    setNombre("");
    setIdentificacion("");
    setArea("");
    setEmail("");
    setPassword("");
    setRol("");

    if (onUserCreated) onUserCreated();
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <h3>Crear Nuevo Usuario</h3>

      {mensaje && (
        <p style={{ color: mensaje.tipo === "ok" ? "green" : "red" }}>
          {mensaje.texto}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          style={input}
        />

        <input
          type="text"
          placeholder="Identificación"
          value={identificacion}
          onChange={(e) => setIdentificacion(e.target.value)}
          required
          style={input}
        />

        <select
          value={area}
          onChange={(e) => setArea(e.target.value)}
          required
          style={input}
        >
          <option value="">Seleccione un área</option>
          <option value="Sistemas">Sistemas</option>
          <option value="Recursos Humanos">Recursos Humanos</option>
          <option value="Financiera">Financiera</option>
          <option value="Operaciones">Operaciones</option>
          <option value="Calidad">Calidad</option>
        </select>

        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={input}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          style={input}
        />

        <select
          value={rol}
          onChange={(e) => setRol(e.target.value)}
          required
          style={input}
        >
          <option value="">Seleccione un rol</option>
          <option value="consulta">Consulta</option>
          <option value="admin">Administrador</option>
        </select>

        <button type="submit" style={btn}>
          Crear Usuario
        </button>
      </form>
    </div>
  );
}

const input = {
  width: "100%",
  marginBottom: "10px",
  padding: "10px"
};

const btn = {
  width: "100%",
  padding: "10px",
  background: "#1e1e2d",
  color: "white",
  cursor: "pointer"
};