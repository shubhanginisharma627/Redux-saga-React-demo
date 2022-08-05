import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector } from 'react-redux';
import { IRootState } from '../redux/rootReducer';
const Header=()=> {
    const result = useSelector((state: IRootState)=>state.cartData);
    console.warn("redux data in header",result)
  return (
    <div className='header'>
        <div className='cart-div'>
        <span>0</span>
        <AddShoppingCartIcon className='shop'></AddShoppingCartIcon>
        </div>
    </div>
  )
}
export default Header;