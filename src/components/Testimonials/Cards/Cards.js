import React, { useContext } from "react";
import { Container, Card } from "./styles";
import { Context } from "../../../hooks/context";

const Cards = () => {
  const { Achievements } = useContext(Context);

  return (
    <Container>
      {Achievements.map((item) => (
        <Card data-aos="fade-up" key={item.id}>
          <p>{item.description}</p>
          <img src={item.img} alt="Achievement img" />
          <h3>{item.name}</h3>
        </Card>
      ))}
    </Container>
  );
};

export default Cards;
