import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { max_521 } from "../responsive";

const Container = styled.div`
    min-width: 400px;
    max-width: 30%;
    flex: 1;
    transition: box-shadow 300ms;
    padding: 1rem;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 20px blue;
    }
    ${max_521({minWidth: '80%'})}
`

const Wrapper = styled.div`
    text-align: center;
    background-color: #353044;
    color: white;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    line-height: 1.4;
    border-radius: 2rem;
    margin-bottom: 1rem;
    ${max_521({minHeight: '14rem'})}
`

const Desc = styled.p`
    color: #444343;
    text-align: left;
    font-size: 0.9rem;
    ${max_521({fontSize: '0.8rem'})}
`

const Post = ({title, body, id}) => {
    const navigate = useNavigate();
    return ( 
        <Container onClick={() => {
            navigate('/post/'+id);
            window.scroll(0, 0);
            }}>
            <Wrapper>
                {title}
            </Wrapper>
            <Desc>{body}</Desc>
        </Container>
     );
}
 
export default Post;