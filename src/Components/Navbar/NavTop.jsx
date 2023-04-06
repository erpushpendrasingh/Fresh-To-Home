import { Box,  HStack, Text } from "@chakra-ui/react";
import React from "react";

export const NavTop = () => {
     return (
          <>
               <HStack
                    h={"30px"}
                    bg={"#3C8031"}
                    color={"white"}
                    decoration={"none"}
                    display={"flex"}
                    direction={"row"}
                    justifyContent="space-around"
                    fontSize={"sm"}
                    fontStyle="revert"
                    pos={"sticky"}
                    top={"0"}
                    zIndex={"banner"}
               >
                    <Text>
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
          </>
     );
};
