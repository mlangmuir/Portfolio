import styled from "styled-components";
import { useContext } from "react";
import { Context } from "../Context";
import theShoestringTraveller from "../assets/the-shoestring-traveller.png";
import matthewLangmuirTutoring from "../assets/matthew-langmuir-tutoring.png";
import critter from "../assets/critter.png";
import facespace from "../assets/facespace.png";
import shopfit from "../assets/shopfit.png";
import rainingNyanCats from "../assets/raining-nyan-cats.png";
import slingair from "../assets/slingair.png";

const Projects = () => {

    const { projectsSection, scrollToContact } = useContext(Context);

    return (
        <Wrapper ref={projectsSection}>
            <Container>
                <Title>My Projects.</Title>
                <ColumnsDiv>
                    <ColumnOne>
                        <ProjectDiv>
                            <ProjectTextDiv>
                                <ProjectTitle>The Shoestring Traveller</ProjectTitle>
                                <ProjectDescription>Travel website where users can sign in to favourite and comment on travel tip articles.</ProjectDescription>
                                <ProjectTechDiv>
                                    <ProjectTech>React</ProjectTech>
                                    <ProjectTech>Node.js</ProjectTech>
                                    <ProjectTech>Express.js</ProjectTech>
                                    <ProjectTech>MongoDB</ProjectTech>
                                </ProjectTechDiv>
                            </ProjectTextDiv>
                            <Image src={theShoestringTraveller} />
                        </ProjectDiv>
                        <ProjectDiv>
                            <ProjectTextDiv>
                                <ProjectTitle>slingAir</ProjectTitle>
                                <ProjectDescription></ProjectDescription>
                                <ProjectTechDiv>
                                    <ProjectTech>React</ProjectTech>
                                    <ProjectTech>Node.js</ProjectTech>
                                    <ProjectTech>Express.js</ProjectTech>
                                    <ProjectTech>MongoDB</ProjectTech>
                                </ProjectTechDiv>
                            </ProjectTextDiv>
                            <Image src={slingair} />
                        </ProjectDiv>
                        <ProjectDiv>
                            <ProjectTextDiv>
                                <ProjectTitle>Facespace</ProjectTitle>
                                <ProjectDescription></ProjectDescription>
                                <ProjectTechDiv>
                                    <ProjectTech>React</ProjectTech>
                                    <ProjectTech>Node.js</ProjectTech>
                                    <ProjectTech>Express.js</ProjectTech>
                                </ProjectTechDiv>
                            </ProjectTextDiv>
                            <Image src={facespace} />
                        </ProjectDiv>
                        <ProjectDiv>
                            <ProjectTextDiv>
                                <ProjectTitle>Matthew Langmuir Tutoring</ProjectTitle>
                                <ProjectDescription></ProjectDescription>
                                <ProjectTechDiv>
                                    <ProjectTech>React</ProjectTech>
                                </ProjectTechDiv>
                            </ProjectTextDiv>
                            <Image src={matthewLangmuirTutoring} />
                        </ProjectDiv>
                    </ColumnOne>
                    <ColumnTwo>
                        <ProjectDiv>
                            <ProjectTextDiv>
                                <ProjectTitle>Shopfit</ProjectTitle>
                                <ProjectDescription></ProjectDescription>
                                <ProjectTechDiv>
                                    <ProjectTech>React</ProjectTech>
                                    <ProjectTech>Node.js</ProjectTech>
                                    <ProjectTech>Express.js</ProjectTech>
                                    <ProjectTech>MongoDB</ProjectTech>
                                </ProjectTechDiv>
                            </ProjectTextDiv>
                            <Image src={shopfit} />
                        </ProjectDiv>
                        <ProjectDiv>
                            <ProjectTextDiv>
                                <ProjectTitle>Critter</ProjectTitle>
                                <ProjectDescription></ProjectDescription>
                                <ProjectTechDiv>
                                    <ProjectTech>React</ProjectTech>
                                </ProjectTechDiv>
                            </ProjectTextDiv>
                            <Image src={critter} />
                        </ProjectDiv>
                        <ProjectDiv>
                            <ProjectTextDiv>
                                <ProjectTitle>Raining Nyan Cats</ProjectTitle>
                                <ProjectDescription></ProjectDescription>
                                <ProjectTechDiv>
                                    <ProjectTech>JavaScript</ProjectTech>
                                    <ProjectTech>HTML</ProjectTech>
                                    <ProjectTech>CSS</ProjectTech>
                                </ProjectTechDiv>
                            </ProjectTextDiv>
                            <Image src={rainingNyanCats} />
                        </ProjectDiv>
                    </ColumnTwo>
                </ColumnsDiv>
                <ContactMe onClick={scrollToContact}>Drop Me A Line</ContactMe>
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
    width: 70%;
`;

const Title = styled.h1`
    color: white;
    margin-top: 100px;
`;

const ColumnsDiv = styled.div`
    display: flex;
`;

const ColumnOne = styled.div`
    display: flex;
    flex-direction: column;
`;

const ColumnTwo = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProjectDiv = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: flex-end;
    width: 500px;

    :hover {
        cursor: pointer;
    }
`;

const ProjectTextDiv = styled.div`
    position: absolute;
    margin-bottom: 20px;
    margin-left: 20px;
    width: 500px;
`;

const ProjectTitle = styled.h2`
    width: 100%;
    margin-bottom: 5px;
`;

const ProjectDescription = styled.p`
    width: 80%;
    margin-bottom: 5px;
`;

const ProjectTechDiv = styled.div`
    display: flex;
`;

const ProjectTech = styled.div`
    background-color: black;
    border-radius: 20px;
    padding: 5px 10px;
    margin-right: 10px;
    font-size: 14px;
`;

const Image = styled.img`
    width: 95%;
    border-radius: 8px;

    :hover {
        filter: brightness(50%);
    }
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

export default Projects;