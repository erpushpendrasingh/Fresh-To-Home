// import * as types from "./actionTypes";

// const initialState = {
//      cart: [],
//      isLoading: false,
//      isError: false,
//      currentProduct: {},
// };

// const reducer = (state = initialState, action) => {
//      const { type, payload } = action;
//      switch (type) {
//           case types.ADD_TO_CART:
//                const isPresent = state.cart.find((item) => {
//                     return item.id === payload.id && item.size === payload.size;
//                });
//                let newCart;
//                if (isPresent) {
//                     newCart = state.cart.map((item) => {
//                          if (
//                               item.id === payload.id &&
//                               item.size === payload.size
//                          ) {
//                               return { ...item, qty: item.qty + 1 };
//                          } else {
//                               return item;
//                          }
//                     });
//                } else {
//                     let newPayload = {
//                          ...payload,
//                          qty: 1,
//                     };
//                     newCart = [...state.cart, newPayload];
//                }

//                return { ...state, cart: newCart };
//           case types.INCREASE_QTY:
//                const increase = state.cart.map((item) => {
//                     if (item.id === payload.id && item.size === payload.size) {
//                          return { ...item, qty: item.qty + 1 };
//                     } else {
//                          return item;
//                     }
//                });
//                return {
//                     ...state,
//                     cart: increase,
//                };
//           case types.DECREASE_QTY:
//                const decrease = state.cart.map((item) => {
//                     if (item.id === payload.id && item.size === payload.size) {
//                          return { ...item, qty: item.qty - 1 };
//                     } else {
//                          return item;
//                     }
//                });
//                return {
//                     ...state,
//                     cart: decrease,
//                };
//           case types.REMOVE_ITEM:
//                const update = state.cart.filter((item) => {
//                     return !(
//                          item.id === payload.id && item.size === payload.size
//                     );
//                });
//                return {
//                     ...state,
//                     cart: update,
//                };
//           default:
//                return state;
//      }
// };
// export { reducer };
import * as types from "./actionTypes";

const initialState = {
     cart: [],
     isLoading: false,
     isError: false,
     currentProduct: {},
};

const reducer = (state = initialState, action) => {
     const { type, payload } = action;
     // console.log(payload);

     switch (type) {
          case types.ADD_TO_CART:
               const isPresent = state.cart.find((item) => {
                    return item.id === payload.id;
               });
               let newCart;
               if (isPresent) {
                    newCart = state.cart.map((item) => {
                         if (item.id === payload.id) {
                              return { ...item, qty: item.qty + 1 };
                         } else {
                              return item;
                         }
                    });
               } else {
                    let newPayload = {
                         ...payload,
                         qty: 1,
                    };
                    newCart = [...state.cart, newPayload];
               }

               return { ...state, cart: newCart };
          case types.INCREASE_QTY:
               const increase = state.cart.map((item) => {
                    if (
                         item.id === payload.id
                         // &&                         item.price === payload.price
                    ) {
                         return { ...item, qty: item.qty + 1 };
                    } else {
                         return item;
                    }
               });
               return {
                    ...state,
                    cart: increase,
               };
          case types.DECREASE_QTY:
               const decrease = state.cart.map((item) => {
                    if (item.id === payload.id) {
                         return { ...item, qty: item.qty - 1 };
                    } else {
                         return item;
                    }
               });
               console.log("desc", decrease);
               return {
                    ...state,
                    cart: decrease,
               };
          case types.REMOVE_FROM_CART:
               const update = state.cart.filter((item) => {
                    return !(
                         (item.id === payload.id)
                         // && price === payload.price
                    );
               });
               return {
                    ...state,
                    cart: update,
               };
          case types.CLEAR_CART:
               return {
                    ...state,
                    cart: [],
               };
          default:
               return state;
     }
};
export { reducer };
