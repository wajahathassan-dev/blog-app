import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { max_500} from "../responsive";

const Container = styled.div`
    height: 60px;
    background-color: #3b39c7;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
` 

const Left = styled.div`
`

const Logo = styled.h1`
    color: white;
`

const Right = styled.div`
`

const MenuItem = styled.span`
    display: inline-block;
    color: white;
    padding: 0 1rem;
    ${max_500({display: 'inline-block', position: 'absolute', top:'60px', left:'0', backgroundColor: '#4288b6', width: ({hide}) => hide ? '0' : '100%', textAlign: 'center',
                padding: '1rem 0', borderBottom: '0.3px solid lightgray', overflow: 'hidden', zIndex: 999
    })}
`

const DropBtn = styled.span`
    color: white;
    display: none;
    ${max_500({display: 'inline-block'})}
`

const Navbar = () => {
    const [hide, setHide] = useState(true);

    return ( 
        <Container>
            <Left><NavLink to='/'><Logo>WAJAX.</Logo></NavLink></Left>
            <Right>
                <MenuItem hide={hide}><NavLink to='/'>Home</NavLink></MenuItem>
                <MenuItem  hide={hide}style={{top: '111px'}}><NavLink to='/create'>Create Post</NavLink></MenuItem>
                <DropBtn onClick={() => setHide(!hide)}><MenuIcon /></DropBtn>
            </Right>
        </Container>
     );
}
 
export default Navbar;