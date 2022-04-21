import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SendIcon from '@mui/icons-material/Send';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Conferma from './Conferma';
import Ordinazione from './Ordinazione';
import axios from 'axios'

function Dashboard() {
  const[ordini, setOrdini] = useState([])
  useEffect(() => {
      axios.get('http://127.0.0.1:8000/ordinazioni/',[])
      .then(res => {
          console.log(res)
          setOrdini(res.data)
          console.log(ordini.data)
      },)
      .catch(err =>{
          console.log(err)
      })
  },[])
  return (
     
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>NOME PRENOTAZIONE</TableCell>
                <TableCell align="right">zoom</TableCell>
                <TableCell align="right">conferma/cac</TableCell>
                <TableCell align="right">Totale</TableCell>
                <TableCell align="right">Consegna</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
      
      {
          ordini.map(ordini =>  <TableRow
           
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
              <TableCell component="th" >
              <strong>{ordini.nome_prenot} - {ordini.data}</strong>
             
              </TableCell>
              <TableCell align="right"><Ordinazione list={ordini.carrello}></Ordinazione></TableCell>
              <TableCell align="right"><Stack direction="row" spacing={2} justifyContent="flex-end" alignItems="stretch">
      <Button variant="outlined" color="error">
        X
      </Button>
      <Button variant="contained" color="success">
        V
      </Button>
    </Stack>
    </TableCell>
    <TableCell align="right">{ordini.totale} €</TableCell>
    <TableCell align="right">
        <Conferma prodotto={ordini.id}> {ordini.id}</Conferma>
    </TableCell>
</TableRow>           
          
         )
      }
     
     </TableBody>
      </Table>
    </TableContainer>
    
  );
}

export default Dashboard;