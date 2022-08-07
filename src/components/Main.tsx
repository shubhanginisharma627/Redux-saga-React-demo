import React from 'react';

import { addToCart, removeFromcart, Emptycart } from '../redux/action';
import { useDispatch } from 'react-redux';
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';
import { IRootState } from '../redux/rootReducer';
import { data, Product } from '../redux/Interface';
const Main=()=>{
     const dispatch =useDispatch();
     const data = useSelector((state: IRootState)=>state.productData);
 
     console.warn("data in main component from saga",data);

   
     return(
          <div>
          <button onClick={()=>dispatch(addToCart(data))}>Add To Cart</button>

               <div>
                <button onClick={()=>dispatch(removeFromcart(data))}>Remove From cart</button>
                </div>
                <div>
               <button onClick={()=>dispatch(Emptycart(data))}>Empty cart</button>
               </div>
               <div>
               <button onClick={()=>dispatch(productList())}>Product List</button>
                    </div>
                    <div className='product-container'>
                    {
                       [data].map((item:any) =><div key={item.id}>
                       <img src ={item.photo} alt="photo" key={item.photo} />
                       <p >Name  :{item.name}</p>
                       <p>Color :{item.color}</p>
                       <p>Brand :{item.brand}</p>
                       <p>Price :{item.price}</p>
                       <p>Category :{item.category}</p>
                   </div> )
                       
                    }
                   </div>

          </div>
     )
}


export default Main