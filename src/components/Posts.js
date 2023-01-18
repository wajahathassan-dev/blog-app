import styled from "styled-components";
import Post from "./Post";
import { useState } from "react";
import { useSelector } from "react-redux";
import { max_1411, max_429, max_521 } from "../responsive";

const Container = styled.div`
    width: 85%;
    margin: 0 auto;
    box-sizing: border-box;
    ${max_521({width: '90%'})}
`

const Category = styled.div`
    padding: 2rem 0;
    ${max_1411({textAlign: 'center'})}
    ${max_429({display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem'})}
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    ${max_1411({justifyContent: 'center'})}
`

const CatButton = styled.button`
    width: 6rem;
    height: 2.5rem;
    font-size: 0.8rem;
    border: 4px solid #5755ce;
    background: transparent;
    border-radius: 1rem; 
    cursor: pointer;
    transition: all 200ms;
    margin-right: 2rem;
`
const Posts = () => {
    const [category, setCategory] = useState('Travel');
    const {allPosts} = useSelector(state => state.blog)

    return ( 
        <Container>
            <Category>
                <CatButton style={{backgroundColor: category === 'Space' ? '#5755ce' : 'transparent', color: category === 'Space' ? 'white' : 'black'}} onClick={() => setCategory('Space')}>Space</CatButton>
                <CatButton style={{backgroundColor: category === 'Travel' ? '#5755ce' : 'transparent', color: category === 'Travel' ? 'white' : 'black'}} onClick={() => setCategory('Travel')}>Travel</CatButton>
                <CatButton style={{backgroundColor: category === 'Tech' ? '#5755ce' : 'transparent', color: category === 'Tech' ? 'white' : 'black'}} onClick={() => setCategory('Tech')}>Tech</CatButton>
            </Category>
            <Wrapper>
                {allPosts.map(post => (
                    post.category === category && (<Post title={post.title} body={post.body.slice(0, 150)} img={post.img} id={post.id} key={post.id}/>)
                ))}
            </Wrapper>
        </Container>
     );
}
 
export default Posts;