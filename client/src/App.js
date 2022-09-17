import GlobalStyle from "./globalStyle";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
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
        <Projects />
        <Contact />
      </Wrapper>
      <Footer />
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;


export default App;