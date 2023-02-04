import styled from "styled-components";
import LogoSrc from "../assets/logo.png";
import { useContext, useState } from "react";
import { Context } from "../Context";
import hamburger from "../assets/hamburger-icon.png";

const Header = () => {

    const { scrollToHome, scrollToAbout, scrollToProjects, scrollToContact } = useContext(Context);

    const [clickBurger, setClickBurger] = useState(false);

    const handleClickBurger = () => {
        setClickBurger(!clickBurger);
    }

    return (
        <>
        <Wrapper>
            <Container>
            <Logo src={LogoSrc} alt="Matthew Langmuir logo" onClick={scrollToHome} />
                <NavDiv>
                    <Nav onClick={scrollToHome} >Home</Nav>
                    <Nav onClick={scrollToAbout}>About</Nav>
                    <Nav onClick={scrollToProjects}>Projects</Nav>
                    <Nav onClick={scrollToContact}>Contact</Nav>
                    <Resume href="https://drive.google.com/file/d/1U2_FIiHyVWl6pxQYquR4m5LlKei1BF3a/view?usp=sharing" target="_blank" rel="noreferrer" className="resumeButton">
                        Resume
                    </Resume>
                </NavDiv>
                <Hamburger src={hamburger} onClick={handleClickBurger}/>
            </Container>
        </Wrapper>
        <MobileWrapper style={{display: !clickBurger && "none"}}>
                <MobileContainer>
                    <MobileNavDiv>
                        <MobileLink
                            onClick={() => {
                                handleClickBurger();
                                scrollToHome();
                            }}
                        >
                            Home
                        </MobileLink>
                        <MobileLink
                            onClick={() => {
                                handleClickBurger();
                                scrollToAbout();
                            }}
                        >
                            About
                        </MobileLink>
                        <MobileLink
                            onClick={() => {
                                handleClickBurger();
                                scrollToProjects();
                            }}
                        >
                            Projects
                        </MobileLink>
                        <MobileLink
                            onClick={() => {
                                handleClickBurger();
                                scrollToContact();
                            }}
                        >
                            Contact
                        </MobileLink>
                            <Resume
                                href="https://drive.google.com/file/d/1U2_FIiHyVWl6pxQYquR4m5LlKei1BF3a/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                                style={{margin: "30px 0", fontSize: "18px", backgroundColor: "#202124"}}
                                className="resumeButton"
                            >
                                Resume
                            </Resume>
                    </MobileNavDiv>
                </MobileContainer>
            </MobileWrapper>
        </>
        
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

    @media (max-width: 1100px) {
        width: 70%;
    }

    @media (max-width: 700px) {
        display: none;
    }
`;

const Nav = styled.nav`
    background-color: transparent;

    :hover {
        cursor: pointer;
    }
`;

const Resume = styled.a`
    text-decoration: none;
    height: 40px;
    width: 90px;
    background-color: #00001c;
    color: white;
    border: 1px solid white;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`;

const MobileWrapper = styled.div`
    display: none;

    @media (max-width: 725px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #202124;
        margin-top: 90px;
        position: fixed;
        z-index: 999;
        width: 100vw;
    }
`;

const MobileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MobileNavDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MobileLink = styled.nav`
    text-decoration: none;
    color: white;
    font-size: 20px;
    line-height: 35px;
    margin-top: 25px;

    :hover {
        cursor: pointer;
    }
`;

const Hamburger = styled.img`
    display: none;
    width: 35px;
    height: 35px;

    :hover {
        cursor: pointer;
    }

    @media (max-width: 700px) {
        display: block;
    }
`;

export default Header;