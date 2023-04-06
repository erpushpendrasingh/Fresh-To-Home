import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Header = () => {
    
     return (
          <Box display={"flex"} alignItems="center" justifyContent={"space-between"} w={"80%"} m={"50px auto"}>
               <Image
                    w="70%"
                    src="https://static.freshtohome.com/antibioticfree/certificate-banner-web-2021.jpg"
               />
               <Image h={"290px"} w="350px" src="./foot.png" />
          </Box>
     );
};

export default Header;
