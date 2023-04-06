import React, { useState } from "react";
import {
     Box,
     Image,
     Text,
     Button,
     CardBody,
     Card,
     Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
     const { desc, image, mrp, price, id } = item;
     const [isVisible, setIsVisible] = useState(false);

     function over(e) {
          setIsVisible(true);
     }
     function out(e) {
          setIsVisible(false);
     }
     return (
          <Box>
               <Card
                    
                    w={"250px"}
                    _hover={{}}
                    _focus={{ boxShadow: "outline" }}
                    onMouseOver={over}
                    onMouseOut={out}
                    position={"relative"}
                    height="300px"
               >
                    <Box
                         display={isVisible ? "block" : "none"}
                         height="50px"
                         pos="absolute"
                         top="70px"
                         left="75px"
                    >
                         <Link to={`/product/${id}`}>
                              <Button>View Option</Button>
                         </Link>
                    </Box>
                    <CardBody>
                         <Image h={"150px"}   src={image} alt={id} borderRadius="lg" />
                         <Stack mt="2" spacing="0">
                              <Text
                                   style={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                   }}
                              >
                                   {desc}
                              </Text>
                              <Text color="blue.600" fontSize="xl">
                                   ₹ {mrp}
                              </Text>
                         </Stack>
                         <Text>Get it @ Rs.{price}. Code: 499GC</Text>
                    </CardBody>
               </Card>
               {/* <Box border={"10px solid black"} display={isVisible ? "block" : "none"}>
                    <div
                         style={{
                              zIndex: -1,
                              height: "50px",
                              position: "absolute",
                              top: "100px",
                              left: "120px",
                         }}
                    >
                    </div>
               </Box> */}
          </Box>
     );
};

export default Product;
