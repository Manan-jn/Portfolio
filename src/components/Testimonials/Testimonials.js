import React from "react";
import { Container, Content } from "./styles";
import Cards from "./Cards/Cards";
import CardsCarousel from "./CardsCarousel/CardsCarousel";
import { GiAchievement } from "react-icons/gi";

const Contact = () => (
  <Container>
    <Content>
      <GiAchievement size={30} />
      <h2>Achievements</h2>
      <CardsCarousel />
      <Cards />
    </Content>
  </Container>
);

export default Contact;
