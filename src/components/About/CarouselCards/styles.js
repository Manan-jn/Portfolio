import styled from "styled-components";

export const Content = styled.div`
  max-width: 912px;
  display: flex;
  justify-content: space-around;

  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
  }

  .carousel-control-next {
    display: none;
  }

  .carousel-control-prev {
    display: none;
  }

  .carousel-control-next-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: no-repeat 50%/100% 100%;
  }
`;

export const Container = styled.div`
  background: ${(props) => props.theme.colors.cardsBackgroundColor} 0% 0%
    no-repeat padding-box;
  margin-top: 104px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 314px;
  height: 314px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: -67px;
  /* z-index: 3; */
  margin-bottom: 15px;
  width: 50px;
  height: 50px;
  background: ${(props) => props.theme.colors.iconBackgroundColor};
  border-radius: 50%;

  img {
    width: 32px;
    height: 32px;
    filter: brightness(0) invert(1);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    margin-bottom: 15px;
    font-size: 28px;
  }

  p {
    height: 130px;
    width: 208px;
    font-size: 17px;
    font-weight: 500;
  }
`;
