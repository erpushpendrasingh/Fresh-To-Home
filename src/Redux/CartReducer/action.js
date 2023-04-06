import * as types from "./actionTypes";

const addToCart = (payload) => (dispatch) => {
     dispatch({ type: types.ADD_TO_CART, payload });
};
const increaseQty = (payload) => (dispatch) => {
     dispatch({ type: types.INCREASE_QTY, payload });
};
const decreaseQty = (payload) => (dispatch) => {
     dispatch({ type: types.DECREASE_QTY, payload });
};
const removeFromCart = (payload) => (dispatch) => {
     dispatch({ type: types.REMOVE_FROM_CART, payload });
};
const clearCart = (payload) => (dispatch) => {
     dispatch({ type: types.CLEAR_CART, payload });
};
export { addToCart, increaseQty, decreaseQty, removeFromCart, clearCart };
