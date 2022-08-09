import {combineReducers} from 'redux';
import { productReducer,selectedProductReducer } from './ProductReducer';
 

export const reducer = combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer
})