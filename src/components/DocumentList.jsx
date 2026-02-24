import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

function DocumentList() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    // Simulación de datos (luego se cambia por API real)
    setDocs([
      { id: 1, nombre: "Procedimiento SST", tipo: "Procedimiento", proceso: "SST", version: "1.0" },
      { id: 2, nombre: "Formato Inspecciones", tipo: "Formato", proceso: "Calidad", version: "2.0" },
    ]);
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Nombre</TableCell>
          <TableCell>Tipo</TableCell>
          <TableCell>Proceso</TableCell>
          <TableCell>Versión</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {docs.map((d) => (
          <TableRow key={d.id}>
            <TableCell>{d.nombre}</TableCell>
            <TableCell>{d.tipo}</TableCell>
            <TableCell>{d.proceso}</TableCell>
            <TableCell>{d.version}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DocumentList;