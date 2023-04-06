<!-- import ShoppingCart from "../Components/ShoppingCart";
import Crousel from "../Components/Crousel";
import MenuTabs from "../Components/MenuTabs";
import Navbar from "../Components/Navbar";
import SampleCard from "../Components/SampleCard";
import Card from "../Components/Card";
import AddProduct from "../Components/AddProduct";
import SinglePage from "../Components/SinglePage";
import CartCard from "../Components/CartCard";
import MyCart from "../Components/MyCart"; -->
 <Box
                    position={"relative"}
                    as="button"
                    color="blue.700"
                    fontWeight="semibold"
                    py={2}
                    px={4}
                    borderWidth="1px"
                    borderColor="blue.500"
                    rounded="md"
                    _hover={{}}
                    _focus={{ boxShadow: "outline" }}
                    onMouseOver={over}
                    onMouseOut={out}
                    //    zIndex="-10000"
               >
                    <Image w={"320px"} src={image} alt="FirstCard" />

                    <Text
                         textAlign={"left"}
                         lineHeight=" 1.5em"
                         height="3em"
                         overflow={"hidden"}
                         w="320px"
                    >
                         {desc}
                    </Text>
                    <Box
                         fontSize={"13px"}
                         display={"flex"}
                         justifyContent="space-between"
                         alignItems="center"
                         h={"20px"}
                         w={"145px"}
                         fontWeight="bold"
                    >
                         <Text>
                              <span style={{ textDecoration: "line-through" }}>
                                   ₹ {lignThroughMrp}
                              </span>{" "}
                         </Text>
                         <Text color={"green"}>{mrp} /pack</Text>
                    </Box>
                    <Text
                         textAlign={"left"}
                         color={"red"}
                         fontSize={"13px"}
                         h={"20px"}
                    >
                         Get it @ Rs.{price}. Code: 499GC
                    </Text>

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
               </Box> 