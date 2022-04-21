import Header from './components/Header';
import Main from './components/Main';
import Login from './components/Login';
import data from './data';
import { useState } from 'react';
import Fab from '@mui/material/Fab';
import LogoutIcon from '@mui/icons-material/Logout';
import Dasboard from './components/Dashboard';
function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
    
  };
  const fabStyle = {
    position: 'fixed',
    bottom: 16,
    left: 16,
  };
  const today = new Date();
    var year =  today.getFullYear();
    var month = ("0" + (today.getMonth() + 1)).slice(-2);
    var date = ("0" + today.getDate()).slice(-2);
    var oggi= year+"-"+month+"-"+date;       
    localStorage.setItem('oggi', oggi);
  
  return (
    <div className="App">      
      <div className="row">
      {localStorage.getItem('token') && localStorage.getItem('reset')>oggi && localStorage.getItem('staff')=="false" ? <><Main products={products} onAdd={onAdd}></Main><Header countCartItems={cartItems.length}
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}></Header></> : localStorage.getItem('staff')=="true" ? <Dasboard></Dasboard> : <Login></Login>}
  </div>
      <Fab sx={fabStyle} onClick ={logout}>
            <LogoutIcon></LogoutIcon>
          </Fab>
    </div>
   
  )
  async function logout() {
    localStorage.clear();
    window.location.reload(true);

  }
}
export default App
