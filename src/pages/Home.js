import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Posts from "../components/Posts";
import Slider from "../components/Slider";

const Container = styled.div`
` 

const Home = () => {
    return ( 
        <Container>
            <Navbar />
            <Slider />
            <Posts />
            <Newsletter />
            <Footer />
        </Container>
     );
}
 
export default Home;