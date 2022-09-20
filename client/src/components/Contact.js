import styled from "styled-components";
import { useContext } from "react";
import { Context } from "../Context";

const Contact = () => {

    const { contactSection } = useContext(Context);

    return (
        <Wrapper ref={contactSection}>
            <Container>
                <Title>Contact Me.</Title>
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
    width: 40%;
`;

const Title = styled.h1`
    color: white;
    margin-top: 200px;
`;

export default Contact;