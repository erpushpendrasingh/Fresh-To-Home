import React, { useReducer } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, setSignupData } from "../../Redux/AuthReducer/action";

const initialState = {
     name: "",
     UserEmail: "",
     userPassword: "",
     desc: "",
     gender: "",
};
const reducerFunction = (state, action) => {
     switch (action.type) {
          case "name":
               return { ...state, name: action.payload };
          case "UserEmail":
               return { ...state, UserEmail: action.payload };
          case "userPassword":
               return { ...state, userPassword: action.payload };
          case "desc":
               return {
                    ...state,
                    desc: action.payload,
               };
          case "gender":
               return {
                    ...state,
                    gender: action.payload,
               };
          default:
               return state;
     }
};

const Signup = () => {
     const user = useSelector((store) => store.AuthReducer.user);
     //  console.log("user:", user);
     const dispatch = useDispatch();
     const [productState, setProductState] = useReducer(
          reducerFunction,
          initialState
     );
     //  console.log("productState:", productState);

     const useauthincate = user.find(
          (item) => item.UserEmail === productState.UserEmail
     );
     const addUserData = (e) => {
          e.preventDefault();
          if (useauthincate == undefined) {
               if (
                    JSON.stringify(productState) !==
                    JSON.stringify(initialState)
               ) {
                    dispatch(setSignupData(productState));
                    console.log("user Registred successfully");
                    // .then(() => dispatch(getUserData()))
                    // .then(() => {});
               }
          } else {
               console.log("Allready registered");
          }
     };
     // console.log("user:", user);
     return (
          <div>
               <input
                    type="text"
                    placeholder="User Name"
                    onChange={(e) =>
                         setProductState({
                              type: "name",
                              payload: e.target.value,
                         })
                    }
               />
               <input
                    type="email"
                    placeholder="User Email"
                    onChange={(e) =>
                         setProductState({
                              type: "UserEmail",
                              payload: e.target.value,
                         })
                    }
               />
               <input
                    type="password"
                    placeholder="User Password"
                    onChange={(e) =>
                         setProductState({
                              type: "userPassword",
                              payload: e.target.value,
                         })
                    }
               />
               <input
                    type="text"
                    placeholder="User Descripition"
                    onChange={(e) =>
                         setProductState({
                              type: "desc",
                              payload: e.target.value,
                         })
                    }
               />
               <select
                    type="text"
                    //  placeholder=""
                    onChange={(e) =>
                         setProductState({
                              type: "gender",
                              payload: e.target.value,
                         })
                    }
               >
                    <option value="Gender">Gender</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
               </select>

               <button onClick={addUserData}>Submit</button>
          </div>
     );
};

export default Signup;
