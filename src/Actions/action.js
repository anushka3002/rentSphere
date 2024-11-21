import axios from "axios"
import { GET_PRODUCTS, GET_PRODUCTS_FAIL, GET_PRODUCTS_SUCCESS } from "../Constant/constant"

export const getData = () => async (dispatch) =>{
    try{
        dispatch({
            type: GET_PRODUCTS
        })
        const data = await axios.get('https://airbnb-backend-eight-omega.vercel.app/api/products')
        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: GET_PRODUCTS_FAIL,
            payload: error
        })
    }
}