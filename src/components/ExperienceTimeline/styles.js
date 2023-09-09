import styled from "styled-components";

export const Container = styled.section`
  height: 768px;
  width: 100vw;
  max-width: 1366px;

  h2 {
    font-size: 30px;
    margin-bottom: 34px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    height: 504px;
    h2 {
      margin-top: 200px;
    }
  }

  @media screen and (max-width: 1139px) {
    height: 1000px;
  }

  @media screen and (max-width: 770px) {
    height: 500px;
    margin-top: 50px;
  }
`;
