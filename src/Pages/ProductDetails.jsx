import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCurrentProduct } from "../Redux/AppReducer/action";
import { addToCart } from "../Redux/CartReducer/action";

const Product = () => {
     const { id } = useParams();
     const dispatch = useDispatch();
     const { currentProduct, isLoading, isError } = useSelector(
          (store) => store.AppReducer
     );
     const cart = useSelector((store) => store.CartReducer.cart);
     console.log("cart:", cart);
     useEffect(() => {
          if (id) {
               dispatch(getCurrentProduct(id));
          }
     }, [id, dispatch]);

     const handleCart = () => {
          let payload = {
               ...currentProduct,
          };
          console.log(payload);
          dispatch(addToCart(payload));
     };

     if (isLoading) {
          return <h1>Loading...</h1>;
     }
     if (isError) {
          return <h1>Something went wrong</h1>;
     }
     if (Object.keys(currentProduct).length === 0) {
          return <h1>Product {id} not found</h1>;
     }
     return (
          <Box
               display="flex"
               flexDirection="row"
               justifyContent="space-evenly"
               width="90%"
               margin="50px auto"
          >
               <Box w={"30%"}>
                    <Box>
                         <Image
                              mt="150px"
                              src={currentProduct.image}
                              alt="img"
                              borderRadius="10px 10px 0 0"
                              objectFit="contain"
                              width="400px"
                         />
                    </Box>
               </Box>
               <Box display={"flex"} color={"#555555"}>
                    <Box
                         color={"#555555"}
                         display={"flex"}
                         flexDirection={"column"}
                         padding={"30px"}
                         width="800px"
                    >
                         <Text fontSize="2xl" fontWeight="bold">
                              {currentProduct?.title}
                         </Text>
                         <Text mt="2" fontWeight="light" fontSize={"12px"}>
                              Bone-in & Boneless| Gross Weight: 660g | Net
                              Weight: 480-500g | No. Pcs: 10-12
                         </Text>
                         <Box
                              display={"flex"}
                              flexDirection="row"
                              w="200px"
                              justifyContent={"space-between"}
                              fontWeight={"normal"}
                              fontSize="xl"
                              mt="5"
                              mb="5"
                         >
                              <Text as={"s"}>
                                   ₹{currentProduct?.lignThroughMrp}
                              </Text>{" "}
                              <Text ml={"5px"}>
                                   ₹{currentProduct?.mrp} /pack
                              </Text>
                         </Box>
                         <Box>
                              <Button
                                   variant="solid"
                                   color={"white"}
                                   backgroundColor="#398D2C"
                                   onClick={handleCart}
                              >
                                   Add to cart
                              </Button>
                         </Box>

                         <Text mb={5} fontWeight={"bold"} fontSize="13px">
                              (Total price:375)
                         </Text>
                         <Text fontSize={"13px"} mb={12}>
                              They say we are choosy with our meats - you will
                              believe it when we tell you that we only serve the
                              very premium young male goat approximately 6-8
                              months old with meat so tender that it will melt
                              in your mouth. We apologise in advance to the
                              non-goat eaters who may find the description gory,
                              but our meat is simply the finest in town!
                         </Text>
                         <Box>
                              <Text fontSize={"13px"} fontWeight="bold">
                                   Storage Instructions:
                              </Text>
                              <Text mb={3} fontSize={"12px"}>
                                   Store under refrigeration at{" "}
                                   {currentProduct.storageInstructions} below,
                                   in hygienic conditions
                              </Text>
                              <Text fontSize={"12px"} fontWeight="bold">
                                   Marketed By:
                              </Text>
                              <Text fontSize={"12px"}>
                                   Freshalicious Super Bazaar Pvt. Ltd. No. 42,
                                   Chikkagubbi Village, Bangalore East Taluk,
                                   Bangalore Urban, Karnataka - 560077
                              </Text>
                              <Image
                                   h="40px"
                                   src="https://static.freshtohome.com/images/others/fssai-logo.png"
                                   alt="Fssai"
                              />
                              <Text fontSize="12px" mt="2" fontWeight={"bold"}>
                                   FSSAI Lic. No. 11221302000092
                              </Text>
                         </Box>
                    </Box>
               </Box>
          </Box>
     );
};

export default Product;
