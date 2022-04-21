import React from "react";
import axios from 'axios';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

export default function Conferma(props) {
  const [open, setOpen] = React.useState(false);
  const [send, setSend] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const {prodotto} =props;
  
    var res;    
    axios.get('http://127.0.0.1:8000/ordinazioni/'+prodotto+'/', { 
    })
      .then(function (response) {
          res=response.data;
        console.log("get"+res.carrello);
      },[])
      async function conf(){      
        axios.put('http://127.0.0.1:8000/ordinazioni/'+prodotto+'/', {
        'data': res.data,
        'accettazione': true,
        'consegnato': true,
        'nome_prenot': res.nome_prenot,
        'carrello': res.carrello,
        'totale': res.totale
    } )
      .then(function () {
       console.log("PUT"+res)
      })
    }
      return(
      <Button onClick={conf}>
          INVIA ORDINE
        </Button>
        );
 }