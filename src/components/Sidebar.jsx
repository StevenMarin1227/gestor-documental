import { Link } from "react-router-dom";
import { useState } from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import GroupIcon from "@mui/icons-material/Group";

import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderIcon from "@mui/icons-material/Folder";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import LoginIcon from "@mui/icons-material/Login";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  const { user } = useContext(AuthContext);

  return (
    <div
      style={{
        width: collapsed ? "80px" : "250px",
        background: "#1e1e2d",
        color: "white",
        height: "100vh",
        paddingTop: "20px",
        paddingLeft: collapsed ? "10px" : "20px",
        paddingRight: "10px",
        transition: "0.3s ease",
        overflow: "hidden"
      }}
    >

      {/* Botón para colapsar */}
      <div
        style={{
          display: "flex",
          justifyContent: collapsed ? "center" : "flex-end",
          marginBottom: "20px"
        }}
      >
        <IconButton onClick={toggleSidebar} sx={{ color: "white" }}>
          <MenuIcon />
        </IconButton>
      </div>

      {/* Título */}
      {!collapsed && (
        <h2 style={{ marginBottom: "30px" }}>Gestor</h2>
      )}

      <List>

        {/* Dashboard */}
        <ListItemButton component={Link} to="/" sx={{ color: "white", "&:hover": { backgroundColor: "#2a2a3d" } }}>
          <ListItemIcon><DashboardIcon sx={{ color: "white" }} /></ListItemIcon>
          {!collapsed && <ListItemText primary="Dashboard" />}
        </ListItemButton>

        {user?.rol === "admin" && (
          <ListItemButton component={Link} to="/usuarios">
            <ListItemIcon>
              <GroupIcon sx={{ color: "white" }} />
            </ListItemIcon>
            {!collapsed && <ListItemText primary="Usuarios" />}
          </ListItemButton>
        )}

        {/* Repositorio */}
        <ListItemButton component={Link} to="repositorio" sx={{ color: "white", "&:hover": { backgroundColor: "#2a2a3d" } }}>
          <ListItemIcon><FolderIcon sx={{ color: "white" }} /></ListItemIcon>
          {!collapsed && <ListItemText primary="Repositorio" />}
        </ListItemButton>

        {/* Subir Documento */}
        <ListItemButton component={Link} to="subir" sx={{ color: "white", "&:hover": { backgroundColor: "#2a2a3d" } }}>
          <ListItemIcon><UploadFileIcon sx={{ color: "white" }} /></ListItemIcon>
          {!collapsed && <ListItemText primary="Subir Documento" />}
        </ListItemButton>

        {/* Login */}
        <ListItemButton component={Link} to="login" sx={{ color: "white", "&:hover": { backgroundColor: "#2a2a3d" } }}>
          <ListItemIcon><LoginIcon sx={{ color: "white" }} /></ListItemIcon>
          {!collapsed && <ListItemText primary="Login" />}
        </ListItemButton>

      </List>
    </div>
  );
}