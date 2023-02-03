import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 8px 0 8px 8px;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid grey;

  background-color: transparent;

  outline: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  height: 20%;
  gap: 20px;

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
  }

  & > button {
    width: 100%;
    padding: 12px 0;
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;
    border: none;
    background-color: greenyellow;
  }
`;
