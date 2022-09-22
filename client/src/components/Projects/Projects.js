import styled from "styled-components";
import { useContext, useState } from "react";
import { Context } from "../../Context";
import Drawer from '@mui/material/Drawer';
import { projectData } from "../../projectData";
import ProjectsDrawer from "./ProjectsDrawer";

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
            <ProjectsDrawer project={project} anchor={anchor} toggleDrawer={toggleDrawer}/>
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
                                                    onTouchEnd={() => {
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
                                                    onTouchEnd={() => {
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

    @media (max-width: 700px) {
        width: 90%;
    }
`;

const Title = styled.h1`
    color: white;
    margin-top: 100px;
`;

const ColumnsDiv = styled.div`
    display: flex;
    justify-content: space-around;

    @media (max-width: 1025px) {
        flex-direction: column;
    }
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

    @media (max-width: 1025px) {
        width: 80%;
    }
`;

const ProjectTitle = styled.h2`
    width: 100%;
    margin-bottom: 5px;

    @media (max-width: 1200px) {
        font-size: 20px;
    }

    @media (max-width: 1025px) {
        font-size: 28px;
    }

    @media (max-width: 525px) {
        font-size: 18px;
    }
`;

const ProjectDescription = styled.p`
    width: 80%;
    margin-bottom: 5px;

    @media (max-width: 1200px) {
        font-size: 14px;
    }

    @media (max-width: 1025px) {
        font-size: 16px;
    }

    @media (max-width: 525px) {
        font-size: 14px;
    }
`;

const ProjectTechDiv = styled.div`
    display: flex;
`;

const ProjectTech = styled.div`
    background-color: black;
    border-radius: 20px;
    padding: 5px 10px;
    margin-right: 10px;
    font-size: 16px;

    @media (max-width: 1200px) {
        font-size: 12px;
        margin-right: 3px;
    }

    @media (max-width: 1025px) {
        font-size: 16px;
        margin-right: 10px;
    }

    @media (max-width: 525px) {
        font-size: 12px;
        margin-right: 1px;
    }
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
    height: 500%;
    background-color: #202124;
    padding: 40px;

    @media (max-width: 700px) {
        width: 400px;
    }

    @media (max-width: 500px) {
        width: 275px;
    }
`;

export default Projects;