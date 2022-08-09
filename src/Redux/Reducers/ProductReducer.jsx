import { ActionTypes } from "../Contants/ActionTypes"

const initialState={
    products:[
        {
            id:1,
            title:"Arun",
            category:"Programmer"
        }
    ]
}

export const productReducer=(state =initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_PRODUCTS: 
            return {...state, product:payload}
        default :
            return state
    }
}

export const selectedProductReducer=(state={},{type,payload})=>{
    switch(type){
        case ActionTypes.SELECTED_PRODUCTED: 
            return {...state, ...payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCTED: 
            return {}
        default :
            return state
    }
}