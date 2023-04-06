import React, { useState } from "react";
import {
     Box,
     Image,
     Text,
     Button,
     CardBody,
     Card,
     Stack,
     HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FlashSaleCard = ({ item }) => {
     const { desc, image, mrp, price, id } = item;
     const [isVisible, setIsVisible] = useState(false);

     function over(e) {
          setIsVisible(true);
     }
     function out(e) {
          setIsVisible(false);
     }
     return (
          <>
               <Card
                    width="260px"
                    mt={5}
                    _focus={{ boxShadow: "outline" }}
                    onMouseOver={over}
                    onMouseOut={out}
                    pos={"relative"}
                    background="#ffff"
               >
                    <Box
                         display={isVisible ? "block" : "none"}
                         height="50px"
                         pos="absolute"
                         top="80px"
                         left="65px"
                    >
                         <Link to={`/product/${id}`}>
                              <Button>View Option</Button>
                         </Link>
                    </Box>
                    <CardBody>
                         <Image
                              h="150px"
                              src={image}
                              alt={id}
                              borderRadius="lg"
                         />
                         <Stack mt="2" spacing="0">
                              <Text
                                   style={{
                                        overflow: "hidden",
                                        // textOverflow: "ellipsis",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        fontSize: "12px",
                                   }}
                              >
                                   {desc}
                              </Text>
                              <HStack>
                                   <Text as="s" color="red.600" fontSize="15px">
                                        ₹ {mrp}
                                   </Text>
                                   <Text color="green.600">₹{price}/pack</Text>
                              </HStack>
                         </Stack>
                    </CardBody>
               </Card>
               <Box display={isVisible ? "block" : "none"}>
                    <div
                         style={{
                              zIndex: "100",
                              height: "50px",
                              position: "absolute",
                              top: "100px",
                              left: "120px",
                         }}
                    >
                         <Link to={`/home/${id}`}>
                              <Button>View Option</Button>
                         </Link>
                    </div>
               </Box>
          </>
     );
};

export default FlashSaleCard;
