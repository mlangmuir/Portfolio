import { useContext } from "react";
import styled from "styled-components";
import aboutPic from "../assets/new-portfolio-photo.png"
import { Context } from "../Context";

const About = () => {

    const { aboutSection, scrollToProjects } = useContext(Context);

    return (
        <Wrapper ref={aboutSection}>
            <Container>
                <Title>About Me.</Title>
                <PhotoTextDiv>
                    <div>
                        <MobileAboutPic src={aboutPic} alt="Photo of Matthew Langmuir" />
                        <Paragraph>Hello, my name is Matthew. I am a software developer specializing in digital analytics and full-stack web development.</Paragraph>
                        <Paragraph>Here are the technologies I'm proficient in:</Paragraph>
                        <ListDiv>
                            <ColumnOne>
                                <li>JavaScript</li>
                                <li>React.js</li>
                                <li>Vue.js</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>MongoDB</li>
                            </ColumnOne>
                            <ColumnTwo>
                                <li>SQL</li>
                                <li>Adobe Experience Platform</li>
                                <li>Google Cloud Platform</li>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ColumnTwo>
                        </ListDiv>
                        <SeeProjects onClick={scrollToProjects}>See My Projects</SeeProjects>
                    </div>
                    <AboutPic src={aboutPic} alt="Photo of Matthew Langmuir" />
                </PhotoTextDiv>
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: flex-start;
    background-color: black;
    padding-bottom: 100px;
`;

const Container = styled.div`
    width: 60%;

    @media (max-width: 1200px) {
        width: 80%;
    }
`;

const Title = styled.h1`
    color: white;
    margin-top: 100px;
`;

const PhotoTextDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

const ListDiv = styled.div`
    display: flex;
    line-height: 30px;

    @media (max-width: 1010px) {
        flex-direction: column;
    }
`;

const ColumnOne = styled.div`
    margin-right: 35px;
`;

const ColumnTwo = styled.div`
    margin-left: 35px;

    @media (max-width: 1010px) {
        margin-left: 0;
    }
`;

const SeeProjects = styled.div`
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

const Paragraph = styled.p`
    font-size: 18px;
    line-height: 30px;
    margin-right: 50px;
    text-align: justify;
    margin-bottom: 20px;

    @media (max-width: 600px) {
        margin-right: 0;
    }
`;

const AboutPic = styled.img`
    height: 425px;

    @media (max-width: 900px) {
        display: none;
    }
`;

const MobileAboutPic = styled.img`
    display: none;

    @media (max-width: 900px) {
        display: block;
        width: 400px;
        margin-bottom: 30px;
    }

    @media (max-width: 500px) {
        width: 300px;
    }
`;

export default About;