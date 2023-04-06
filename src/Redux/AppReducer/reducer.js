import * as types from "./actionTypes";

const initialState = {
     isLoading: false,
     isError: false,
     fish: [],
     currentProduct: [],
};
const reducer = (state = initialState, action) => {
     const { type, payload } = action;

     switch (type) {
          case types.GET_FISH_REQUEST:
               return {
                    ...state,
                    isLoading: true,
               };
          case types.GET_FISH_SUCCESS:
               return {
                    ...state,
                    isLoading: false,
                    fish: payload,
               };
          case types.GET_FISH_FAILURE:
               return {
                    ...state,
                    isLoading: false,
                    isError: true,
               };
          case types.GET_CURRENT_PRODUCT_REQUEST:
               return {
                    ...state,
                    isLoading: true,
                    isError: false,
               };
          case types.GET_CURRENT_PRODUCT_SUCCESS:
               return {
                    ...state,
                    isLoading: false,
                    currentProduct: payload,
               };
          case types.GET_CURRENT_PRODUCT_FAILURE:
               return {
                    ...state,
                    isLoading: false,
                    isError: true,
               };
          default:
               return state;
     }
};
export { reducer };
