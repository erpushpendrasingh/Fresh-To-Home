import { Box, Grid, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../Components/Product";

const Products = ({ filters, category }) => {
     const [products, setProducts] = useState([]);
     const [filteredProducts, setFilteredProducts] = useState([]);
     useEffect(() => {
          const getProduct = async () => {
               try {
                    const res = await axios.get(
                         category
                              ? `http://localhost:8080/fish?category=${category}`
                              : "http://localhost:8080/fish"
                    );
                    setProducts(res.data);
               } catch (error) {}
          };

          getProduct();
     }, [category]);

     useEffect(() => {
          category &&
               setFilteredProducts(
                    products?.filter((item) =>
                         Object.entries(filters).every(([key, value]) =>
                              item[key].includes(value)
                         )
                    )
               );
     }, [products, category, filters]);

     return (
          <Box width={"80%"} margin="auto">
               <Heading textAlign={"center"} p="10">
                    {category}
               </Heading>
               <Grid templateColumns="repeat(4, 1fr)" gap={10}>
                    {category
                         ? filteredProducts.map((item, index) => (
                                <Product item={item} key={index} />
                           ))
                         : products.map((item, index) => (
                                <Product item={item} key={index} />
                           ))}
               </Grid>
          </Box>
     );
};

export default Products;
