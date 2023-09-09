import React from "react";
import { Container, Content, AboutText } from "./styles";
import SocialIcons from "../SocialIcons/SocialIcons";
import AboutCards from "./Cards/AboutCards";
import CarouselAboutCards from "./CarouselCards/CarouselAboutCards";

const About = () => {
  return (
    <Container data-testid="container">
      <Content>
        <AboutText>
          <h5 id="about">ABOUT ME</h5>
          <h1>hello, I'm Manan Jain</h1>
          <p data-aos="fade-up" className="about-me">
            Hello, I'm Manan Jain, a senior at NIT Delhi, specializing in
            Electronics and Communication Engineering. As a full-stack web
            developer proficient in the MERN stack, I craft digital solutions
            that transcend boundaries. I thrive on embracing novel technologies,
            tackling real-world challenges, and leaving a positive mark on the
            world. Proficient in C, C++, React, and React-Native, I'm also
            diving into new experiences, both in code and water.
          </p>
          <SocialIcons className="social-icons" />
          <AboutCards />
          <CarouselAboutCards />
        </AboutText>
      </Content>
    </Container>
  );
};

export default About;
