import React from 'react';
import Send from './Send';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove, countCartItems} = props;
  const nome_prenot = localStorage.getItem('nome');
  const totalPrice = cartItems.reduce((a,c)=> a + c.prezzo *c.qty,0);
  return (
    <Box textAlign='center'>
      <h2>Ordinazione</h2>      
        {cartItems.length === 0 && <div>Nessun prodotto</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row" align='center'>
            <p class="cart-list"><strong>{item.nome_prod}</strong> N. {item.qty}  =  <span class="tot" value={item.prezzo * item.qty}>{item.prezzo * item.qty}</span> €</p>
                      
              <IconButton onClick={() => onRemove(item)} className="remove">
              <DeleteIcon></DeleteIcon>
              </IconButton>
              
              <IconButton onClick={() => onAdd(item)} className="add">
              <AddShoppingCartIcon />
              </IconButton>
            

            <div className="col-2 text-right">
            
            </div>
          </div>
        ))}
        
        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row" align="center">
              
                <strong>TOTALE  {totalPrice}€</strong>
              
            </div>
            <hr />
            <div className="row">
              <Send cartItems={cartItems} countCartItems={countCartItems} totalPrice={totalPrice}></Send>
            </div>
          </>
        )}
      
      </Box>
  );
}
