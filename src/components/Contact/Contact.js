import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import { Container, ContactInfo, Content } from "./styles";

const Contact = () => (
  <Container>
    <Content>
      <ContactInfo>
        <h5 id="contact">Contact</h5>
        <h2>want to chat?</h2>
        <p>
          If you are interested in my work, fill out the form and I'll get in
          touch with you as soon as possible. <br /> <br />
          If you prefer, you can send me an email{" "}
          <a href="mailto:manan.nitdl@gmail.com">manan.nitdl@gmail.com</a>
        </p>
      </ContactInfo>
      <ContactForm />
    </Content>
  </Container>
);

export default Contact;
