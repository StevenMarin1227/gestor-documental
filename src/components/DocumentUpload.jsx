import { useForm } from "react-hook-form";
import { Button, TextField, Box } from "@mui/material";

function DocumentUpload() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("archivo", data.archivo[0]);
    formData.append("nombre", data.nombre);
    formData.append("tipo", data.tipo);
    formData.append("proceso", data.proceso);

    // Aquí se hace la llamada al backend
    console.log("Documento enviado", data);
  };

  return (
    <Box sx={{ p: 3, background: "#fff", borderRadius: 2 }}>
      <h2>Subir Documento</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="Nombre del documento"
          {...register("nombre")}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Tipo (Procedimiento, Formato...)"
          {...register("tipo")}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Proceso (Talento Humano, SST, Jurídica...)"
          {...register("proceso")}
          sx={{ mb: 2 }}
        />

        <input type="file" {...register("archivo")} />

        <Button type="submit" variant="contained" sx={{ mt: 3 }}>
          Subir documento
        </Button>
      </form>
    </Box>
  );
}

export default DocumentUpload;