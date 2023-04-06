import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
const tabs = [
     {
          path: "/fish-and-seafood",
          title: "Fish & Seafood",
          image: "https://static.freshtohome.com/images/icons/category-icons/fish.png",
     },
     {
          path: "poultry",
          title: "Poultry",
          image: "https://static.freshtohome.com/images/icons/category-icons/chicken.png",
     },
     {
          path: "mutton",
          title: "Mutton",
          image: "https://static.freshtohome.com/images/icons/category-icons/mutton.png",
     },
     {
          path: "steak-fillet",
          title: "Steaks & Fillet",
          image: "https://static.freshtohome.com/images/icons/category-icons/steaks-active.png",
     },
     {
          path: "ready-to-cook",
          title: "Ready To Cook",
          image: "https://static.freshtohome.com/images/icons/category-icons/readytocook.png",
     },
     {
          path: "vegetarian",
          title: "Vegetarian",
          image: "https://static.freshtohome.com/images/icons/category-icons/basket-active.png",
     },
];

const styles = {
     active: {
          textDecoration: "none",
          color: "#7755a2",
          borderBottom: "3px solid black",
     },
     default: {
          textDecoration: "none",
          color: "#7755a2",
     },
};
export const SubNav = () => {
     return (
          <>
               {/* <Flex
                    borderTop={"1px solid #ccc"}
                    borderBottom={"1px solid #ccc"}
                    alignItems="center"
                    justifyContent="space-around"
                    height="50px"
                    width={"100%"}
               > */}
               <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    // margin={"50px auto"}
                    // height="50px"
                    // width={"75%"}
                    // zIndex="1"
               >
                    {tabs.map((link) => (
                         <NavLink
                              className={({ isActive }) => {
                                   return isActive
                                        ? styles.active
                                        : styles.default;
                              }}
                              key={link.path}
                              to={link.path}
                         >
                              <HStack
                                   display={"flex"}
                                   justifyContent="space-between"
                                   alignItems="center"
                              >
                                   <Image w="30px" h="25px" src={link.image} />
                                   <Box> {link.title}</Box>
                              </HStack>
                         </NavLink>
                    ))}
               </Box>
               {/* </Flex> */}
          </>
     );
};
