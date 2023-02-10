import styled from "styled-components";

export const MainDashboard = styled("main")`
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

export const MainClient = styled("main")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 50vw;
  height: 100vh;

  & > h1 {
    font-size: 26px;
    margin: 30px 0px 100px 0px;
  }

  & > div {
    display: flex;
    justify-content: space-between;

    width: 100%;

    & > aside {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      height: 60vh;

      & > div {
        display: flex;
        flex-direction: column;
        gap: 10px;

        & > div {
          display: flex;
          width: 100%;
          justify-content: space-between;

          & > button {
            padding: 7px 10px;
            color: white;
            font-weight: 700;
            margin-bottom: 25px;
          }
        }
      }
    }

    & > ul {
      display: flex;
      flex-direction: column;

      align-items: center;

      width: 50%;

      & > h2 {
        margin-bottom: 35px;
      }

      & > div {
        display: flex;
        justify-content: space-between;
        background-color: #d5d5d5;
        padding: 20px;
        border-radius: 7px;
        margin-bottom: 15px;
        width: 100%;

        & > div {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          & > p {
            margin-bottom: 5px;
          }

          & > button {
            padding: 2px 5px;
            color: grey;
          }
        }
      }
    }
  }
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
