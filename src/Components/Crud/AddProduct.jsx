import { Box, Button, color, Heading, input, Text } from "@chakra-ui/react";
import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProducts, getFish } from "../../Redux/AppReducer/action";

const initialState = {
     title: "",
     category: "",
     mrp: "",
     lignThroughMrp: "",
     desc: "",
     storageInstructions: "",
     marketedBy: "",
     weight: "",
     cartquantity: "",
};

const reducerFunction = (state, action) => {
     switch (action.type) {
          case "title":
               return { ...state, title: action.payload };
          case "image":
               return {
                    ...state,
                    image: action.payload,
               };
          case "category":
               return { ...state, category: action.payload };
          case "mrp":
               return { ...state, mrp: action.payload };
          case "lignThroughMrp":
               return { ...state, lignThroughMrp: action.payload };
          case "desc":
               return { ...state, desc: action.payload };
          case "storageInstructions":
               return { ...state, storageInstructions: action.payload };
          case "marketedBy":
               return { ...state, marketedBy: action.payload };
          case "weight":
               return { ...state, weight: action.payload };

          default:
               return state;
     }
};

const AddProduct = () => {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const [productState, setProductState] = useReducer(
          reducerFunction,
          initialState
     );
     const addHandler = () => {
          if (JSON.stringify(productState) !== JSON.stringify(initialState)) {
               dispatch(addProducts(productState))
                    .then(() => dispatch(getFish()))
                    .then(() => {
                         //   navigate("/");
                         setProductState({
                              title: "",
                              category: "",
                              mrp: "",
                              lignThroughMrp: "",
                              desc: "",
                              storageInstructions: "",
                              marketedBy: "",
                              weight: "",
                         });
                    });
          }
     };

     return (
          <Box>
               <Heading textAlign={"center"}>Add Products</Heading>
               <div
                    style={{
                         margin: "auto",
                         display: "flex",
                         flexDirection: "column",
                         // border: "1px solid red",
                         width: "500px",
                         gap: "20px",
                         justifyContent: "space-between",
                    }}
               >
                    <div
                         style={{
                              display: "flex",
                              flexDirection: "column",
                              borderBottom: "1px solid teal",
                         }}
                         className="form-element-div"
                    >
                         <label style={{ color: "red" }} className="form-label">
                              Product title *
                         </label>
                         <input
                              type="text"
                              value={productState.title}
                              onChange={(e) =>
                                   setProductState({
                                        type: "title",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    <div
                         style={{
                              display: "flex",
                              flexDirection: "column",
                              borderBottom: "2px solid teal",
                         }}
                         className="form-element-div"
                    >
                         <label style={{ color: "red" }} className="form-label">
                              Product Category *
                         </label>
                         <select
                              value={productState.category}
                              onChange={(e) =>
                                   setProductState({
                                        type: "category",
                                        payload: e.target.value,
                                   })
                              }
                         >
                              <option value="">Select Category</option>
                              <option value="Fish & Seafood">
                                   Fish & Seafood
                              </option>
                              <option value="Poultry">Poultry</option>
                              <option value="Mutton">Mutton</option>
                              <option value="Steaks & Fillet">
                                   Steaks & Fillet
                              </option>
                              <option value="Ready To Cook">
                                   Ready To Cook
                              </option>
                              <option value="Vegetarian">Vegetarian</option>
                         </select>
                    </div>
                    <div
                         style={{
                              display: "flex",
                              flexDirection: "column",
                              borderBottom: "2px solid teal",
                         }}
                         className="form-element-div"
                    >
                         <label style={{ color: "red" }} className="form-label">
                              Product Image *
                         </label>
                         <input
                              type="url"
                              placeholder="Image URL"
                              value={productState.image}
                              onChange={(e) =>
                                   setProductState({
                                        type: "image",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    <div
                         className="form-element-div"
                         style={{
                              display: "flex",
                              flexDirection: "column",
                              borderBottom: "2px solid teal",
                         }}
                    >
                         <label style={{ color: "red" }} className="form-label">
                              Product MRP *
                         </label>
                         <input
                              type="text"
                              value={productState.mrp}
                              onChange={(e) =>
                                   setProductState({
                                        type: "mrp",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    <div
                         className="form-element-div"
                         style={{
                              display: "flex",
                              flexDirection: "column",
                              borderBottom: "2px solid teal",
                         }}
                    >
                         <label style={{ color: "red" }} className="form-label">
                              Product Old Price *
                         </label>
                         <input
                              type="text"
                              value={productState.lignThroughMrp}
                              onChange={(e) =>
                                   setProductState({
                                        type: "lignThroughMrp",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    <div
                         style={{
                              display: "flex",
                              flexDirection: "column",
                              borderBottom: "2px solid teal",
                         }}
                         className="form-element-div"
                    >
                         <label style={{ color: "red" }} className="form-label">
                              Description *
                         </label>
                         <input
                              type="text"
                              value={productState.desc}
                              onChange={(e) =>
                                   setProductState({
                                        type: "desc",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    <div
                         style={{
                              display: "flex",
                              flexDirection: "column",
                              borderBottom: "2px solid teal",
                         }}
                         className="form-element-div"
                    >
                         <label style={{ color: "red" }} className="form-label">
                              Marketed By *
                         </label>
                         <input
                              type="text"
                              value={productState.marketedBy}
                              onChange={(e) =>
                                   setProductState({
                                        type: "marketedBy",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    <div
                         style={{
                              display: "flex",
                              flexDirection: "column",
                              borderBottom: "2px solid teal",
                         }}
                         className="form-element-div"
                    >
                         <label style={{ color: "red" }} className="form-label">
                              Storage Instructions *
                         </label>
                         <input
                              type="text"
                              value={productState.storageInstructions}
                              onChange={(e) =>
                                   setProductState({
                                        type: "storageInstructions",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    <div
                         style={{
                              display: "flex",
                              flexDirection: "column",
                              borderBottom: "2px solid teal",
                         }}
                         className="form-element-div"
                    >
                         <label style={{ color: "red" }} className="form-label">
                              Weight *
                         </label>
                         <input
                              type="text"
                              value={productState.weight}
                              onChange={(e) =>
                                   setProductState({
                                        type: "weight",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    <div>
                         <Button
                              variant={"solid"}
                              colorScheme={"orange"}
                              data-cy="add-product-button"
                              onClick={addHandler}
                              w="150px"
                              // alignItems="center"
                              // justifyContent="center"
                              marginLeft="200px"
                         >
                              Add Product
                         </Button>
                    </div>
               </div>
          </Box>
     );
};

export default AddProduct;
