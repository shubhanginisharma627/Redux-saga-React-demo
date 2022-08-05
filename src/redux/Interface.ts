export type data={
    name:string 
    type:string 
    price:number
    color:string
}
 

export interface Action {
    type:string
    data:data
}