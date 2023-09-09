import React, { useContext, useEffect } from "react";
import GlobalStyle from "./styles/global";

import NavBar from "./components/Nav/NavBar";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import MainTimeline from "./components/ExperienceTimeline/MainTimeline";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "styled-components";
import { Context } from "./hooks/context";

const App = () => {
  const { theme } = useContext(Context);

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Header />
      <About />
      <MainTimeline />
      <Testimonials />
      <Projects />
      <Contact />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
