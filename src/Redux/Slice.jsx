import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name:"Product",
  initialState:{
    value:[],
    qyt:1,
  },
  reducers:{
    addProduct: (state,action) =>{
      const data = action.payload
      const item = state.value.find(ele => ele.id === data.id);
      if (item) {
        item.qyt += 1;
      } else {
        state.value.push({ ...data, qyt: 1 });
      }
    },
    incrementQty: (state,action) =>{
      const id = action.payload;
        const item = state.value.find(ele => ele.id === id);
        if (item) {
          item.qyt += 1;
        }
    },
    DicrementQty: (state,action) =>{
      const id = action.payload;
      const item = state.value.find(ele => ele.id === id);
      if (item) {
        item.qyt -= 1;
      }
    },
    removeItem : (state,action) => {
      let id = action.payload
      state.value = state.value.filter(obj => obj.id != id)
    }


  }
})
    
export  const {addProduct,incrementQty,DicrementQty,removeItem} = slice.actions
export default slice.reducer