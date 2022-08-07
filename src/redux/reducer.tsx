
import { Add_To_Cart, EMPTY_Cart, REMOVE_From_Cart } from "./constant"
import {Action} from './Interface'


   

const cartData =(data=[],action:Action)=>{
    //if else statement
    /*if(action.type===Add_To_Cart){
    console.log("Add_To_Cart Condition",action)
    return action.data
    }
    else{
        
        return "no action matched"
    }*/
     

    switch(action.type){
        case Add_To_Cart:
            console.log("Add_To_Cart Condition",action.data)
            const arr1 = [action.data,...data]
            return arr1
            
        case REMOVE_From_Cart:
            console.log("Remove_To_Cart Condition",action)
            // data.length=data.length-1 
           
            const remainingItem =data.filter((item:any)=> item.id !== data.id)
             return [...data]
        case EMPTY_Cart:
            console.log("Empty cart",action)
             data =[] 
             return [...data]
        default:
            return data;
            

    }
      
}

export default cartData