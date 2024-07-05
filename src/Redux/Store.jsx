import { configureStore } from '@reduxjs/toolkit'
import productSlice from './Slice'
 const store = configureStore({
  reducer: {
    productDetails:productSlice
  },
})

export default store;