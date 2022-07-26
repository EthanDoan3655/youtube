import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product";

const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`;

const Products = ({products}) => {
  return (
    <Container>
  
        <Product products = {products} />
        
    </Container>
  );
};

export default Products