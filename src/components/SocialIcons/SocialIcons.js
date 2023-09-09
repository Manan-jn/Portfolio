import React from "react";
import { GoLocation } from "react-icons/go";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiDevpost } from "react-icons/si";

import { Icons, Location, Social } from "./styles";

const SocialIcons = () => (
  <Icons className="social-icons">
    <Location>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://goo.gl/maps/hmycBc4hfiEthF1C6"
      >
        <GoLocation />
        Bengaluru, India
      </a>
    </Location>

    <Social>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Manan-jn"
      >
        <FiGithub />
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/manan-jain-65aa561b7/"
      >
        <FiLinkedin />
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://devpost.com/manan27-jn/"
      >
        <SiDevpost />
      </a>
    </Social>
  </Icons>
);

export default SocialIcons;
