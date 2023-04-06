import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MenuTabs.module.css";

const tabs = [
     {
          category: "Fish_Seafood",
          path: ``,
          title: "Fish & Seafood",
          image: "https://static.freshtohome.com/images/icons/category-icons/fish.png",
     },
     {
          category: "poultry",
          path: ``,
          title: "Poultry",
          image: "https://static.freshtohome.com/images/icons/category-icons/chicken.png",
     },
     {
          category: "mutton",
          title: "Mutton ",
          image: "https://static.freshtohome.com/images/icons/category-icons/mutton.png",
     },
     {
          category: "steaks",

          path: "steak-fillet",
          title: "Steaks & Fillet",
          image: "https://static.freshtohome.com/images/icons/category-icons/steaks-active.png",
     },
     {
          category: "ready_to_cook",

          path: "ready-to-cook",
          title: "Ready To Cook",
          image: "https://static.freshtohome.com/images/icons/category-icons/readytocook.png",
     },
     {
          category: "vegetarian",

          path: "vegetarian",
          title: "Vegetarian",
          image: "https://static.freshtohome.com/images/icons/category-icons/basket-active.png",
     },
];

const MenuTabs = () => {
     return (
          <Box
               borderTop={"1px solid #ccc"}
               borderBottom={"1px solid #ccc"}
               display="flex"
               alignItems="center"
               justifyContent="space-around"
               height="50px"
               margin=" 50px auto"
               // backgroundColor="##FFFFFF"
               width={"100%"}
          >
               <Box
                    borderTop={"1px solid #ccc"}
                    borderBottom={"1px solid #ccc"}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    height="50px"
                    margin=" 50px auto"
                    // backgroundColor="##FFFFFF"
                    width={"75%"}
               >
                    {tabs.map((link) => (
                         <NavLink
                              className={({ isActive }) => {
                                   return isActive
                                        ? styles.active
                                        : styles.default;
                              }}
                              key={link.path}
                              to={`products/${link.category}`}
                              end
                         >
                              <Box display={"flex"} alignItems="center">
                                   <Box>
                                        <Image
                                             w="40px"
                                             h="30px"
                                             src={link.image}
                                        />
                                   </Box>
                                   <Box> {link.title}</Box>
                              </Box>
                         </NavLink>
                    ))}
               </Box>
          </Box>
     );
};

export default MenuTabs;
