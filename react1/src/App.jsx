import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CreateIcon from '@mui/icons-material/Create';
import InfoIcon from '@mui/icons-material/Info';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

function createData(id, name, calories, fat, carbs, protein) {
  return { id, name, calories, fat, carbs, protein };
}



export default function App() {
  const initialRows = [
  createData(1,'Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData(2,'Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData(3,'Eclair', 262, 16.0, 24, 6.0),
  createData(4,'Cupcake', 305, 3.7, 67, 4.3),
  createData(5,'Gingerbread', 356, 16.0, 49, 3.9),
];

const [rows, setRows] = useState(initialRows)
const [open, setOpen] = useState(false);
const [selectedRow, setSelectedRow] = useState(null);
const [editName, setEditName] = useState('');
const [editCalories, setEditCalories] = useState('');
const [editFat, setEditFat] = useState('');
const [editCarbs, setEditCarbs] = useState('');
const [editProtein, setEditProtein] = useState('');

const [infoOpen, setInfoOpen] = useState(false);
const [infoData, setInfoData] = useState(null);

const [addOpen, setAddOpen] = useState(false);

const [addName, setAddName] = useState('');
const [addCalories, setAddCalories] = useState('');
const [addFat, setAddFat] = useState('');
const [addCarbs, setAddCarbs] = useState('');
const [addProtein, setAddProtein] = useState('');

const [search, setSearch] = useState('');

const handleAdd = () => {
  if (!addName.trim()) {
    alert('Name-ро ворид кун!');
    return;
  }

  const newRow = {
    id: Date.now(),
    name: addName,
    calories: Number(addCalories),
    fat: Number(addFat),
    carbs: Number(addCarbs),
    protein: Number(addProtein),
  };

  setRows([...rows, newRow]);

  setAddName('');
  setAddCalories('');
  setAddFat('');
  setAddCarbs('');
  setAddProtein('');

  setAddOpen(false);
};

const handleInfo = (row) => {
  setInfoData(row);
  setInfoOpen(true);
};

const handleDelete =(idToDelete) =>{
  const updatedRows = rows.filter((row) => row.id !== idToDelete);
    setRows(updatedRows);
}

  const handleClose = () => {
    setOpen(false);
  };

 const handleOpen = (row) => {
  setSelectedRow(row);
  setEditName(row.name);
   setEditCalories(row.calories);
    setEditFat(row.fat);
     setEditCarbs(row.carbs);
      setEditProtein(row.protein);
  setOpen(true);
};

const handleSave = () => {
  if (!selectedRow) return;

  const updatedRows = rows.map((row) =>
    row.id === selectedRow.id
      ? { ...row, name: editName, calories: editCalories, fat: editFat, carbs:editCarbs, protein:editProtein,  }
      : row
  );

  setRows(updatedRows);
  setOpen(false);
};

const filteredRows = rows.filter((row) =>
  row.name.toLowerCase().includes(search.toLowerCase())
);
  return (
    <>
   
    <Stack spacing={2} direction="row" sx={{ mb: 2 }}>
<TextField
  label="Search..."
  variant="outlined"
  size="small"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon />
      </InputAdornment>
    ),
  }}
/> <br />
<Button
  variant="contained"
  color="success"
  onClick={() => setAddOpen(true)}
>
  ADD +
</Button>
</Stack>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  <TableCell align="right">Actions&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
               <TableCell align="right">
     <Tooltip title="Delete" 
      placement="top" arrow>
  <IconButton onClick={() => handleDelete(row.id)}>
    <DeleteIcon />
  </IconButton></Tooltip>
<Tooltip title="Edit"  placement="top" arrow>
   <IconButton onClick={() => handleOpen(row)}>
  <CreateIcon />
</IconButton>
  </Tooltip>
  <Tooltip title="Info"  placement="top" arrow>
   <IconButton onClick={() => handleInfo(row)}>
  <InfoIcon/>
  </IconButton>
  </Tooltip>


               </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

 <div>
     <Dialog open={open} onClose={handleClose}>
  <DialogTitle>Edit Dessert</DialogTitle>

  <DialogContent>
    <Stack spacing={2}>
    <TextField
  label="Name"
  value={editName}
  onChange={(e) => setEditName(e.target.value)}
  fullWidth
/>
 <TextField
  label="calories"
  value={editCalories}
  onChange={(e) => setEditCalories(e.target.value)}
  fullWidth
/>
 <TextField
  label="fat"
  value={editFat}
  onChange={(e) => setEditFat(e.target.value)}
  fullWidth
/> <TextField
  label="carbs"
  value={editCarbs}
  onChange={(e) => setEditCarbs(e.target.value)}
  fullWidth
/>
  <TextField
  label="protein"
  value={editProtein}
  onChange={(e) => setEditProtein(e.target.value)}
    sx={{ width: "500px" }}
  fullWidth
/>
</Stack>
  </DialogContent>


  <DialogActions>
    <Button onClick={handleClose} color="error">
      Cancel
    </Button>

    <Button variant="contained" onClick={handleSave}>
  Save
</Button>
  </DialogActions>
</Dialog>
    </div>
<Dialog
  open={infoOpen}
  onClose={() => setInfoOpen(false)}
  fullWidth
  maxWidth="sm"
>
  <DialogTitle>Information</DialogTitle>

  <DialogContent dividers>
    {infoData ? (
      <Stack spacing={2}>
        <TextField label="Name"
          value={infoData.name}
          fullWidth
          slotProps={{ input: { readOnly: true } }}
        />

        <TextField label="Calories"
          value={infoData.calories}
          fullWidth
          slotProps={{ input: { readOnly: true } }}
        />

        <TextField label="Fat (g)"
          value={infoData.fat}
          fullWidth
          slotProps={{ input: { readOnly: true } }}
        />

        <TextField label="Carbs (g)"
        value={infoData.carbs}
          fullWidth
          slotProps={{ input: { readOnly: true } }}
        />

        <TextField label="Protein (g)"
          value={infoData.protein}
          fullWidth
          slotProps={{ input: { readOnly: true } }}
        />
      </Stack>
    ):null}
  </DialogContent>

  <DialogActions>
    <Button onClick={() => setInfoOpen(false)} color="error">Close</Button>
  </DialogActions>
</Dialog>

<Dialog
  open={addOpen}
  onClose={() => setAddOpen(false)}
  fullWidth
  maxWidth="sm"
>
  <DialogTitle>Add Dessert</DialogTitle>

  <DialogContent dividers>
    <Stack spacing={2} sx={{ mt: 1 }}>
      <TextField
        label="Name"
        value={addName}
        onChange={(e) => setAddName(e.target.value)}
        fullWidth
      />

      <TextField
        label="Calories"
        type="number"
        value={addCalories}
        onChange={(e) => setAddCalories(e.target.value)}
        fullWidth
      />

      <TextField
        label="Fat"
        type="number"
        value={addFat}
        onChange={(e) => setAddFat(e.target.value)}
        fullWidth
      />

      <TextField
        label="Carbs"
        type="number"
        value={addCarbs}
        onChange={(e) => setAddCarbs(e.target.value)}
        fullWidth
      />

      <TextField
        label="Protein"
        type="number"
        value={addProtein}
        onChange={(e) => setAddProtein(e.target.value)}
        fullWidth
      />
    </Stack>
  </DialogContent>

  <DialogActions>
    <Button
      color="error"
      onClick={() => setAddOpen(false)}
    >
      Cancel
    </Button>

    <Button
      variant="contained"
      color="success"
      onClick={handleAdd}
    >
      Save
    </Button>
  </DialogActions>
</Dialog>

    </>
  )
}
