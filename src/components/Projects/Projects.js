import React from "react";
import { Container, Content } from "./styles";
import Cards from "./Cards/Cards";

const Projects = () => (
  <Container>
    <Content>
      <h5 id="portfolio">PORTFOLIO</h5>
      <h2>check out my work</h2>
      <Cards />
    </Content>
  </Container>
);

export default Projects;
