import styled from "styled-components";
import Github from "../assets/github-logo.png";
import Linkedin from "../assets/linkedin-logo.png";
import Twitter from "../assets/twitter-logo.png";
import Email from "../assets/email-logo.png";

const Footer = () => {
    return (
        <Wrapper>
            <LogoDiv>
                <a href="https://github.com/mlangmuir" target="_blank" rel="noreferrer">
                    <Logo src={Github} alt="Github logo" />
                </a>
                <a href="https://www.linkedin.com/in/matthew-langmuir-49a137221/" target="_blank" rel="noreferrer">
                    <Logo src={Linkedin} alt="Linkedin logo" />
                </a>
                <a href="https://twitter.com/codeMatt0101" target="_blank" rel="noreferrer">
                    <Logo src={Twitter} alt="Twitter logo" />
                </a>
                <a href="mailto: matthewlangmuir@hotmail.com">
                    <Logo src={Email} alt="Email logo" />
                </a>
            </LogoDiv>
            <Text>Developed by Matthew Langmuir</Text>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LogoDiv = styled.div`
    display: flex;
    width: 250px;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    margin-bottom: 15px;
`;

const Logo = styled.img`
    height: 20px;
    background-color: transparent;

    :hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`;

const Text = styled.p`
    font-size: 14px;
    margin-bottom: 25px;
`;

export default Footer;