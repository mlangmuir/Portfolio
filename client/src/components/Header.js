import styled from "styled-components";
import LogoSrc from "../assets/logo.png";
import { useRef } from "react";

const Header = () => {

    const scrollToHome = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const scrollToAbout = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const scrollToProjects = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const scrollToContact = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }


    return (
        <Wrapper>
            <Container>
            <Logo src={LogoSrc} alt="Matthew Langmuir logo" onClick={scrollToHome} />
                <NavDiv>
                    <Nav onClick={scrollToHome} >Home</Nav>
                    <Nav onClick={scrollToAbout}>About</Nav>
                    <Nav onClick={scrollToProjects}>Projects</Nav>
                    <Nav onClick={scrollToContact}>Contact</Nav>
                    <Resume>
                        <A href="https://drive.google.com/file/d/1lk-1RKra021oQMynGT0iTYEIIx_X4_tM/view?usp=sharing" target="_blank" rel="noreferrer">
                            Resume
                        </A>
                    </Resume>
                </NavDiv>
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: fixed;
    background-color: black;
    width: 100%;
    z-index: 999;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 95%;
    display: flex;
    background-color: transparent;
    justify-content: space-between;
    align-items: center;
    margin: 10px 30px;
    height: 70px;
    z-index: 999;
`;

const Logo = styled.img`
    height: 50px;
    background-color: transparent;

    :hover {
        cursor: pointer;
    }
`;

const NavDiv = styled.div`
    display: flex;
    justify-content: space-around;
    text-decoration: none;
    width: 45%;
    align-items: center;
    background-color: transparent;
`;

const Nav = styled.nav`
    background-color: transparent;

    :hover {
        cursor: pointer;
    }
`;

const Resume = styled.div`
    background-color: #00001c;
    color: white;
    border: 1px solid white;
    height: 40px;
    width: 90px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`;

const A = styled.a`
    text-decoration: none;
`;

export default Header;