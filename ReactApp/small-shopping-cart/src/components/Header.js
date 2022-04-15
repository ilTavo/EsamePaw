import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Basket from './Basket';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LocalGroceryStoreSharpIcon from '@mui/icons-material/LocalGroceryStoreSharp';


const drawerWidth = 300;
const fabStyle = {
  position: 'fixed',
  bottom:30,
  right: 10,
};

export default function PersistentDrawerRight(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { cartItems, onAdd, onRemove, countCartItems} = props

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const list =  (
    <Box>
      <Basket
          cartItems={cartItems}
          countCartItems={cartItems.length}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      <Divider />
     
    </Box>
  )
  return (
    <div>

      <Fab size="large" color="primary"
        onClick={handleDrawerOpen}
        sx={fabStyle}
      >
        <Stack spacing={2} direction="row">
          <Badge badgeContent={props.countCartItems ? (
            <span>{props.countCartItems}</span>
          ) : (
            '0'
          )} color="secondary">
            <LocalGroceryStoreSharpIcon color="white" />
          </Badge>
        </Stack>
      </Fab>
    
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
        },
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
        
        <List>
        {list}

        </List>
        <Divider />
        <IconButton onClick={handleDrawerClose} variant="outlined" color="error">
        X
        </IconButton>
      </Drawer>    
      </div>
  );
}
