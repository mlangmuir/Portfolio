import styled from "styled-components";
import Github from "../assets/github-logo.png";
import Linkedin from "../assets/linkedin-logo.png";
import Twitter from "../assets/twitter-logo.png";
import Email from "../assets/email-logo.png";

const Home = () => {
    return (
        <>
        <Wrapper>
            <Container>
                <Intro>Hello, I'm</Intro>
                <Name>Matthew Langmuir.</Name>
                <Description>Full-stack web developer, avid traveller and sports enthusiast.</Description>
                <LogoDiv>
                    <Logo src={Github} alt="Github logo" />
                    <Logo src={Linkedin} alt="Linkedin logo" />
                    <Logo src={Twitter} alt="Twitter logo" />
                    <Logo src={Email} alt="Email logo" />
                </LogoDiv>
            </Container>
        </Wrapper>
        <Hello>Hello</Hello>
        <World>World</World>
        </>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 70vh;
    width: 70%;
    z-index: 1;
    background-color: transparent;
`;

const Container = styled.div`
    background-color: transparent;

`;

const Intro = styled.p`
    font-size: 24px;
    background-color: transparent;

`;

const Name = styled.h1`
    font-size: 72px;
    margin-top: 20px;
    background-color: transparent;

`;

const Description = styled.p`
    font-size: 24px;
    margin-top: 20px;
    background-color: transparent;

`;

const LogoDiv = styled.div`
    display: flex;
    width: 250px;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    background-color: transparent;

`;

const Logo = styled.img`
    height: 20px;
`;

const Hello = styled.p`
    font-size: 550px;
    margin-top: -250px;
    opacity: 6%;
    width: 100%;
    overflow: hidden;
    font-weight: 700;
    position: absolute;
    text-align: center;
    cursor: default;
    z-index: 0;
`;

const World = styled.p`
    font-size: 450px;
    margin-top: 250px;
    opacity: 6%;
    width: 100%;
    overflow: hidden;
    font-weight: 700;
    position: absolute;
    text-align: center;
    height: 425px;
    overflow: hidden;
    cursor: default;
    z-index: 0;
`;

export default Home;
