import React from "react";
import { Form } from "./styles";
import Input from "../Input/Input";
import Button from "../Button/Button";
import TextArea from "../TextArea/TextArea";
import { FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

const ContactForm = () => {
  const clickHandler = () => {};

  return (
    <Form name="contact" method="post">
      <input type="hidden" name="form-name" value="contact"></input>
      <Input
        placeholder={"Name"}
        type="text"
        name="name"
        id="name"
        icon={FiUser}
        required
      />

      <Input
        placeholder={"E-mail"}
        type="email"
        name="email"
        id="email"
        icon={FiMail}
        required
      />

      <TextArea
        placeholder={"Message"}
        name="message"
        id="message"
        icon={FiMessageSquare}
        required
      />
      <Button type="submit" onClick={clickHandler}>
        Send Message
      </Button>
    </Form>
  );
};

export default ContactForm;
