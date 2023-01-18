import { ArrowBackIosRounded } from "@mui/icons-material";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import {posts} from '../data';

const Container = styled.div`
    position: relative;
`

const Post = styled.article`
    width: 70%;
    margin: 4rem auto;
`

const GoBack = styled.span`
    display: inline-block;
    position: absolute;
    left: 6%;
    top: 11.5%;
    border-radius: 50%;
    padding: 0.5rem;
    cursor: pointer;
    &:hover {
        border: 1px solid #3b39c7;
        padding: 0.4375rem;
        box-shadow: 0 0 10px blue;
    }
`

const Wrapper = styled.div`
    height: 60vh;
    border-radius: 2rem;
    background-image: url(${(props) => props.img});
    background-size: cover;
`

const Title = styled.h2`
    text-align: center;
    padding: 1.5rem 0;
    color: #2a2a2a;
`

const Body = styled.p`
    line-height: 1.8;
`

const PostOpen = () => {
    const {id} = useParams()
    const img = posts[id-1].img
    const title = posts[id-1].title
    const body = posts[id-1].body
    return ( 
        <Container>
            <Navbar />
            <NavLink to="/"><GoBack><ArrowBackIosRounded fontSize='large'/></GoBack></NavLink>
            <Post>
                <Wrapper img={img}/>
                <Title>{title}</Title>
                <Body>{body}</Body>
            </Post>
            <Newsletter />
            <Footer />
        </Container>
     );
}
 
export default PostOpen;