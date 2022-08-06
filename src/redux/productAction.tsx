
import { PRODUCT_LIST } from "./constant"
import { Product } from "./Interface";

export const productList =() => {
    /*let data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    data =await data.json()
    console.warn("action called",data)*/
    return {
        type:PRODUCT_LIST,
         
}
}
