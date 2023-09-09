import React from "react";
import { Container, Content, Background } from "./styles";

const Header = () => (
  <Container>
    <Content>
      <Background />
      <div className="background-text">
        <h1>Manan Jain</h1>
        <p>"Unleashing the Code: A Fearless Explorer in the Digital Realm!"</p>
      </div>
    </Content>
  </Container>
);

export default Header;
