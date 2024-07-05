import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name:"Product",
  initialState:{
    value:[],
    qyt:1,
  },
  reducers:{
    addProduct: (state,action) =>{
      var data = action.payload;
      state.value = [...state.value,{data,qty:1}];
    },
    incrementQty: (state,action) =>{
      var id = action.payload;
      console.log(id);
      state.value =  state.value.map(obj=>obj.data.id == id ? {...obj,qty:obj.qty+1}:obj)
    },
    DicrementQty: (state,action) =>{
      var id = action.payload;
      console.log(id);
      state.value =  state.value.map(obj=>obj.data.id == id ? {...obj,qty:obj.qty-1}:obj)
    },
    removeItem : (state,action) => {
      let id = action.payload
      state.value = state.value.filter(obj => obj.data.id != id)
    }


  }
})
    
export  const {addProduct,incrementQty,DicrementQty,removeItem} = slice.actions
export default slice.reducer