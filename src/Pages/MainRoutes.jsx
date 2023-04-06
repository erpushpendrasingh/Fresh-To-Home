import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import Cart from "../Components/Cart/Cart";

const MainRoutes = () => {
     return (
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/product/:id" element={<ProductDetails />} />
               <Route path="/products/:category" element={<ProductList />} />
               <Route path="/cart" element={<Cart />} />
               <Route path="*" element={<h1>page not found</h1>} />
          </Routes>
     );
};

export default MainRoutes;
