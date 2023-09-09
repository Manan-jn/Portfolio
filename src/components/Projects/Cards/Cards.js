import React, { Fragment, useContext } from "react";
import { Container, CardContainer, CardContent, Links } from "./styles";
import dividerBolaSvg from "../../../assets/icons/Divider_bola.svg";
import { RxDividerVertical } from "react-icons/rx";
import { Context } from "../../../hooks/context";

const Cards = () => {
  const { projects } = useContext(Context);

  return (
    <Container>
      {projects.map((item, index) => {
        const { title, summary, tech, img, repo, demo, id } = item;
        return (
          <CardContainer data-aos="fade-up" key={id}>
            <div
              className={
                index % 2 === 0 ? "switch-projects" : "switch-projects-reverse"
              }
            >
              <CardContent>
                <h4>{title}</h4>
                <p>{summary}</p>
                {tech.map((item, index) => (
                  <Fragment key={item}>
                    <h5>{item}</h5>
                    <img
                      className="ball-divider"
                      src={dividerBolaSvg}
                      alt="divider"
                    />
                  </Fragment>
                ))}

                <Links>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-color"
                    href={demo}
                  >
                    access demo
                  </a>
                  <RxDividerVertical
                    style={{ marginRight: "20px", marginLeft: "20px" }}
                  />
                  <a target="_blank" rel="noopener noreferrer" href={repo}>
                    access repositry
                  </a>
                </Links>
              </CardContent>
              <div className="img-container">
                <img className="project-img" src={img} alt="Project Img" />
              </div>
            </div>
          </CardContainer>
        );
      })}
    </Container>
  );
};

export default Cards;
