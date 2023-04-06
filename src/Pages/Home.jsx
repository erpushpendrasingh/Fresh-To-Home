import React from "react";
import Crousel from "../Components/Navbar/Crousel";
import Header from "../Components/Footer/Header";
import FlashSale from "./FlashSale";
import Products from "./Products";
import Categories from "./Categories";

const Home = () => {
     return (
          <>
               <Crousel />
               <FlashSale />
               <Categories />
               <Products />
               <Header />
          </>
     );
};

export default Home;

