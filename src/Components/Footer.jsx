import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import styled from "styled-components"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { mobile } from '../pages/responsive';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const Container =styled.div`
    display:flex;
    ${mobile({flexDirection:"column"})}
`;
const Left =styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    padding:20px;

`;

const Logo =styled.h1`

`;
const Desc =styled.p`
    margin: 20px 0px;
`;
const SocialContainer =styled.div`
    display:flex;
`;
const SocialIcon =styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color: #${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;


`;
const Center =styled.div`
    flex:1;
    padding:20px;
    ${mobile({display:"none"})}
`;

const Title = styled.h3`
    margin-bottom:30px;
`;

const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;

`;

const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
`;

const Right =styled.div`
    flex:1;
    padding:20px;
`;

const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`;

const Payment = styled.img`
    width:50%;
`;

const Footer = () => {
  return (
    <Container>
    <Left>
        <Logo>ETD EURO.</Logo>
            <Desc>
            It is our vision to be the most valued and trusted European online auto parts retailer in the world, through the relentless pursuit of quality and service. We pride ourselves in offering the highest quality replacement auto parts, unparalleled customer service, and providing the do-it-yourself enthusiast the knowledge and technical support to help maintain and own their vehicles. We do this by hand curating our catalog with only the highest quality OEM parts such as Bosch, Sachs, Bilstein, Lemforder, and Brembo.            
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <FacebookIcon/>
                    <td></td>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color="1DA1F2">
                    <TwitterIcon/>
                </SocialIcon>
            </SocialContainer>
    </Left>
    <Center>

        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Wheels</ListItem>
            <ListItem>Performance</ListItem>
            <ListItem>Terms</ListItem>
        </List>
    </Center>
    <Right>

        <Title>Contact</Title>
        <ContactItem>
            <LocationOnIcon style={{marginRight:"10px"}}/>11721 battery pl, charlotte nc 28273
        </ContactItem>
        <ContactItem>
           <PhoneIcon style={{marginRight:"10px"}}/> 7048584335
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{marginRight:"10px"}}/>  Ethandoan10@gmail.com
        </ContactItem> 
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
    </Right>
    </Container>
  )
}

export default Footer