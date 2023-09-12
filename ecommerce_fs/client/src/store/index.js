import { legacy_createStore as createStore } from "redux";

let initialState = {
    cart: [],
};
const store = createStore((state = initialState, action) => {
    if (action.type === "ADD_TO_CART") {
        let cart = [...state.cart];
        let { payload } = action;
        let findIndex = cart.findIndex(
            (e, i) => e.product_id === payload.product_id
        );
        if (findIndex > -1) {
            cart[findIndex].clickNumber =
                cart[findIndex].clickNumber + payload.clickNumber;
        } else {
            cart.push(payload);
        }
        return {
            ...state,
            cart: [...cart],
        };
    }

    if (action.type === "INCREASE_CART_PRODUCT") {
        let cart = [...state.cart];
        let { payload } = action;
        let findIndex = cart.findIndex((e, i) => e.product_id === payload);

        cart[findIndex].clickNumber = cart[findIndex].clickNumber + 1;

        return {
            ...state,
            cart: [...cart],
        };
    }

    if (action.type === "DESCREASE_CART_PRODUCT") {
        let cart = [...state.cart];
        let { payload } = action;
        let findIndex = cart.findIndex((e, i) => e.product_id === payload);
        cart[findIndex].clickNumber = cart[findIndex].clickNumber - 1;
        return {
            ...state,
            cart: [...cart],
        };
    }
    return state;
});

export default store;
