import styled from "styled-components";
import Github from "../assets/github-logo.png";
import Linkedin from "../assets/linkedin-logo.png";
import Twitter from "../assets/twitter-logo.png";
import Email from "../assets/email-logo.png";
import { useContext } from "react";
import { Context } from "../Context";

const Home = () => {

    const { scrollToAbout } = useContext(Context);

    return (
        <>
        <Wrapper>
            <Container>
                <Intro>Hello, I'm</Intro>
                <Name>Matthew Langmuir.</Name>
                <Description>Software developer, avid traveller and sports enthusiast.</Description>
                <LogoDiv>
                    <a href="https://github.com/mlangmuir" target="_blank" rel="noreferrer">
                        <Logo src={Github} alt="Github logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/matthewlangmuir" target="_blank" rel="noreferrer">
                        <Logo src={Linkedin} alt="Linkedin logo" />
                    </a>
                    <a href="https://twitter.com/codeMatt0101" target="_blank" rel="noreferrer">
                        <Logo src={Twitter} alt="Twitter logo" />
                    </a>
                    <a href="mailto: matthewlangmuir@hotmail.com">
                        <Logo src={Email} alt="Email logo" />
                    </a>
                </LogoDiv>
                <ReadMore onClick={scrollToAbout}>Read More About Me</ReadMore>
            </Container>
        </Wrapper>
        <BackgroundText>Hello<p style={{fontSize: "380px"}}>World</p></BackgroundText>
        <BlackBackground />
        </>
    );
}

const Wrapper = styled.div`
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: transparent;
`;

const Container = styled.div`
    background-color: transparent;
    width: 70%;
`;

const Intro = styled.p`
    font-size: 24px;
    background-color: transparent;
`;

const Name = styled.h1`
    font-size: 72px;
    margin-top: 20px;
    background-color: transparent;

    @media (max-width: 530px) {
        font-size: 52px;
    }
`;

const Description = styled.p`
    font-size: 24px;
    margin-top: 20px;
    background-color: transparent;

    @media (max-width: 530px) {
        font-size: 20px;
    }
`;

const ReadMore = styled.div`
    background-color: #00001c;
    color: white;
    border: 1px solid white;
    height: 45px;
    width: 200px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

    :hover {
        cursor: pointer;
        opacity: 70%;
    }
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
    background-color: transparent;

    :hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`;

const BackgroundText = styled.div`
    margin-top: 90px;
    font-size: 470px;
    opacity: 7%;
    width: 100%;
    font-weight: 700;
    position: absolute;
    text-align: center;
    line-height: 360px;
    letter-spacing: 25px;
    overflow: hidden;
    cursor: default;
    z-index: 1;
    background-color: transparent;
`;

const BlackBackground = styled.div`
    background-color: black;
    z-index: 0;
    width: 100%;
    height: 100vh;
    position: absolute;
`;

export default Home;