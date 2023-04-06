import axios from "axios";
import * as types from "./actionTypes";
const getFish = (queryParams) => (dispatch) => {
     dispatch({ type: types.GET_FISH_REQUEST });
     let url = "http://localhost:8080/fish";
     return axios
          .get(url, queryParams)

          .then((r) => {
               dispatch({
                    type: types.GET_FISH_SUCCESS,
                    payload: r.data,
               });
          })
          .catch((e) => {
               dispatch({ type: types.GET_FISH_FAILURE, payload: e });
          });
};

const addProducts = (payload) => (dispatch) => {
     dispatch({ type: types.ADD_FISH_REQUEST });
     return axios
          .post("http://localhost:8080/fish", payload)
          .then((r) => {
               dispatch({
                    type: types.ADD_FISH_SUCCESS,
                    payload: r.data,
               });
          })
          .catch((e) => {
               dispatch({ type: types.ADD_FISH_FAILURE, payload: e });
          });
};
const editProducts = (id, payload) => (dispatch) => {
     dispatch({ type: types.EDIT_PRODUCT_REQUEST });
     return axios
          .patch(`http://localhost:8080/fish/${id}`, payload)
          .then((r) => {
               dispatch({ type: types.EDIT_PRODUCT_SUCCESS, payload: r.data });
          })
          .catch((e) => {
               dispatch({ type: types.EDIT_PRODUCT_FAILURE, payload: e });
          });
};
const getByQ = (q) => (dispatch) => {
     dispatch({ type: types.GET_FISH_REQUEST });
     return axios
          .get(`http://localhost:8080/fish?q=${q}`)
          .then((r) => {
               dispatch({
                    type: types.GET_FISH_SUCCESS,
                    payload: r.data,
               });
          })
          .catch((e) => {
               dispatch({ type: types.GET_FISH_FAILURE, payload: e });
          });
};

const getCurrentProduct = (id) => (dispatch) => {
     dispatch({ type: types.GET_CURRENT_PRODUCT_REQUEST });
     return axios
          .get(`http://localhost:8080/fish/${id}`)
          .then((res) =>
               dispatch({
                    type: types.GET_CURRENT_PRODUCT_SUCCESS,
                    payload: res.data,
               })
          )
          .catch((e) =>
               dispatch({
                    type: types.GET_CURRENT_PRODUCT_FAILURE,
                    payload: e,
               })
          );
};

export { getFish, addProducts, editProducts, getByQ, getCurrentProduct };
