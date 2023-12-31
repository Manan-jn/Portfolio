import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  max-width: 1366px;
  @media screen and (max-width: 480px) {
    margin-top: 160px;
  }
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 30px;
  }

  @media screen and (max-width: 393px) {
    h2 {
      font-size: 28px;
    }
  }
`;
