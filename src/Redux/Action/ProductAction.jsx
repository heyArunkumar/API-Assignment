import {ActionTypes} from '../Contants/ActionTypes'

export const setProductes=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}


export const selectedProductes=(products)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCTED,
        payload:products
    }
}

export const removeSelectedProductes=()=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCTED,
    
    }
}