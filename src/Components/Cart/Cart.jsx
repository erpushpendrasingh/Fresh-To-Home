import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import {
     clearCart,
     decreaseQty,
     increaseQty,
     removeFromCart,
} from "../../Redux/CartReducer/action";
const Cart = () => {
     const cart = useSelector((store) => store.CartReducer.cart);
     console.log("cart:", cart.length);
     const [stripeToken, setStripeToken] = useState(null);
     const navigate = useNavigate();
     const dispatch = useDispatch();
     const onToken = (token) => {
          setStripeToken(token);
     };
     useEffect(() => {
          const makeRequest = async () => {
               try {
                    dispatch(clearCart());
                    navigate("/paysuccess");
               } catch (error) {
                    console.log("error:", error);
               }
          };

          stripeToken && makeRequest();
     }, [stripeToken, cart.total, navigate, dispatch]);
     const decrease = (id, qty) => {
          if (qty > 1) {
               dispatch(decreaseQty({ id, qty }));
          } else {
               dispatch(removeFromCart({ id }));
          }
     };
     const increase = (id) => {
          dispatch(increaseQty({ id }));
          console.log("first");
     };
     const convertToNumber = (str) => {
          if (Number(str)) {
               return Number(str);
          }
          let arr = str?.includes(",") ? str.split(",") : [];
          let final_str = arr.reduce((a, c) => a + c, "");
          let result = Number(final_str);
          return result;
     };
     let total_original_price = 0;
     let total_final_price = 0;

     cart.forEach((item) => {
          total_original_price += convertToNumber(item.mrp) * item.qty;
          total_final_price += convertToNumber(item.price) * item.qty;
     });
     return (
          <Container>
               <Wrapper>
                    <Title>YOUR BAG</Title>
                    <Top>
                         <TopButton>CONTINUE SHOPPING</TopButton>
                         <TopTexts>
                              <TopText>Shooping Bag {cart.length}</TopText>
                              <TopText>Your Wishlist (0)</TopText>
                         </TopTexts>
                    </Top>

                    <Bottom>
                         <Info>
                              {cart?.map((item) => (
                                   <Product key={item.id}>
                                        <ProductDetail>
                                             <Image src={item.image} />
                                             <Details>
                                                  <ProductName>
                                                       <b>
                                                            Product:
                                                            {item.title}
                                                       </b>
                                                  </ProductName>
                                                  <ProductId>
                                                       <b>ID:</b>
                                                       {Math.random(4)}
                                                  </ProductId>
                                                  <ProductColor
                                                       color={item.color}
                                                  />
                                             </Details>
                                        </ProductDetail>
                                        <PriceDetail>
                                             <ProductAmountContainer>
                                                  <AddIcon
                                                       onClick={() =>
                                                            increase(item.id)
                                                       }
                                                  />
                                                  <ProductAmount>
                                                       {item.qty}
                                                  </ProductAmount>
                                                  <RemoveIcon
                                                       onClick={() =>
                                                            decrease(
                                                                 item.id,
                                                                 item.qty
                                                            )
                                                       }
                                                  />
                                             </ProductAmountContainer>
                                             <ProductPrice>
                                                  ${item.price}
                                             </ProductPrice>
                                        </PriceDetail>
                                   </Product>
                              ))}

                              <Hr />
                         </Info>
                         <Summary>
                              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                              <SummeryItem>
                                   <SummeryItemText>
                                        {total_original_price}
                                   </SummeryItemText>
                                   <SummeryItemPrice>
                                        {total_final_price}
                                   </SummeryItemPrice>
                              </SummeryItem>
                              <SummeryItem>
                                   <SummeryItemText>
                                        Estimated Shipping
                                   </SummeryItemText>
                                   <SummeryItemPrice>$ -5.90</SummeryItemPrice>
                              </SummeryItem>
                              <SummeryItem>
                                   <SummeryItemText>
                                        Shipping Discount
                                   </SummeryItemText>
                                   <SummeryItemPrice>$ 80</SummeryItemPrice>
                              </SummeryItem>
                              <SummeryItem type="total">
                                   <SummeryItemText>Total</SummeryItemText>
                                   <SummeryItemPrice>
                                        $ {total_final_price}
                                   </SummeryItemPrice>
                              </SummeryItem>
                              <StripeCheckout
                                   name="Fresh to home"
                                   image="https://static.freshtohome.com/images/logo/2021/logo-medium.png"
                                   billingAddress
                                   shippingAddress
                                   amount={total_final_price}
                                   token={onToken}
                                   currency="INR"
                                   stripeKey="pk_test_51MUfpxSGkg4Ksbmp676mTg2aZ6ALWzeekR737utV1pxcLVPe52MXWLHrwBA7InKJZERookbudtb58m3bqzEpoApf008ccsXj56"
                              >
                                   <Button on>CHECKOUT NOW</Button>
                              </StripeCheckout>
                         </Summary>
                    </Bottom>
               </Wrapper>
          </Container>
     );
};

export default Cart;

const Container = styled.div``;
const Wrapper = styled.div`
     padding: 20px;
`;

const Title = styled.h1`
     font-weight: 300;

     text-align: center;
`;
const Top = styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 20px;
`;
const TopButton = styled.button`
     padding: 10px;
     font-weight: 600;
     cursor: pointer;
     border: ${(props) => props.type === "filled" && "none"};
     background-color: ${(props) =>
          props.type === "filled" ? "black" : "transparent"};
     color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
     text-decoration: underline;
     cursor: pointer;
     margin: 0px 10px;
`;
const Bottom = styled.div`
     display: flex;
     justify-content: space-between;
`;
const Info = styled.div`
     flex: 3;
`;
const Product = styled.div`
     display: flex;
     justify-content: space-between;
`;
const ProductDetail = styled.div`
     flex: 2;
     display: flex;
`;
const Image = styled.img`
     width: 200px;
     height: 250px;
     padding: 20px;
`;
const Details = styled.div`
     padding: 20px;
     display: flex;
     flex-direction: column;
     justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
     width: 20px;
     height: 20px;
     border-radius: 50%;
     background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.span`
     flex: 1;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
`;
const ProductAmountContainer = styled.div`
     display: flex;
     align-items: center;
`;
const ProductAmount = styled.div`
     font-size: 24px;
     margin: 5px;
`;
const ProductPrice = styled.div`
     font-size: 30px;
     font-weight: 200;
`;
const Hr = styled.hr`
     background-color: #eee;
     border: none;
     height: 1px;
`;
const Summary = styled.div`
     flex: 1;
     border: 0.5px solid lightgray;
     border-radius: 10px;
     padding: 20px;
     height: 50vh;
`;

const SummaryTitle = styled.h1`
     font-weight: 200;
`;
const SummeryItem = styled.div`
     margin: 30px 0px;
     display: flex;
     justify-content: space-between;
     font-weight: ${(props) => props.type === "total" && "800"};
     font-weight: ${(props) => props.type === "total" && "24px"};
`;
const SummeryItemText = styled.span``;
const SummeryItemPrice = styled.span``;
const Button = styled.button`
     /* width: 100%; */
     padding: 10px;
     background-color: black;
     color: white;
     font-weight: 600;
`;
