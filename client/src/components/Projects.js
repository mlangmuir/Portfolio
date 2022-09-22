import styled from "styled-components";
import { useContext, useState } from "react";
import { Context } from "../Context";
import Drawer from '@mui/material/Drawer';
import { projectData } from "../projectData";
import aboutIcon from "../assets/about-icon.png";
import techIcon from "../assets/tech-icon.png";
import websiteIcon from "../assets/web-icon.png";
import demoIcon from "../assets/demo-icon.png";
import githubIcon from "../assets/github-logo.png";
import backButton from "../assets/back-button.png";

const Projects = () => {

    const { projectsSection, scrollToContact } = useContext(Context);

    const [show, setShow] = useState(null);
    const [state, setState] = useState({ right: false, });
    const [project, setProject] = useState("");

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            {projectData.map((item, index) => {
                return (
                    <div key={index}>
                        {item.shortName === project &&
                            <>
                                <DrawerTopDiv>
                                    <BackButton
                                        src={backButton}
                                        alt="Back button"
                                        onClick={toggleDrawer(anchor, false)}
                                    />
                                    <DrawerTopTitle>My Projects.</DrawerTopTitle>
                                </DrawerTopDiv>
                                <Name>{item.name}</Name>
                                <DescriptionText>{item.description}</DescriptionText>
                                <Photo src={item.imgSrc}/>
                                <AboutTitle>
                                    <Icon src={aboutIcon} alt="About icon" />
                                    About
                                </AboutTitle>
                                <AboutText>{item.about}</AboutText>
                                <TechTitle>
                                    <Icon src={techIcon} alt="Technology icon" />
                                    Technologies
                                </TechTitle>
                                <TechDiv>
                                    {item.technologies.map((tech, index) => {
                                        return <TechText key={index}>{tech}</TechText>
                                    })}
                                </TechDiv>
                                {item?.website &&
                                    <>
                                        <WebsiteTitle>
                                            <Icon src={websiteIcon} alt="Website icon" />
                                            Website
                                        </WebsiteTitle>
                                        <WebsiteText href={item.website} target="_blank">{item.website}</WebsiteText>
                                    </>
                                }
                                {item?.demo &&
                                    <>
                                        <DemoTitle>
                                            <Icon src={demoIcon} alt="Demo icon" />
                                            Demo
                                        </DemoTitle>
                                        <DemoText href={item.demo} target="_blank">{item.demo}</DemoText>
                                    </>
                                }
                                <GithubTitle>
                                    <Icon src={githubIcon} alt="Github icon" />
                                    Github
                                </GithubTitle>
                                <GithubText href={item.github} target="_blank">{item.github}</GithubText>
                            </>
                        }
                    </div>
                )
            })}
        </Box>
    );

    return (
        <Wrapper ref={projectsSection}>
            <Container>
                <Title>My Projects.</Title>
                <ColumnsDiv>
                    <ColumnOne>
                        {['right'].map((anchor) => (
                            <div key={anchor}>
                                {projectData.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            {item.column === 1 &&
                                                <ProjectDiv
                                                    onClick={toggleDrawer(anchor, true)}
                                                    onMouseOver={() => setShow(item.shortName)}
                                                    onMouseLeave={() => {
                                                        setShow(null);
                                                        setProject(item.shortName);
                                                    }}
                                                >
                                                    {show === item.shortName &&
                                                    <ProjectTextDiv>
                                                        <ProjectTitle>{item.name}</ProjectTitle>
                                                        <ProjectDescription>{item.description}</ProjectDescription>
                                                        <ProjectTechDiv>
                                                            {item.technologies.map((tech, index) => {
                                                                return <ProjectTech key={index}>{tech}</ProjectTech>
                                                            })}
                                                        </ProjectTechDiv>
                                                    </ProjectTextDiv>
                                                    }
                                                    <Image
                                                        src={item.imgSrc}
                                                        style={{ filter: show === item.shortName && "brightness(35%)"}}
                                                    />
                                                </ProjectDiv>
                                            }
                                        </div>
                                    )
                                })}
                                <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                >
                                    {list(anchor)}
                                </Drawer>
                            </div>
                        ))}
                    </ColumnOne>

                    <ColumnTwo>
                        {['right'].map((anchor) => (
                            <div key={anchor}>
                                {projectData.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            {item.column === 2 &&
                                                <ProjectDiv
                                                    onClick={toggleDrawer(anchor, true)}
                                                    onMouseOver={() => setShow(item.shortName)}
                                                    onMouseLeave={() => {
                                                        setShow(null);
                                                        setProject(item.shortName);
                                                    }}
                                                >
                                                    {show === item.shortName &&
                                                    <ProjectTextDiv>
                                                        <ProjectTitle>{item.name}</ProjectTitle>
                                                        <ProjectDescription>{item.description}</ProjectDescription>
                                                        <ProjectTechDiv>
                                                            <ProjectTechDiv>
                                                                {item.technologies.map((tech, index) => {
                                                                    return <ProjectTech key={index}>{tech}</ProjectTech>
                                                                })}
                                                            </ProjectTechDiv>
                                                        </ProjectTechDiv>
                                                    </ProjectTextDiv>
                                                    }
                                                    <Image
                                                        src={item.imgSrc}
                                                        style={{ filter: show === item.shortName && "brightness(35%)"}}
                                                    />
                                                </ProjectDiv>
                                            }
                                        </div>
                                    )
                                })}
                                <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                >
                                    {list(anchor)}
                                </Drawer>
                            </div>
                        ))}
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
    justify-content: space-around;
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
    width: 100%;

    :hover {
        cursor: pointer;
    }
`;

const ProjectTextDiv = styled.div`
    position: absolute;
    margin-bottom: 20px;
    margin-left: 20px;
    width: 40%;
    z-index: 1;
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

const Box = styled.div`
    width: 600px;
    height: 120%;
    background-color: #202124;
    padding: 40px;
`;

const DrawerTopDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

const DrawerTopTitle = styled.h3`
    font-size: 16px;
    opacity: 70%;
`;

const BackButton = styled.img`
    width: 25px;
    opacity: 70%;

    :hover {
        cursor: pointer;
    }
`;

const Name = styled.h2`
    font-size: 22px;
    border-top: 0.5px solid grey;
    padding-top: 30px;
`;

const DescriptionText = styled.p`
    margin-top: 10px;
    font-size: 14px;
`;

const Photo = styled.img`
    margin-top: 20px;
    width: 100%;
`;

const AboutTitle = styled.h3`
    margin-top: 20px;
`;

const AboutText = styled.p`
    margin-top: 10px;
    font-size: 14px;
`;

const TechTitle = styled.h3`
    margin-top: 30px;
`;

const TechDiv = styled.div`
    display: flex;
    margin-top: 10px;
`;

const TechText = styled.div`
    height: 18px;
    background-color: grey;
    border-radius: 8px;
    padding: 0 10px;
    font-size: 14px;
    margin-right: 5px;
`;

const WebsiteTitle = styled.h3`
    margin-top: 30px;
`;

const WebsiteText = styled.a`
    margin-top: 15px;
    font-size: 14px;
`;

const DemoTitle = styled.h3`
    margin-top: 30px;
`;

const DemoText = styled.a`
    margin-top: 15px;
    font-size: 14px;
`;

const GithubTitle = styled.h3`
    margin-top: 30px;
`;

const GithubText = styled.a`
    margin-top: 15px;
    font-size: 14px;
`;

const Icon = styled.img`
    width: 15px;
    margin-right: 8px;
`;

export default Projects;