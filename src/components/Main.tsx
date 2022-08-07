import React from 'react';

import { addToCart, removeFromcart, Emptycart } from '../redux/action';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';
import { IRootState } from '../redux/rootReducer';

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
                              <div >Name  :{item.name}</div>
                              <div>Color :{item.color}</div>
                              <div>Brand :{item.brand}</div>
                              <div>Price :{item.price}</div>
                              <div>Category :{item.category}</div>
                              <div><button onClick={() => dispatch(addToCart(item))}>Add to Cart</button></div>
                              <div><button onClick={() => dispatch(removeFromcart(item.id))}>Remove from Cart</button></div>
                         </div>) : []

                    }
               </div>

          </div>
     )
}


export default Main