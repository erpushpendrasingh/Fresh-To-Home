import {
     Box,
     Button,
     Flex,
     HStack,
     Image,
     Input,
     Menu,
     MenuButton,
     MenuItem,
     MenuList,
} from "@chakra-ui/react";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import CartCard from "../../Components/Cart/CartCard";
const cartsData = [];
export const BrandNav = () => {
     return (
          <HStack
               pos={"fixed"}
               // top={"30px"}
               bg={"white"}
               zIndex={"banner"}
               boxShadow={"base"}
               w={"full"}
               h={"90px"}
               justifyContent="space-around"
          >
               <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems="center"
                    w={"45%"}
                    ml={"100"}
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
                         borderRadius={"md"}
                         alignItems={"center"}
                         border={"1px solid #ccc"}
                    >
                         <Input
                              w={"450px"}
                              border="none"
                              placeholder="Search from our 100% fresh products"
                         />
                         <BiSearch color="#3C8031" size={"26px"} />
                    </Box>
               </Box>
               <Flex
                    flexDirection={"row"}
                    justifyContent="flex-end"
                    alignItems="center"
                    w={"45%"}
               >
                    <HStack>
                         <FaRegUserCircle size={"28px"} color="#3C8031" />
                         <Button
                              flex="1"
                              variant="ghost"
                              rightIcon={
                                   cartsData.length > 0
                                        ? cartsData.length
                                        : null
                              }
                         >
                              <GiShoppingBag size={"28px"} color="#3C8031" />
                         </Button>
                    </HStack>
                    <Menu>
                         {({ isOpen }) => (
                              <>
                                   <MenuButton
                                        position={"relative"}
                                        style={{ border: "1px solid red" }}
                                        isActive={isOpen}
                                        as={Button}
                                        // _hover={{}}
                                   >
                                        {("count", 0)}
                                        {
                                             <GiShoppingBag
                                                  size={"40px"}
                                                  color="#3C8031"
                                             />
                                        }
                                   </MenuButton>
                                   <MenuList border={"1px solid red"}>
                                        {cartsData.length > 0 &&
                                             cartsData?.map((item, index) => (
                                                  <MenuItem
                                                       key={index}
                                                       style={{
                                                            zIndex: "9000",
                                                       }}
                                                  >
                                                       <CartCard item={item} />
                                                  </MenuItem>
                                             ))}
                                   </MenuList>
                              </>
                         )}
                    </Menu>
               </Flex>
          </HStack>
     );
};
