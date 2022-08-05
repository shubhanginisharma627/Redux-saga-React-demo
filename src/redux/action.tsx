
import { Add_To_Cart, REMOVE_To_Cart } from "./constant"
import {data} from './Interface'



export const addToCart =(props:data) => {
   
    return {
        type:Add_To_Cart,
        data: props
}
}
export const removeTocart =(props:data) => {
    console.warn("action called",props)
    return {
        type:REMOVE_To_Cart,
        data: props
}
}