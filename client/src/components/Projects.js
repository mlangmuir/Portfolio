import styled from "styled-components";
import { useContext, useState } from "react";
import { Context } from "../Context";
import Drawer from '@mui/material/Drawer';
import { projectDataOne } from "../projectData";
import { projectDataTwo } from "../projectData";

const Projects = () => {

    const [show, setShow] = useState(null);
    const [project, setProject] = useState(null);

    const { projectsSection, scrollToContact } = useContext(Context);

    const [state, setState] = useState({ right: false, });

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
            {projectDataOne.map((item, index) => {
                return (
                <div key={index}>
                    {item.shortName === project &&
                    <>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <img src={item.imgSrc} style={{width: "400px"}} />
            <h2>About</h2>
            <p>{item.about}</p>
            <h2>Technologies</h2>
            {item.technologies.map((item, index) => {
                return <button key={index}>{item}</button>
            })}
            <h2>Website</h2>
            <p>{item?.website}</p>
            <h2>Demo</h2>
            <p>{item?.demo}</p>
            <h2>Github</h2>
            <p>{item?.github}</p>
            </>
                    }
            </div>
                )
            })}
        </Box>
    );

    console.log(project)

    return (
        <Wrapper ref={projectsSection}>
            <Container>
                <Title>My Projects.</Title>
                <ColumnsDiv>

                    <ColumnOne>
                        {projectDataOne.map((project, index) => {
                        return ( <div key={index}>
                            {['left'].map((anchor) => (
                            <div key={anchor}>
                                <ProjectDiv
                                    onClick={toggleDrawer(anchor, true)}
                                    onMouseOver={() => setShow(project.shortName)}
                                    onMouseLeave={() => {
                                        setShow(null);
                                        setProject(project.shortName);
                                    }}
                                >
                                    {show === project.shortName &&
                                    <ProjectTextDiv>
                                        <ProjectTitle>{project.name}</ProjectTitle>
                                        <ProjectDescription>{project.description}</ProjectDescription>
                                        <ProjectTechDiv>
                                            {project.technologies.map((technology, index) => {
                                                return <ProjectTech key={index}>{technology}</ProjectTech>
                                            })}
                                        </ProjectTechDiv>
                                    </ProjectTextDiv>
                                    }
                                    <Image
                                        src={project.imgSrc}
                                        style={{ filter: show === project.shortName && "brightness(35%)"}}
                                    />
                                </ProjectDiv>
                                <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                >
                                    {list(anchor)}
                                </Drawer>
                            </div>
                            ))}
                        </div>
                        )
                        })}
                    </ColumnOne>

                    <ColumnTwo>
                        {projectDataTwo.map((project, index) => {
                            return ( <div key={index}>
                                {['right'].map((anchor) => (
                                <div key={anchor}>
                                    <ProjectDiv
                                        onClick={toggleDrawer(anchor, true)}
                                        onMouseOver={() => setShow(project.shortName)}
                                        onMouseLeave={() => setShow(null)}
                                    >
                                        {show === project.shortName &&
                                        <ProjectTextDiv>
                                            <ProjectTitle>{project.name}</ProjectTitle>
                                            <ProjectDescription>{project.description}</ProjectDescription>
                                            <ProjectTechDiv>
                                                {project.technologies.map((technology, index) => {
                                                    return <ProjectTech key={index}>{technology}</ProjectTech>
                                                })}
                                            </ProjectTechDiv>
                                        </ProjectTextDiv>
                                        }
                                        <Image
                                            src={project.imgSrc}
                                            style={{ filter: show === project.shortName && "brightness(35%)"}}
                                        />
                                    </ProjectDiv>
                                    <Drawer
                                        anchor={anchor}
                                        open={state[anchor]}
                                        onClose={toggleDrawer(anchor, false)}
                                    >
                                        {list(anchor)}
                                    </Drawer>
                                </div>
                                ))}
                            </div>
                            )
                            })}
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
    margin-bottom: 8px;
`;

const ProjectDescription = styled.p`
    width: 80%;
    margin-bottom: 10px;
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
    height: 100vh;
    color: white;
    background-color: black;
    opacity: 90%;
`;

export default Projects;