import Header from './components/Header';
import Main from './components/Main';
import Login from './components/Login';

import data from './data';
import { useState } from 'react';
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
  const today = new Date();
    var year =  today.getFullYear();
    var month = ("0" + (today.getMonth() + 1)).slice(-2);
    var date = ("0" + today.getDate()).slice(-2);
    var oggi= year+"-"+month+"-"+date;       
    localStorage.setItem('oggi', oggi);
  if(localStorage.getItem('token') && localStorage.getItem('reset')>oggi){
  return (
    <div className="App">      
      <div className="row">
        <Main products={products} onAdd={onAdd} ></Main>
        
        <Header countCartItems={cartItems.length}
        cartItems={cartItems} 
        onAdd={onAdd}
        onRemove={onRemove}></Header>
      </div>
    </div>
  );
  } else {
    return (
      <div className="App">
        
        <div className="row">
          <Login></Login>
      </div>
      </div>
    );
  }
}

export default App;
