import React, { createContext, useState } from "react";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import codeSvg from "../assets/new-hobbies/Icone_codar.svg";
import webDev from "../assets/new-hobbies/webDev.svg";
import reactJS from "../assets/new-hobbies/reactJS.svg";
import firebase from "../assets/new-hobbies/firebase.svg";
import guardian from "../assets/portfolio/guardian.png";
import umang from "../assets/portfolio/umang.png";
import talkr from "../assets/portfolio/talkr.png";
import portManan from "../assets/portfolio/portfolioManan.png";
import harvard from "../assets/portfolio/hackharvard.png";
import princeton from "../assets/portfolio/princeton.svg";
import jeeadv from "../assets/portfolio/jeeadv.png";
import { ThemeProvider } from "styled-components";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(dark);

  const hobbies = [
    {
      id: 1,
      title1: "C/C++",
      title2: "Python",
      title3: "Javascript",
      img: codeSvg,
    },
    {
      id: 2,
      title1: "NodeJS",
      title2: "ExpressJS",
      title3: "MongoDB",
      img: webDev,
    },
    {
      id: 3,
      title1: "ReactJS",
      title2: "React-Native",
      img: reactJS,
    },
    {
      id: 4,
      title1: "Google Firebase",
      img: firebase,
    },
  ];

  const projects = [
    {
      id: 1,
      img: guardian,
      title: "Guardian",
      summary:
        "Provides the safest route with the help of past criminal data using the K means algorithm,emergency SOS and a fake call alert using DashaAI",
      tech: [
        "HTML/CSS",
        "NodeJS",
        "MongoDB",
        "Javascript",
        "Twilio API",
        "Firebase",
        "ExpressJS",
        "Google Maps API",
      ],
      demo: "https://guardian-89wb.onrender.com/",
      repo: "https://github.com/Manan-jn/Guardian",
    },
    {
      id: 2,
      img: umang,
      title: "Umang",
      summary:
        "Platform for mental health that can detect a user’s mood through facial recognition recommends and checks for correct yoga poses to enlighten the spirit, along with a self-care journal",
      tech: [
        "HTML/CSS",
        "NodeJS",
        "MongoDB",
        "Javascript",
        "ExpressJS",
        "Python",
        "OpenCV",
      ],
      demo: "https://umang-go3f.onrender.com/",
      repo: "https://github.com/Manan-jn/Umang",
    },
    {
      id: 3,
      img: talkr,
      title: "Talkrr",
      summary:
        "Real-time private chat application enabling users to communicate and exchange files seamlessly.",
      tech: ["HTML/CSS", "ReactJS", "Google Firebase"],
      demo: "https://talkrr-delta.vercel.app/login",
      repo: "https://github.com/Manan-jn/Talkrr",
    },
    {
      id: 4,
      img: portManan,
      title: "Portfolio-Manan Jain",
      summary: "Personal Portfolio Website",
      tech: ["ReactJS", "HTML5", "Styled Components"],
      demo: "https://ps-react-calculator.netlify.app/",
      repo: "https://github.com/pedrovsiqueira/react-calculator",
    },
  ];

  const Achievements = [
    {
      id: 1,
      name: "Hack Harvard",
      title: "Best First Time Hack",
      img: harvard,
      description:
        "One of the winners among 370+ hackers and 102 projects from across the world for Project Umang.",
    },
    {
      id: 2,
      name: "Hack Princeton",
      title: "Best Social Impact & Best Use of Google Cloud",
      img: princeton,
      description:
        "One of the winners among 120+ hackers from across the world for Project Guardian",
    },
    {
      id: 3,
      name: "Jee Advanced 2020",
      img: jeeadv,
      description: "Ranked among the TOP 0.021% candidates",
    },
  ];

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <Context.Provider
        value={{
          toggleTheme,
          theme,
          hobbies,
          projects,
          Achievements,
        }}
      >
        {children}
      </Context.Provider>
    </ThemeProvider>
  );
};

export { ContextProvider, Context };
