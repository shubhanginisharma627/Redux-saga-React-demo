
import { Add_To_Cart, REMOVE_To_Cart } from "./constant"
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
            console.log("Add_To_Cart Condition",action)
            return [action.data,...data]
            break;
        case REMOVE_To_Cart:
            console.log("Remove_To_Cart Condition",action)
            return 1-1;
            break;
        default:
            return data;
            break;

    }
      
}

export default cartData