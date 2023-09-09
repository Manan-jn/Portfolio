import React, { useContext } from "react";
import { Content, Card, Container, IconContainer } from "./styles";
import { Context } from "../../../hooks/context";
import useScroll from "../../../hooks/useScroll";

const AboutCards = () => {
  const [effect] = useScroll();
  const { hobbies } = useContext(Context);

  return (
    <Content>
      {hobbies.map((item) => (
        <Container data-aos="fade-up" key={item.id}>
          <Card>
            <IconContainer>
              <img src={item.img} alt="Icon img" />
            </IconContainer>
            <h3>{item.title1}</h3>
            <h3>{item.title2}</h3>
            <h3>git add README.md{item.title3}</h3>
          </Card>
        </Container>
      ))}
    </Content>
  );
};

export default AboutCards;
