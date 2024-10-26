import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Nome', headerName: 'Nome', width: 150 },
  { field: 'E-mail', headerName: 'E-mail', width: 250 },
  { field: 'Admin', headerName: 'Admin', type: 'bool', width: 100 },
  { field: 'Comum', headerName: 'Comum', type: 'bool', width: 100 },
  { field: 'Opções', headerName: 'Opções', width: 150 },
];

const rows = [{
    "id": "472f1f01-e79c-485c-8684-d5fe10cb26f5",
    "Nome": "Shanie Ashbee",
    "E-mail": "sashbee0@wunderground.com",
    "Admin": false,
    "Comum": true,
    "Opções": "Solarbreeze"
  }, {
    "id": "7bf29a0c-0ff9-4c4a-a14a-c1d98274733f",
    "Nome": "Jarrid Button",
    "E-mail": "jbutton1@nsw.gov.au",
    "Admin": false,
    "Comum": false,
    "Opções": "Greenlam"
  }, {
    "id": "8de41438-0ba6-400d-9281-395866fae314",
    "Nome": "Carmita Ekell",
    "E-mail": "cekell2@army.mil",
    "Admin": false,
    "Comum": true,
    "Opções": "Subin"
  }, {
    "id": "e4391191-0d41-4b2c-bc76-a167f6f748f2",
    "Nome": "Natal Laviste",
    "E-mail": "nlaviste3@1688.com",
    "Admin": true,
    "Comum": false,
    "Opções": "Home Ing"
  }, {
    "id": "02c6c5b0-db24-43ef-ba6f-0d404e3c128e",
    "Nome": "Alphard Delhanty",
    "E-mail": "adelhanty4@nasa.gov",
    "Admin": true,
    "Comum": false,
    "Opções": "Y-Solowarm"
  }, {
    "id": "3315a843-2ac0-43ba-a696-62ab87ba6cfd",
    "Nome": "Wandie Manilove",
    "E-mail": "wmanilove5@cloudflare.com",
    "Admin": true,
    "Comum": true,
    "Opções": "Ronstring"
  }, {
    "id": "33e37357-eb05-48bb-bffa-ed0be99623ae",
    "Nome": "Georgiana Barles",
    "E-mail": "gbarles6@furl.net",
    "Admin": false,
    "Comum": true,
    "Opções": "Bigtax"
  }, {
    "id": "f94e2481-848a-4956-97a1-f463ad5cb784",
    "Nome": "Dominique Keaveny",
    "E-mail": "dkeaveny7@cam.ac.uk",
    "Admin": false,
    "Comum": true,
    "Opções": "Otcom"
  }, {
    "id": "d9dda95d-447b-476a-89fd-2b6e25c66094",
    "Nome": "Delinda Stradling",
    "E-mail": "dstradling8@friendfeed.com",
    "Admin": true,
    "Comum": false,
    "Opções": "Bigtax"
  }, {
    "id": "27e5f633-a435-4f8f-8831-36fc051650b0",
    "Nome": "Georas Hodgets",
    "E-mail": "ghodgets9@yahoo.co.jp",
    "Admin": true,
    "Comum": true,
    "Opções": "Cardguard"
  }]

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}