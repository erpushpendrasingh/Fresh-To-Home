import { Box, HStack, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import { FaRegUserCircle } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import MenuTabs from "./MenuTabs";
import { useDispatch, useSelector } from "react-redux";
import { getByQ } from "../../Redux/AppReducer/action";

const Navbar = () => {

   
     const cart = useSelector((store) => store.CartReducer.cart);

     const dispatch = useDispatch();
     const [q, setQ] = useState("");

     const [isVisible, setIsVisible] = useState(false);

     function over(e) {
          setIsVisible(true);
     }
     function out(e) {
          setIsVisible(false);
     }
     const handleClick = () => {
          console.log(q);
          console.log("someone is clicked");
          dispatch(getByQ(q));
     };
     return (
          <>
               <Box
                    position={"sticky"}
                    top="0px"
                    left={"0"}
                    right="0"
                    style={{
                         height: "50px",
                         width: "100%",
                    }}
                    backgroundColor={"white"}
                    zIndex="1"
               >
                    <HStack
                         width={"100%"}
                         h={"30px"}
                         background={"#3C8031"}
                         color={"white"}
                         textDecoration={"none"}
                         display={"flex"}
                         flexDirection={"row"}
                         justifyContent="space-around"
                         fontSize={"13px"}
                         fontStyle="revert"
                    >
                         <Text>
                              {" "}
                              📞1800-313-3302 &nbsp;|&nbsp;
                              📩customercare@freshtohome.com
                         </Text>
                         <Box
                              display={"flex"}
                              flexDirection={"row"}
                              justifyContent="space-between"
                              color={"white"}
                              alignItems="center"
                              w={"400px"}
                         >
                              <Text>Certificates</Text> | <Text>Why us</Text> |
                              <Text>Newsrooms</Text> |<Text>Sell-With-Us</Text>|
                              <Text>🏛 530048</Text>
                         </Box>
                    </HStack>
                    <HStack
                         width={"100%"}
                         h={"90px"}
                         color={"#ccc"}
                         textDecoration={"none"}
                         display={"flex"}
                         flexDirection={"row"}
                         alignItems={"center"}
                         justifyContent="space-between"
                         fontSize={"13px"}
                         fontStyle="revert"
                    >
                         <Box
                              display={"flex"}
                              justifyContent={"space-between"}
                              alignItems="center"
                              width={"550px"}
                              ml="100px"
                              w="600px"
                         >
                              <Link to="/">
                                   <Image
                                        h={"55px"}
                                        src="https://static.freshtohome.com/images/logo/2021/logo-medium.png"
                                        alt="Logo"
                                   />
                              </Link>

                              <Box
                                   display={"flex"}
                                   alignItems={"center"}
                                   border={"2px solid #ccc"}
                              >
                                   <Input
                                        h="30px"
                                        w={"400px"}
                                        border="none"
                                        placeholder="Search from our 100% fresh products"
                                        onChange={(e) => setQ(e.target.value)}
                                   />
                                   <BiSearch
                                        onChick={handleClick}
                                        color="#3C8031"
                                        size={"30px"}
                                   />
                              </Box>
                         </Box>
                         <Box
                              display={"flex"}
                              flexDirection={"row"}
                              justifyContent="space-around"
                              color={"#ccc"}
                              alignItems="center"
                              w={"205px"}
                              mr={"200px"}
                         >
                              <FaRegUserCircle size={"40px"} color="#3C8031" />
                              {
                                   <Link to={"/cart"}>
                                        {cart.length || 0}
                                        <GiShoppingBag
                                             size={"40px"}
                                             color="#3C8031"
                                        />
                                   </Link>
                              }
                         </Box>
                    </HStack>
               </Box>
               <HStack fontSize={"13px"} fontWeight="bold">
                    <MenuTabs />
               </HStack>
          </>
     );
};

export default Navbar;

// {
//
// }

// <FaRegUserCircle size={"40px"} color="#3C8031" />;
