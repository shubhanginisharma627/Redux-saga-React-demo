import React from 'react'
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
     const product ={
       name:"I-phone",
       type:'moblie',
       price:1000000,
       color:'red'
     }
     return(
          <div>
              
               <div>
                <button onClick={()=>dispatch(removeFromcart(product))}>Remove From cart</button>
                </div>
                <div>
               <button onClick={()=>dispatch(Emptycart(product))}>Empty cart</button>
               </div>
               <div>
               <button onClick={()=>dispatch(productList())}>Product List</button>
                    </div>
                    <div className='product-container'>
                    {
                       [data].map((item:any) =><div>
                         <img src ={item.photo} alt="photo"/>
                         <div>Name  :{item.name}</div>
                         <div>Color :{item.color}</div>
                         <div>Brand :{item.brand}</div>
                         <div>Price :{item.price}</div>
                         <div>Category :{item.category}</div>
                         <div>
                         <button onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
                         <button onClick={()=>dispatch(removeFromcart(product))}>Remove From cart</button>
                         </div>
                       </div> )
                       
                    }
                   </div>
          </div>
     )
}


export default Main