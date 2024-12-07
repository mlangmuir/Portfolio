import styled from "styled-components";
import { useContext, useRef, useState } from "react";
import { Context } from "../Context";
import emailjs from "emailjs-com";

const Contact = () => {

    const { contactSection } = useContext(Context);

    const form = useRef();

    const [sendSuccess, setSendSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // params: ('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        emailjs.sendForm("gmail", "template_wxm3g3r", form.current, "wVbfUlRQ5_wlcZvJ0")
            .then((result) => {
                setSendSuccess(true);
            }, (error) => {
                alert("Sorry! An error has occurred. Please try again!");
            });
    }

    return (
        <Wrapper ref={contactSection}>
            <Container>
                <Title>Contact Me.</Title>
                    {sendSuccess && <Confirmation><p>Thank you for contacting me. I will be in touch as soon as possible!</p></Confirmation>}
                    <Form onSubmit={handleSubmit} ref={form} style={{display: sendSuccess === true && "none"}}>
                        <Description>Drop me a line or shoot me an email directly at matthewlangmuir@hotmail.com</Description>
                        <InputDiv>
                            <Input type="name" placeholder="Name" name="name" required />
                        </InputDiv>
                        <InputDiv>
                            <Input type="email" placeholder="Email" name="email" required />
                        </InputDiv>
                        <InputDiv>
                            <TextArea placeholder="Message" name="message" required></TextArea>
                        </InputDiv>
                        <InputDiv>
                            <Submit type="submit" />
                        </InputDiv>
                    </Form>
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: black;
    padding-bottom: 95px;
`;

const Container = styled.div`
    width: 40%;

    @media (max-width: 990px) {
        width: 60%;
    }

    @media (max-width: 660px) {
        width: 80%;
    }
`;

const Title = styled.h1`
    margin-top: 100px;
`;

const Confirmation = styled.div`
    z-index: 6;
    width: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-top: 50px;
`;

const Form = styled.form`
    z-index: 3;
    max-width: 500px;
    font-size: 18px;
    text-shadow: 1px 1px black;
    border-radius: 25px;
`;

const Description = styled.p`
    font-size: 18px;
    margin-top: 30px;

    @media (max-width: 370px) {
        font-size: 16px;
    }
`;

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`;

const Input = styled.input`
    width: 98%;
    height: 25px;
    padding: 10px;
    display: flex;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    resize: none;
    color: black;
`;

const TextArea = styled.textarea`
    width: 98%;
    height: 100px;
    font-size: 16px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    resize: none;
    color: black;
`;

const Submit = styled.input`
    height: 45px;
    width: 100px;
    background-color: black;
    font-size: 18px;
    border: 1px solid white;
    border-radius: 4px;

    :hover {
        cursor: pointer;
        opacity: 75%;
    }
`;

export default Contact;