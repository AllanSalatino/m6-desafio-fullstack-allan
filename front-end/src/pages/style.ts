import styled from "styled-components";

export const MainTag = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  width: 40vw;
  height: 100vh;

  @media (max-width: 1475px) {
    width: 50vw;
  }
  @media (max-width: 1150px) {
    width: 60vw;
  }
  @media (max-width: 950px) {
    width: 75vw;
  }
  @media (max-width: 775px) {
    width: 90vw;
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
