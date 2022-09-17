import styled from "styled-components";
import LogoSrc from "../assets/logo.png";

const Header = () => {
    return (
        <Wrapper>
        <Logo src={LogoSrc} alt="Matthew Langmuir logo" />
            <NavDiv>
                <Nav>Home</Nav>
                <Nav>About</Nav>
                <Nav>Projects</Nav>
                <Nav>Contact</Nav>
                <Button>Resume</Button>
            </NavDiv>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 30px;
    height: 70px;
`;

const Logo = styled.img`
    height: 50px;
`;

const NavDiv = styled.div`
    display: flex;
    justify-content: space-around;
    text-decoration: none;
    width: 40%;
    align-items: center;
`;

const Nav = styled.nav`

`;

const Button = styled.button`
    background-color: #00001c;
    color: white;
    border: 1px solid white;
    height: 40px;
    width: 90px;
    border-radius: 4px;
`;

export default Header;
