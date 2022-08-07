import React from 'react';

import { addToCart, removeFromcart, Emptycart } from '../redux/action';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';
import { IRootState } from '../redux/rootReducer';
import { data, Product } from '../redux/Interface';
const Main = () => {
     const dispatch = useDispatch();
     const data = useSelector((state: IRootState) => state.productData);

     console.warn("data in main component from saga", data);

     useEffect(() => {
          dispatch(productList())
          
     }, [])

     return (
          <div>

               <div>
                    <button onClick={() => dispatch(Emptycart(data))}>Empty cart</button>
               </div>
               <div className='product-container'>
                    {
                         Array.isArray(data) ? data.map((item: any) => <div key={item.id} className='product-item'>
                              <img src={item.photo} alt="photo" key={item.photo} className="image" />
                              <p >Name  :{item.name}</p>
                              <p>Color :{item.color}</p>
                              <p>Brand :{item.brand}</p>
                              <p>Price :{item.price}</p>
                              <p>Category :{item.category}</p>
                              <div><button onClick={() => dispatch(addToCart(item))}>Add to Cart</button></div>
                              <div><button onClick={() => dispatch(removeFromcart(item.id))}>Remove from Cart</button></div>
                         </div>) : []

                    }
               </div>

          </div>
     )
}


export default Main