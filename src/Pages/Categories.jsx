import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import { categories } from "../utils/data";
import ShopByCategoryCard from "./CategoryItem.jsx";

const Categories = () => {
     return (
          <Box w={"80%"} m="auto">
               <Heading fontSize={"25px"} p={10} textAlign={"center"}>
                    Shop By Category
               </Heading>
               <Grid templateColumns="repeat(4, 1fr)" gap={5}>
                    {categories.map((item, index) => (
                         <GridItem key={index}>
                              <ShopByCategoryCard item={item} />
                         </GridItem>
                    ))}
               </Grid>
          </Box>
     );
};

export default Categories;
