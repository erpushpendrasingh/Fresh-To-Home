import * as types from "./actionTypes";

const initialState = {
     isLoading: false,
     isError: false,
     user: [],
};
const reducer = (state = initialState, action) => {
     const { type, payload } = action;
     // console.log("payload:", payload);
     switch (type) {
          case types.GET_SIGNUP_DATA_REQUEST:
               return {
                    ...state,
                    isLoading: true,
               };
          case types.GET_SIGNUP_DATA_SUCCESS:
               return {
                    ...state,
                    isLoading: false,
                    user: payload,
               };
          case types.GET_SIGNUP_DATA_FAILURE:
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
