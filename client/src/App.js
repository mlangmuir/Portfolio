import GlobalStyle from "./globalStyle";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styled from "styled-components";

const App = () => {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Home />
        <About />
        <Projects />
        <Contact />
      </Wrapper>
      <Footer />
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;