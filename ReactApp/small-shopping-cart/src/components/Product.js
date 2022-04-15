import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Stack } from '@mui/material';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
   
    <Card sx={{ minWidth: 275 }}>
    <CardContent>      
      <Typography variant="h5" color="text.primary" textTransform="uppercase">
      {product.nome_prod}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      {product.description}
      <br></br>
      {product.note}
      </Typography>      
      <Typography sx={{ fontSize: 20 }}>
       €{product.prezzo}
      </Typography>
    </CardContent>
    
    <Stack direction="row"
    justifyContent="space-evenly"
    alignItems="center"
    spacing={12}
    background='secondary'>
      <Fab  onClick={() => onAdd(product)} size="small" color='success'>
        <AddIcon ></AddIcon>
      </Fab >
      </Stack>
      
    
  </Card>
  );
}
