import { configureStore } from '@reduxjs/toolkit';
import { getProducts, getSingleProduct, updateWishlist } from './Reducers/reducer';

const store = configureStore({
  reducer: {
    data : getProducts,
    details: getSingleProduct,
    wishlistData: updateWishlist
  },
});

export default store;
