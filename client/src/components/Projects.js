import styled from "styled-components";
import { useContext } from "react";
import { Context } from "../Context";

const Projects = () => {

    const { projectsSection, scrollToContact } = useContext(Context);

    return (
        <Wrapper ref={projectsSection}>
            <Container>
                <Title>My Projects.</Title>
                <ContactMe onClick={scrollToContact}>Drop Me A Line</ContactMe>
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: flex-start;
`;

const Container = styled.div`
    width: 70%;
`;

const Title = styled.h1`
    color: white;
    margin-top: 200px;
`;

const ContactMe = styled.div`
    background-color: #00001c;
    color: white;
    border: 1px solid white;
    height: 45px;
    width: 175px;
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

const A = styled.a`
    text-decoration: none;
`;

export default Projects;