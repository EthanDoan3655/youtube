import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components"
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import { mobile } from "./responsive";

const Container=styled.div`

`;
const Wrapper=styled.div`
    padding:50px;
    display:flex;
    ${mobile({padding:"10px",flexDirection:"column"})}
`;
const ImgContainer=styled.div`
    flex:1;
`;
const Image=styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
    ${mobile({height:"40vh"})}
`;
const InfoContainer=styled.div`
    flex:1;
    padding: 0px 50px;
    ${mobile({padding:"10px"})}
`;
const Title=styled.h1`
    font-weight:200;
`;
const Desc=styled.p`
    margin: 20px 0px;
`;
const Price=styled.span`
    font-weight:100;
    font-size:40px;
`;
const FilterContainer = styled.div`
    width:15%;
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    ${mobile({width:"100%"})}
`;
const Filter = styled.div`
    display:flex;
    align-items:center;
`;
const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
`;
const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor:pointer;
`;
const FilterSize = styled.select`
    margin-left: 10px;
    padding:5px;
`;
const FilterSizeOption = styled.option`

`;
const AddContainer = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justiy-content: space-between;
    ${mobile({width:"100%"})}
`;
const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
`;
const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius: 10px;
    border: 1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 0px 5px;

`;
const Button = styled.button`
    padding:15px;
    border:1px solid teal;
    background-color: white;
    cursor:pointer;
    font-weight:500;

    &:hover{
        background-color: #f8f4f4;
    }
`;

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://cdn.shopify.com/s/files/1/0866/4282/products/sstp-1110-15_lords-of-the-stance_bbs-rs_grande.jpg?v=1431635475"/>
            </ImgContainer>
            <InfoContainer>
                <Title>BBS Classic</Title>
                <Desc>These steep wheels come with a steep price at 3500 per wheel but I garuntee you will turn heads. Check out our Classic Mesh Spoke Design WIDE DEEP DISH. You got to pay to play but you already know the deal</Desc>
                <Price>$ 3500</Price>
           
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="chrome"/>
                    <FilterColor color="Gold"/>
                    <FilterColor color="Black"/>
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>5x100</FilterSizeOption>
                        <FilterSizeOption>5x120</FilterSizeOption>
                        <FilterSizeOption>5x114</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>

                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  );
}

export default Product