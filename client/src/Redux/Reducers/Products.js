let initialState ={
    products :[]
}
const ProductReducers = (state = initialState, action)=>{
    switch (action.type){
        case 'FETCH_PRODUCT':{
            state.products = action.payload;
            return {...state}
        }
        default : return state;
    }
}
export default ProductReducers