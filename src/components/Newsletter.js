import styled from "styled-components";
import bg from '../images/newsletter_bg.png'
import { max_550, max_942 } from "../responsive";

const Container = styled.div`
    display: flex;
    width: 85%;
    margin: 5rem auto;
    border-radius: 2rem;
    overflow: hidden;
    transition: all 300ms;
    &:hover {
        transform: scale(1.04);
    }
    ${max_942({flexDirection: 'column'})}
`

const Left = styled.div`
    text-align: center;
    background-color: #d4d0d0;
    padding: 5rem 0;
    flex: 1;
`

const Title = styled.h2`
    margin-bottom: 1rem;
    color: #3b39c7;
`

const Subtitle = styled.p`
`

const Wrapper = styled.div`
    display: flex;
    width: 60%;
    height: 2.5rem;
    box-sizing: border-box;
    margin: 2rem auto 1rem auto;
    justify-content: center;
    overflow: hidden;
    ${max_550({flexDirection: 'column', height: 'auto', margin: '2rem auto 0 auto', width: '80%'})}    
`

const InputContainer = styled.div`
    flex: 1;
    height: 100%;
`

const Input = styled.input`
    width: 100%;
    border: none;
    height: 100%;
    outline: none;
    padding-left: 1rem;
    ${max_550({height: '2rem', marginBottom: '10px'})}  
`

const Submit = styled.button`
    height: 100%;
    padding: 0.5rem 1rem;
    border: none;
    background-color: #3b39c7;
    color: white;
    cursor: pointer;
    transition: background-color 200ms;
    &:hover {
        background-color: white;
        border: 0.3rem solid #3b39c7;
        padding: 0.5rem 0.7rem;
        color: black;
    }  
`

const Right = styled.div`
    display: flex;
    align-items: center;
    background-color: #d4d0d0;
    ${max_942({justifyContent: 'center'})}
`

const Image = styled.img`
    width: 40vw;
    object-fit: contain;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    overflow: hidden;
    ${max_942({width: '40vw', borderRadius: '1.5rem 1.5rem 0 0'})}
`

const Newsletter = () => {
    return ( 
        <Container>
            <Left>
                <Title>Newsletter</Title>
                <Subtitle>Take a peak into the future.</Subtitle>
                <Wrapper>
                    <InputContainer>
                        <Input type='email' placeholder='Enter email'/>
                    </InputContainer>
                    <Submit>Subscribe</Submit>
                </Wrapper>
            </Left>
            <Right>
                <Image src={bg} />
            </Right>
        </Container>
     );
}

export default Newsletter;