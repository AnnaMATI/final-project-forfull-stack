import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'name', width: 130 },
  { field: 'email', headerName: 'email', width: 130 },


];

const rows = [
  { id: 1, name: 'Snow', email: 'Jon.snow@mail.ru' },
  { id: 2, name: 'Lannister', email: 'Cersei.carsei@mail.ru'},
  { id: 3, name: 'Lannister', email: 'Jaime.jaime@mail.ru' },

];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}