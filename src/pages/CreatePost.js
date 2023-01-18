import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Slider from "../components/Slider";
import { addPost } from "../redux/manage";
import { max_333, max_500 } from "../responsive";

const Container = styled.div`
`
const Wrapper = styled.div`
    width: 85%;
    margin: 3rem auto;
    border-radius: 2rem;
    overflow: hidden;
    padding-bottom: 2rem;
    border: 1px solid #5b59e0;
    box-sizing: border-box;
    overflow: hidden;
`

const Top = styled.h1`
    padding: 4rem;
    background-color: #5b59e0;
    text-align: center;
    color: white;
    font-weight: 300;
    ${max_500({fontSize: '1.5rem', padding: '4rem 2rem'})}
    ${max_333({fontSize: '1.3rem'})}
`

const Form = styled.form`
    margin-top: 2rem;
` 


const Title = styled.div`
    background-color: red;
    height: 4rem;
    border-bottom: 0.5px solid lightgray;
    margin-top: 2rem;
`

const Input = styled.input`
    width: 100%;
    height: 100%;
    padding-left: 5%;
    outline: none;
    border: none;
    box-sizing: border-box;
    font-size: 1.6rem;
    cursor: pointer;
    &:focus-visible {
        box-shadow: 0 0 3rem #9ba3ec;
    }
    ${max_500({fontSize: '1.4rem'})}
`

const Body = styled.div`
    height: 10rem;
`

const InputBody = styled.textarea`
    width: 100%;
    height: 100%;
    outline: none;
    padding-left: 5%;
    padding-top: 1.5rem;
    border: none;
    box-sizing: border-box;
    font-size: 1.1rem;
    cursor: pointer;
    &:focus-visible {
        box-shadow: 0 0 3rem #9ba3ec;
    }
    ${max_500({fontSize: '0.8rem'})}
`

const Category = styled.select`
    display: block;
    margin-left: 5%;
    padding: 0.5rem 2rem;
`

const Option = styled.option`
`

const Submit = styled.button`
    margin-left: 5%;
    padding: 0.8em 2em;
    font-size: 1rem;
    margin-top: 4rem;
    cursor: pointer;
    background-color: transparent;
    border: 0.3rem solid #7b79f8;
    transition: all 100ms;
    &:hover {
        background-color: #7b79f8;
        color: white;
    }
    ${max_500({fontSize: '0.8rem'})}
`


const CreatePost = () => {
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const dispatch = useDispatch();
    const { allPosts } = useSelector(state => state.blog);

    return ( 
        <Container>
            <Navbar />
            <Wrapper>      
                <Top>Let the world know...</Top>
                <Form>
                    <Category value={category} onChange={(e) => setCategory(e.target.value)}>
                        <Option>Space</Option>
                        <Option>Travel</Option>
                        <Option>Tech</Option>
                    </Category>
                    <Title>
                        <Input type='text' placeholder="An amazing title"
                        value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </Title>
                    <Body>
                        <InputBody placeholder='An engaging body'
                        value={body} onChange={(e) => setBody(e.target.value)}>
                        </InputBody>
                    </Body>
                    <Submit onClick={(e) => {
                        e.preventDefault(); 
                        dispatch(addPost({
                            id: allPosts.length + 1,
                            title,
                            body,
                            category
                        }));
                        setTitle("");
                        setBody("");
                        setCategory('Space');
                    }}>Post</Submit>
                </Form>
            </Wrapper>
            <Slider />
            <Newsletter />
            <Footer top={true}/>
        </Container>
     );
}
 
export default CreatePost;