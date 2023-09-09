import React, { useContext } from "react";
import { Link } from "react-scroll";
import { Ol, ModeContainer } from "./styles";
import SocialIcons from "../../SocialIcons/SocialIcons";
import { ThemeContext } from "styled-components";
import { Context } from "../../../hooks/context";
import { FiMoon, FiSun } from "react-icons/fi";

const RightNav = ({ open }) => {
  const { title } = useContext(ThemeContext);
  const { toggleTheme } = useContext(Context);

  return (
    <>
      <Ol open={open}>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-200}
            duration={2000}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
          >
            Achievements
          </Link>
        </li>

        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
          >
            <span className="contact">Contact</span>
          </Link>
        </li>

        <li>
          <ModeContainer>
            {title === "dark" ? (
              <FiMoon onClick={toggleTheme} />
            ) : (
              <FiSun onClick={toggleTheme} />
            )}
          </ModeContainer>
        </li>

        <li>
          <SocialIcons className="social-icons" />
        </li>
      </Ol>
    </>
  );
};

export default RightNav;
