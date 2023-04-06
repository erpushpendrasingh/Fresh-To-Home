import axios from "axios";
import * as types from "./actionTypes";
const setSignupData = (payload) => (dispatch) => {
     dispatch({ type: types.SET_SIGNUP_DATA_REQUEST });
     return axios
          .post("http://localhost:8080/user", payload)
          .then((r) => {
               dispatch({
                    type: types.SET_SIGNUP_DATA_SUCCESS,
                    payload: r.data,
               });
          })
          .catch((e) => {
               dispatch({ type: types.SET_SIGNUP_DATA_FAILURE, payload: e });
          });
};
const getUserData = () => (dispatch) => {
     dispatch({ type: types.GET_SIGNUP_DATA_REQUEST });
     return (
          axios
               .get("http://localhost:8080/user")
               // .then((r) => console.log(r.data))
               .then((r) => {
                    dispatch({
                         type: types.GET_SIGNUP_DATA_SUCCESS,
                         payload: r.data,
                    });
               })
               .then((r) => {
                    dispatch({
                         type: types.GET_SIGNUP_DATA_FAILURE,
                         payload: r,
                    });
               })
     );
};
export { setSignupData, getUserData };
