import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    purchases: [],
    sales: [],
    firms: [],
    products: [],
    brands: [],
    categories: [],                                                                                                                                                                                                                                                                                                                                                 
    loading: false,
    error: false


}

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {}
});

export const {} = stockSlice.actions

export default stockSlice.reducer