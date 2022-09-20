import { createContext, useRef } from 'react';

export const Context = createContext();

const Provider = ({ children }) => {

    const aboutSection = useRef(null);
    const projectsSection = useRef(null);
    const contactSection = useRef(null);

    const scrollToHome = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const scrollToAbout = () => 
        window.scrollTo({
            top: aboutSection.current.offsetTop,
            behavior: "smooth"
        })
    
    const scrollToProjects = () => 
    window.scrollTo({
        top: projectsSection.current.offsetTop,
        behavior: "smooth"
    })

    const scrollToContact = () => 
    window.scrollTo({
        top: contactSection.current.offsetTop,
        behavior: "smooth"
    })

    return (
        <Context.Provider
            value={{
                aboutSection,
                projectsSection,
                contactSection,
                scrollToHome,
                scrollToAbout,
                scrollToProjects,
                scrollToContact
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default Provider;