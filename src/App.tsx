import React from 'react';
import logo from './logo.svg';
import {addToCart, removeFromcart,Emptycart} from './redux/action';
import { useDispatch } from 'react-redux';
import './App.css';
import Header from './components/Header';
function App() {
  const dispatch =useDispatch();
  const product ={
    name:"I-phone",
    type:'moblie',
    price:1000000,
    color:'red'
  }
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
      <button onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>

      <button onClick={()=>dispatch(removeFromcart(product))}>Remove From cart</button>
      <button onClick={()=>dispatch(Emptycart(product))}>Emoty cart</button>
      </header>
    </div>
  );
}

export default App;
