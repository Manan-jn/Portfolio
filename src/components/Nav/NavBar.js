import React from "react";
import Burger from "./Burger/Burger";
import { Nav } from "./styles";

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">Manan Jain</div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
