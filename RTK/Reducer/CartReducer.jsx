import { createSlice } from "@reduxjs/toolkit";

let initState = {
    cart: [],
};
let cartReducer = createSlice({
    name: "cart",
    initialState: initState,
    reducers: {
        CartAction: (state, action) => {
            // console.log(action.payload)
            let findProduct = state.cart.find(
                (el) => el.id === action.payload.id
            );
            if (findProduct) {
                findProduct.productCount += 1;
            } else {
                state.cart.push({ ...action.payload, productCount: 1 });
            }
        },
        RemoveFromCart: (state, action) => {
            let res = state.cart.filter((el) => el.id !== action.payload);

            state.cart = res;
        },
        ClearCart: (state, action) => {
            state.cart = [];
        },
        ChangeProductCount: (state, action) => {
            if (action.payload.type === "count") {
                let findProduct = state.cart.find(
                    (el) => el.id === action.payload.id
                );
                if (findProduct) {
                    findProduct.productCount = action.payload.quantity;
                }
                else {
                    state.cart.push({ ...action.payload.detailsData, productCount: action.payload.quantity });
                }
            }
            if (action.payload.type === "decrease") {
                let findProduct = state.cart.find(
                    (el) => el.id === action.payload.id
                );
                if (findProduct) {
                    findProduct.productCount -= 1;
                }
            }
            if (action.payload.type === "increase") {
                let findProduct = state.cart.find(
                    (el) => el.id === action.payload.id
                );
                if (findProduct) {
                    findProduct.productCount += 1;
                }
            }
        },
        testAction: (state, action) => {
            state.cart.push("1");
        },
    },
});
export default cartReducer.reducer;

export let {
    CartAction,
    testAction,
    RemoveFromCart,
    ClearCart,
    ChangeProductCount,
} = cartReducer.actions;
