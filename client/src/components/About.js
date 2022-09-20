import { useContext } from "react";
import styled from "styled-components";
import aboutPic from "../assets/new-portfolio-photo.jpg"
import { Context } from "../Context";

const About = () => {

    const { aboutSection, scrollToProjects } = useContext(Context);

    return (
        <Wrapper ref={aboutSection}>
            <Container>
                <Title>About Me.</Title>
                <PhotoTextDiv>
                    <div>
                        <Paragraph>Hello, my name is Matthew and I am passionate about creating web applications and learning new technologies. Through projects done at Concordia University and Wonders Academy, I have gained the capacity to build full-stack applications that offer an exceptional user experience.</Paragraph>
                        <Paragraph>Here are the technologies that I have used for my projects:</Paragraph>
                        <ListDiv>
                            <ColumnOne>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>MongoDB</li>
                            </ColumnOne>
                            <ColumnTwo>
                                <li>JavaScript</li>
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
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: flex-start;
`;

const Container = styled.div`
    width: 60%;
`;

const Title = styled.h1`
    color: white;
    margin-top: 100px;
`;

const PhotoTextDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const ListDiv = styled.div`
    display: flex;
    line-height: 30px;
`;

const ColumnOne = styled.div`
    margin-right: 35px;
`;

const ColumnTwo = styled.div`
    margin-left: 35px;
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

const A = styled.a`
    text-decoration: none;
`;

const Paragraph = styled.p`
    font-size: 18px;
    line-height: 30px;
    margin-right: 50px;
    text-align: justify;
    margin-bottom: 20px;
`;

const AboutPic = styled.img`
    height: 425px;
`;

export default About;