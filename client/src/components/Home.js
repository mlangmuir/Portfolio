import styled from "styled-components";

const Home = () => {
    return (
        <Wrapper>
            <Container>
                <Intro>Hello, I'm</Intro>
                <Name>Matthew Langmuir.</Name>
                <Description>Full-stack web developer, avid traveller and sports enthusiast.</Description>
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 70vh;
    width: 70%;
`;

const Container = styled.div`
`;

const Intro = styled.p`
    font-size: 24px;
`;

const Name = styled.h1`
    font-size: 72px;
    margin-top: 20px;
`;

const Description = styled.p`
    font-size: 24px;
    margin-top: 20px;
`;

export default Home;
