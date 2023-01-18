import styled from "styled-components";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import space from '../images/space.jpg';
import travel from '../images/travel.jpg';
import tech from '../images/tech.jpg';
import { useState } from "react";
import { max_333, max_429, max_950 } from "../responsive";

const Container = styled.div`
    height: 50vh;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    ${max_429({height: '60vh', paddingBottom: '2rem'})}
`

const Arrow = styled.span`
    display: inline-block;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    height: 100px;
    width: 26px;
    margin: auto;
    z-index: 4;
`

const ArrowLeft = styled(Arrow)`
    left: 15%;
    ${max_950({left: '6%'})}
    ${max_429({top: '100%'})}
`

const ArrowRight = styled(Arrow)`
    right: 15%;
    ${max_950({right: '6%'})}
    ${max_429({top: '100%'})}
`

const MySlider = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${(props) => props.move}vw);
    transition: all 1s;
`

const Wrapper = styled.div`
    height: 100%;
    min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Slide = styled.div`
    width: 50%;
    height: 80%;
    border-radius: 2rem;
    background-image: url(${(props) => props.id === 1 ? space : props.id === 2 ? travel : tech});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    ${max_950({width: '70%'})}
    ${max_429({width: '85%'})}
`

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #3b39c7;
    z-index: 1;
    opacity: 0.5;
`

const Title = styled.h1`
    color: white;
    z-index: 2;
    ${max_333({fontSize: '1.2rem'})}
`

const Slider = () => {
    const [move, setMove] = useState(0);
    return ( 
        <Container>
            <ArrowLeft onClick={() => move === 0 ? setMove(-200) : setMove(move + 100)}><ArrowBackIosIcon fontSize="large"/></ArrowLeft>
            <ArrowRight onClick={() => move === -200 ? setMove(0) : setMove(move - 100)}><ArrowForwardIosIcon fontSize="large"/></ArrowRight>
            <MySlider move={move}>
                <Wrapper>
                    <Slide id={1}>
                        <Overlay />
                        <Title>Space Adventures</Title>
                    </Slide>
                </Wrapper>
                <Wrapper>
                    <Slide id={2}>
                        <Overlay />
                        <Title>Travel Diaries</Title>
                    </Slide>
                </Wrapper>
                <Wrapper>
                    <Slide id={3}>
                        <Overlay />
                        <Title>Tech Trends</Title>
                    </Slide>
                </Wrapper>
            </MySlider>
        </Container>
     );
}
 
export default Slider;