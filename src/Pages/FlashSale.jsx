import { Box, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import FlashSaleCard from "../Components/FlashSaleCard";
import { getFish } from "../Redux/AppReducer/action";
import "./FlashSale.css";
const FlashSale = () => {
     const dispatch = useDispatch();
     const [data, setData] = useState([]);
     const { fish, isError, isLoading } = useSelector(
          (store) => store.AppReducer
     );
     console.log("data:", data);
     useEffect(() => {
          if (fish.length === 0) {
               dispatch(getFish());
          }
     }, [fish.length, dispatch]);
     useEffect(() => {
          if (fish) {
               const fishs = fish.find((item) => item.flash_sale === true);
               fishs && setData(fishs);
               console.log(fish)
          }
     }, [fish]);

     return (
          <Box background={"#F2F7F2"}>
               <Text mt={10} textAlign={"center"} fontSize={"20px"}>
                    Flash Sale <span className="span">20h 59m 22s</span>
               </Text>
               {isLoading ? (
                    <Heading>Loading...</Heading>
               ) : isError ? (
                    <Heading>Somthing went wrong</Heading>
               ) : (
                    <Box w="80%" margin={"auto"}>
                         <Grid templateColumns="repeat(4, 1fr)">
                              {fish.length > 0 &&
                                   fish?.map((item, index) => {
                                        return (
                                             <GridItem
                                                  key={index}
                                                  margin="auto"
                                             >
                                                  <FlashSaleCard item={item} />
                                             </GridItem>
                                        );
                                   })}
                         </Grid>
                    </Box>
               )}
          </Box>
     );
};

export default FlashSale;
