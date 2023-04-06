import { Avatar, Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = (item) => {
     const { img, title, tag, category } = item.item;
     return (
          <Box
               display={"flex"}
               flexDirection="column"
               alignItems={"center"}
               justifyContent="space-around"
               padding={"10px"}
               h="350px"
               w={"280px"}
          >
               <Avatar size="2xl" name="Segun Adebayo" src={img} />{" "}
               <Box>
                    <Heading textAlign={"center"} fontSize={"xl"}>
                         {tag}
                    </Heading>
                    <Text textAlign={"center"}>{title}</Text>
               </Box>
               <Link to={`/products/${category}`}>
                    <Button
                         borderRadius={"none"}
                         colorScheme={"green"}
                         color="white"
                    >
                         Shop Now{" "}
                    </Button>
               </Link>
          </Box>
     );
};

export default CategoryItem;
