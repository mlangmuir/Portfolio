import styled from "styled-components";
import { projectData } from "../../projectData";
import aboutIcon from "../../assets/about-icon.png";
import techIcon from "../../assets/tech-icon.png";
import websiteIcon from "../../assets/web-icon.png";
import demoIcon from "../../assets/demo-icon.png";
import githubIcon from "../../assets/github-logo.png";
import backButton from "../../assets/back-button.png";

const ProjectsDrawer = ({ project, anchor, toggleDrawer }) => {

    return (
        <>
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
        </>
    )
}

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
    font-size: 28px;
    border-top: 0.5px solid grey;
    padding-top: 30px;

    @media (max-width: 500px) {
        font-size: 24px;
    }
`;

const DescriptionText = styled.p`
    margin-top: 15px;
    font-size: 16px;
`;

const Photo = styled.img`
    margin-top: 20px;
    width: 100%;
`;

const AboutTitle = styled.h3`
    margin-top: 35px;
    margin-bottom: 10px;
    font-size: 22px;
`;

const AboutText = styled.p`
    font-size: 16px;
    text-align: justify;
`;

const TechTitle = styled.h3`
    margin-top: 35px;
    margin-bottom: 10px;
    font-size: 22px;
`;

const TechDiv = styled.div`
    display: flex;
    margin-top: 10px;
`;

const TechText = styled.div`
    height: 22px;
    background-color: grey;
    border-radius: 10px;
    padding: 0 10px;
    font-size: 16px;
    margin-right: 10px;

    @media (max-width: 700px) {
        font-size: 14px;
    }

    @media (max-width: 500px) {
        padding: 0 5px;
        border-radius: 4px;
    }
`;

const WebsiteTitle = styled.h3`
    margin-top: 35px;
    margin-bottom: 10px;
    font-size: 22px;
`;

const WebsiteText = styled.a`
    font-size: 16px;

    @media (max-width: 700px) {
        font-size: 14px;
    }

    @media (max-width: 500px) {
        font-size: 11px;
    }
`;

const DemoTitle = styled.h3`
    margin-top: 35px;
    margin-bottom: 10px;
    font-size: 22px;
`;

const DemoText = styled.a`
    font-size: 16px;

    @media (max-width: 700px) {
        font-size: 14px;
    }

    @media (max-width: 500px) {
        font-size: 11px;
    }
`;

const GithubTitle = styled.h3`
    margin-top: 35px;
    margin-bottom: 10px;
    font-size: 22px;
`;

const GithubText = styled.a`
    font-size: 16px;

    @media (max-width: 700px) {
        font-size: 14px;
    }

    @media (max-width: 500px) {
        font-size: 11px;
    }
`;

const Icon = styled.img`
    width: 17px;
    margin-right: 8px;
`;

export default ProjectsDrawer;