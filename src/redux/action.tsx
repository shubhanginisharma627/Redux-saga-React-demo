
import { Add_To_Cart, REMOVE_From_Cart,EMPTY_Cart } from "./constant"
import {data} from './Interface'



export const addToCart =(props:data) => {
   
    return {
        type:Add_To_Cart,
        data: props
}
}
export const removeFromcart =(props:data) => {
    console.warn("action called",props)
    return {
        type:REMOVE_From_Cart,
        data: props
}
}

export const Emptycart =(props:data) => {
    console.warn("action called",props)
    return {
        type:EMPTY_Cart,
        data: props
}
}