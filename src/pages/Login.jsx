import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // <-- IMPORTAMOS ESTILOS BONITOS

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarPass, setMostrarPass] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ok = await login(email, password);
    if (!ok) {
      setError("Credenciales incorrectas");
      return;
    }

    navigate("/");
  };

  return (
    <div className="login-container">

      <div className="login-card">
        <h2 className="login-title">Iniciar Sesión</h2>
        <p className="login-subtitle">Gestor Documental</p>

        {error && <p className="login-error">{error}</p>}

        <form onSubmit={handleSubmit}>

          <label className="login-label">Correo</label>
          <input
            type="email"
            className="login-input"
            placeholder="usuario@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="login-label">Contraseña</label>
          <div className="password-wrapper">
            <input
              type={mostrarPass ? "text" : "password"}
              className="login-input"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="show-btn"
              onClick={() => setMostrarPass(!mostrarPass)}
            >
              {mostrarPass ? "Ocultar" : "Mostrar"}
            </button>
          </div>

          <button type="submit" className="login-btn">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}