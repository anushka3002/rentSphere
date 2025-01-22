import axios from "axios"
import { GET_PRODUCTS, GET_PRODUCTS_FAIL, GET_PRODUCTS_SUCCESS, GET_SINGLE_PRODUCT, GET_SINGLE_PRODUCT_FAIL, GET_SINGLE_PRODUCT_SUCCESS, UPDATE_WISHLIST_FAIL, UPDATE_WISHLIST_SUCCESS, WISHLIST } from "../Constant/constant"

export const getData = (location) => async (dispatch) =>{
    try{
        dispatch({
            type: GET_PRODUCTS
        })
        const url = location ? `https://airbnb-backend-eight-omega.vercel.app/api/products?location=${location}` : 'https://airbnb-backend-eight-omega.vercel.app/api/products'
        const data = await axios.get(url)
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

export const getSingleData = (id) => async (dispatch) =>{
    try{
        dispatch({
            type: GET_SINGLE_PRODUCT
        })
        const data = await axios.get(`https://airbnb-backend-eight-omega.vercel.app/api/products/${id}`)
        dispatch({
            type: GET_SINGLE_PRODUCT_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: GET_SINGLE_PRODUCT_FAIL,
            payload: error
        })
    }
}

export const wishlist = (id, value) => async (dispatch) =>{
    try{
        dispatch({
            type: WISHLIST
        })
        const updatedValue = {'saved': value}
        const data = await axios.put(`https://airbnb-backend-eight-omega.vercel.app/api/products/${id}`,updatedValue)
        dispatch({
            type: UPDATE_WISHLIST_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: UPDATE_WISHLIST_FAIL,
            payload: error
        })
    }
}