import { useState, useEffect } from "react";
import { IconButton, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FormDataGrid from '../layout/FormDataGrid';
import { useNavigate } from 'react-router-dom';
import api from "../../api";

function AlunosTable() {
  const [rows, setRows] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getAll();
  }, []);

  const getAll = () => {
    api
      .get('/api/alunos/')
      .then((res) => res.data)
      .then((data) => {
        setRows(data);
        console.log(data)
      })
      .catch((err) => alert(err))
  }

  const deleteRow = (id) => {
    api
        .delete(`/api/alunos/${id}/`)
        .then((res) => {
            if (res.status === 204) alert("Aluno deletado!");
            else alert("Falha ao deletar Aluno.");
            getAll();
        })
        .then(data => {
          setRows(rows.filter((row) => row.id !== id))

        })
        .catch((error) => alert(error));
};
  
  const handleEdit = (id) => {
    navigate(`/aluno/editar/${id}`);
  };

  const handleDelete = (id) => {
    deleteRow(id);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nome', headerName: 'Nome', width: 150 },
    { field: 'telefone', headerName: 'Telefone', width: 150 },
    { field: 'documento', headerName: 'Documento', type: 'text', width: 150 },
    { field: 'rua', headerName: 'Rua', type: 'text', width: 200 },
    { field: 'numero', headerName: 'Número', type: 'number', width: 100 },
    { field: 'bairro', headerName: 'Bairro', type: 'text', width: 150 },
    { field: 'cidade', headerName: 'Cidade', type: 'text', width: 150 },
    { field: 'estado', headerName: 'Estado', type: 'text', width: 50 },
    {
      field: 'Opções',
      headerName: 'Opções',
      width: 150,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <IconButton 
            color="primary" 
            onClick={() => handleEdit(params.id)}
            aria-label="editar"
          >
            <EditIcon />
          </IconButton>
          <IconButton 
            color="error" 
            onClick={() => handleDelete(params.id)}
            aria-label="deletar"
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
      <FormDataGrid rows={rows} columns={columns}></FormDataGrid>
  );
}

export default AlunosTable