import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 8px 0px 8px 8px;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid #b5b5b5;

  background-color: transparent;

  outline: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  border: 1px solid #d5d5d5;
  border-radius: 7px;
  padding: 50px;
  background-color: #f9f9f9;

  & > h2 {
    margin-bottom: 20px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;

    & > h3 {
      font-size: 16px;
      margin-bottom: 10px;
    }

    & > span {
      color: red;
      font-size: 12px;
    }
  }

  & > button {
    width: 100%;
    padding: 12px 0;
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;
    border: none;
    background-color: greenyellow;

    :hover {
      background-color: #90f955;
      transition: 0.3s;
      color: white;
    }
  }
`;
