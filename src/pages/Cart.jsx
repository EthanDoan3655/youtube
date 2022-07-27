import React from 'react'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import styled from 'styled-components'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from './responsive'

const Container = styled.div`

`;
const Wrapper = styled.div`
    padding:20px;
    ${mobile({padding:"10px"})}
`;
const Title = styled.h1`
    font-weight:300;
    text-align:center;
`;
const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`;
const TopButton = styled.button`
    padding:10px;
    font-weight:600;
    cusor:pointer;
    border: ${(props)=>props.type === "filled" && "none"};
    background-color: ${(props)=>
        props.type === "filled" ? "black" : "transparent"};
    color: ${(props)=>props.type === "filled" && "white"};

`;

const TopTexts = styled.div`
${mobile({display:"none"})}
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor:pointer;
    margin:0px 10px;
`;

const Bottom = styled.div`
        display:flex;
        justify-content: space-between ;
        ${mobile({flexDirection:"column"})}
`;
const Info = styled.div`
        flex:3;

`;
const Product = styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({flexDirection:"column"})}
`;
const ProductDetail = styled.div`
        flex:2;
        display:flex;
`;
const Image = styled.img`
    width:200px;
`;
const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;

`;
const ProductName = styled.span`
`;
const ProductId = styled.span`
`;
const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props=>props.color}
`;
const ProductSize = styled.span``;

const PriceDetail = styled.div`
        flex:1;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
`;

const ProductAmountContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`;
const ProductAmount = styled.div`
    font-size:24px;
    margin:5px;
    ${mobile({margin:"5px 15px"})}
`;
const ProductPrice = styled.div`
        font-size:30px;
        font-weight:200;
        ${mobile({marginBottom:"20px"})}
`;

const Hr = styled.hr`
    background-color: #eee;
    border:none;
    height:1px;
`;

const Summary = styled.div`
        flex:1;

`;
const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>Your Cart</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Cart(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECK OUT NOW</TopButton>
            </Top>
            <Bottom>

                <Info>
                <Product>
                    <ProductDetail>
                        <Image src="https://i.pinimg.com/originals/c5/86/45/c58645316a9643bdfa767348b1c62e0e.jpg"/>
                        <Details>
                            <ProductName><b>Product:</b>E36 GT VADER SEATS</ProductName>
                            <ProductId><b>ID:</b>1</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size:</b>18's</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>$ 30</ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetail>
                        <Image src="https://i.pinimg.com/originals/c5/86/45/c58645316a9643bdfa767348b1c62e0e.jpg"/>
                        <Details>
                            <ProductName><b>Product:</b>E36 GT VADER SEATS</ProductName>
                            <ProductId><b>ID:</b>1</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size:</b>18's</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>$ 30</ProductPrice>
                    </PriceDetail>
                </Product>
                </Info>
                {/* <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>Subtotal</SummaryItemPrice>
                    </SummaryItem>
                </Summary> */}
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart