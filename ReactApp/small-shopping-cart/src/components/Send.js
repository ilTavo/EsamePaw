import React from "react";
import axios from 'axios';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function Send(props) {
  const [open, setOpen] = React.useState(false);
  const [send, setSend] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const { cartItems,countCartItems,totalPrice} =props;
    /*### COSTRUISCO LE PARTI DELLA DATA DA PASSARE ####*/
    const today = new Date();
    var month = ("0" + (today.getMonth() + 1)).slice(-2);
    var date = ("0" + today.getDate()).slice(-2);
    var currentHours = ("0" + today.getHours()).slice(-2);
    var articoli=[];
    /*##### PER OGNI COMPONENTE DEL CARRELLO AGGIUNGO AL RISPETTIVO INDICE LA COMBO NOME PREZZO ALL'ARRAY CORRISPONDENTE ###*/
    cartItems.map((item,i) => (
      articoli[i]= item.nome_prod+"-"+item.qty      
     ));
    function invia() {
    var res;    
    axios.post('http://127.0.0.1:8000/ordinazioni/', { 
        data: today.getFullYear()+"-"+month+"-"+date+"T"+currentHours+":"+today.getMinutes()+":00Z",       
        nome_prenot: localStorage.getItem('nome'),
        carrello: articoli,
        totale: totalPrice,
    })
      .then(function (response) {
          res=response;
        console.log(response);
        setSend(true);
        setTimeout(function(){
          window.location.reload();
       }, 1500);
      })
    }
      return(
      <><Button variant="outlined" color="success" onClick={handleOpen} endIcon={<SendIcon />}>
          INVIA ORDINE
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {send === true ? (
            <Box sx={style}>
        <Alert severity="success"  >Ordine Inviato!</Alert>
        </Box>
      ) : (
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          CONFERMA ORDINE
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Sei siucuro del tuo ordine? Preso tutto?
        </Typography>
        <Stack spacing={2} direction="row">
        <Button variant="outlined" color="success" onClick={invia} endIcon={<SendIcon />}>
        INVIA ORDINE
      </Button> <Button variant="outlined" color="error" onClick={handleClose} endIcon={<CloseIcon />}>
        HO dimenticato una cosa
      </Button>
      </Stack>
      </Box>
  )}
            
          </Modal>
          
          </>);
}