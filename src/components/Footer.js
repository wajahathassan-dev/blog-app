import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { max_1023, max_763 } from "../responsive";

const Container = styled.div`
    width: 85%;
    margin: 5rem auto;
    padding: 2rem 5rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-radius: 2rem;
    overflow: hidden;
    background-color: #9259ee;
    ${max_763({flexDirection: 'column', gap: '2rem', padding: '2rem 3rem'})}
`

const Left = styled.div`
    flex: 1;
`

const Logo = styled.h1`
    color: #ece9e9;
    ${max_1023({fontSize: '1.6rem'})}
`

const Mid = styled.div`
    flex: 1;
`

const Mission = styled.p`
    color: white;
    ${max_1023({fontSize: '0.8rem'})}
    line-height: 1.4;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`

const Menu = styled.nav`
`

const MenuItem = styled.span`
    padding-right: 20px;
    color: #e6e4e4;
    cursor: pointer;
    &:hover {
        color: white;
    }
    ${max_1023({fontSize: '0.8rem'})}
`

const Footer = ({top}) => {
    return ( 
        <Container>
            <Left>
                <Logo>WAJAX.</Logo>
            </Left>
            <Mid>
                <Mission>On a mission to inform the world.</Mission>
            </Mid>
            <Right>
                <Menu>
                    <NavLink to='/' onClick={() => top && window.scroll(0, 0)}><MenuItem>Home</MenuItem></NavLink>
                    <NavLink to='/create' onClick={() => window.scroll(0, 0)}><MenuItem>Create Post</MenuItem></NavLink>
                </Menu>
            </Right>
        </Container>
     );
}
 
export default Footer;